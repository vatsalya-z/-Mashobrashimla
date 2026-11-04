// scripts/submit-indexnow.mjs
/**
 * Standalone IndexNow submission CLI script.
 * Usage:
 *   node scripts/submit-indexnow.mjs
 * Or with custom URL:
 *   node scripts/submit-indexnow.mjs https://mashobrashimla.com/the-ridge-mashobra
 */

import https from 'https';

const host = process.env.INDEXNOW_HOST || 'mashobrashimla.com';
const key = process.env.INDEXNOW_KEY || 'mashobra_indexnow_key_placeholder';
const keyLocation = process.env.INDEXNOW_KEY_LOCATION;

const targetUrls = process.argv.slice(2);
const defaultUrls = [
  `https://${host}/`,
  `https://${host}/the-ridge-mashobra`,
  `https://${host}/properties`,
  `https://${host}/locations`,
  `https://${host}/project/amenities`,
  `https://${host}/blog`,
];

const urls = targetUrls.length > 0 ? targetUrls : defaultUrls;

const payload = JSON.stringify({
  host,
  key,
  ...(keyLocation ? { keyLocation } : {}),
  urlList: urls,
});

console.log(`[IndexNow] Preparing submission for ${urls.length} URL(s) on ${host}...`);

const req = https.request(
  'https://api.indexnow.org/indexnow',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload),
    },
  },
  (res) => {
    let responseBody = '';
    res.on('data', (chunk) => (responseBody += chunk));
    res.on('end', () => {
      if (res.statusCode === 200 || res.statusCode === 202) {
        console.log(`[IndexNow] Success! HTTP ${res.statusCode}. Notified Bing & search engines.`);
      } else {
        console.log(`[IndexNow] Status: HTTP ${res.statusCode}. Note: Check your INDEXNOW_KEY environment variable. Response: ${responseBody}`);
      }
    });
  }
);

req.on('error', (err) => {
  console.error(`[IndexNow] Network Error: ${err.message}`);
});

req.write(payload);
req.end();

