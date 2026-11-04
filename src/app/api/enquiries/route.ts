// src/app/api/enquiries/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { validateEnquiry, sanitizeString } from '@/lib/validation/enquiry';
import { saveLeadToExcel, saveLeadToJSON, saveLeadToGoogleSheets } from '@/lib/excel/leads';

// Simple in-memory rate limiter (per IP, resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000', 10);
  const max = parseInt(process.env.RATE_LIMIT_MAX || '10', 10);

  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= max) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Validate
    const validation = validateEnquiry({
      fullName: body.fullName,
      mobile: body.mobile,
      email: body.email,
      preferredLocation: body.preferredLocation,
      configuration: body.configuration,
      budget: body.budget,
      purpose: body.purpose,
      consent: body.consent,
    });

    if (!validation.valid) {
      return NextResponse.json(
        { message: 'Please correct the form errors.', errors: validation.errors },
        { status: 400 }
      );
    }

    // Build lead record
    const lead = {
      fullName: sanitizeString(body.fullName),
      mobile: sanitizeString(body.mobile),
      email: sanitizeString(body.email),
      preferredLocation: sanitizeString(body.preferredLocation),
      configuration: sanitizeString(body.configuration),
      budget: sanitizeString(body.budget),
      purpose: sanitizeString(body.purpose),
      preferredContactTime: sanitizeString(body.preferredContactTime),
      message: sanitizeString(body.message),
      source: sanitizeString(body.source),
      propertySlug: sanitizeString(body.propertySlug),
      referrer: sanitizeString(body.referrer),
      utmSource: sanitizeString(body.utmSource),
      utmMedium: sanitizeString(body.utmMedium),
      utmCampaign: sanitizeString(body.utmCampaign),
      submittedAt: new Date().toISOString(),
    };

    // Log to server
    console.log('[LEAD]', JSON.stringify({ ...lead, email: '***', mobile: '***' }));

    // 1. Sync to Google Sheet (Cloud Excel)
    await saveLeadToGoogleSheets(lead);

    // 2. Save to JSON (reliable fallback)
    await saveLeadToJSON(lead);

    // 3. Save to local Excel (best effort fallback)
    await saveLeadToExcel(lead);

    return NextResponse.json(
      { message: 'Enquiry submitted successfully. We will contact you shortly.', success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('[ENQUIRY_API_ERROR]', error);
    return NextResponse.json(
      { message: 'An error occurred. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  const hasWebhook = Boolean(process.env.GOOGLE_SHEET_WEBHOOK_URL || process.env.GOOGLE_SHEETS_URL);
  return NextResponse.json({
    status: 'ok',
    googleSheetConfigured: hasWebhook,
    message: hasWebhook
      ? 'Google Sheet Webhook URL is configured.'
      : 'Google Sheet Webhook URL is not configured yet. Set GOOGLE_SHEET_WEBHOOK_URL in your .env file.',
  });
}

