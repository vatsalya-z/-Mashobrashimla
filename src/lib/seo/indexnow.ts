// src/lib/seo/indexnow.ts

const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const DEFAULT_HOST = 'mashobrashimla.com';

interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation?: string;
  urlList: string[];
}

export interface IndexNowResult {
  success: boolean;
  statusCode?: number;
  submittedCount: number;
  message: string;
}

/**
 * Validates and filters URLs to ensure only public, canonical URLs on the verified host are submitted.
 */
export function sanitizeIndexNowUrls(urls: string[], allowedHost: string = DEFAULT_HOST): string[] {
  const disallowedPatterns = ['/api/', '/admin/', '/dashboard/', '/_next/', '/private/'];

  return Array.from(new Set(urls))
    .filter((rawUrl) => {
      try {
        const parsed = new URL(rawUrl);
        // Ensure HTTPS and matching host
        if (parsed.protocol !== 'https:') return false;
        if (parsed.hostname !== allowedHost && parsed.hostname !== `www.${allowedHost}`) return false;

        // Disallow private endpoints
        const isDisallowed = disallowedPatterns.some((pattern) => parsed.pathname.startsWith(pattern));
        return !isDisallowed;
      } catch {
        return false;
      }
    });
}


export async function submitToIndexNow(
  urls: string[],
  options: {
    key?: string;
    host?: string;
    keyLocation?: string;
  } = {}
): Promise<IndexNowResult> {
  const key = options.key || process.env.INDEXNOW_KEY;
  const host = options.host || process.env.INDEXNOW_HOST || DEFAULT_HOST;
  const keyLocation = options.keyLocation || process.env.INDEXNOW_KEY_LOCATION;

  if (!key) {
    return {
      success: false,
      submittedCount: 0,
      message: 'IndexNow key is missing. Set INDEXNOW_KEY in environment variables.',
    };
  }

  const sanitizedUrls = sanitizeIndexNowUrls(urls, host);

  if (sanitizedUrls.length === 0) {
    return {
      success: false,
      submittedCount: 0,
      message: 'No valid, public URLs provided for submission.',
    };
  }

  const payload: IndexNowPayload = {
    host,
    key,
    ...(keyLocation ? { keyLocation } : {}),
    urlList: sanitizedUrls,
  };

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'TheRidgeMashobra-IndexNow/1.0',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      return {
        success: true,
        statusCode: response.status,
        submittedCount: sanitizedUrls.length,
        message: `Successfully notified IndexNow of ${sanitizedUrls.length} URL(s). Status: ${response.status}`,
      };
    } else {
      const errorText = await response.text();
      return {
        success: false,
        statusCode: response.status,
        submittedCount: 0,
        message: `IndexNow submission returned HTTP ${response.status}: ${errorText.slice(0, 200)}`,
      };
    }
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    return {
      success: false,
      submittedCount: 0,
      message: `IndexNow network error: ${errorMsg}`,
    };
  }
}
