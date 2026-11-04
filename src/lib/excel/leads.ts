// src/lib/excel/leads.ts
import path from 'path';
import fs from 'fs';

export interface LeadRecord {
  fullName: string;
  mobile: string;
  email: string;
  preferredLocation: string;
  configuration: string;
  budget: string;
  purpose: string;
  preferredContactTime: string;
  message: string;
  source: string;
  propertySlug: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  submittedAt: string;
}

export async function saveLeadToExcel(lead: LeadRecord): Promise<void> {
  try {
    // Dynamic import to avoid SSR issues
    const XLSX = await import('xlsx');
    
    const leadsDir = path.join(process.cwd(), 'leads');
    if (!fs.existsSync(leadsDir)) {
      fs.mkdirSync(leadsDir, { recursive: true });
    }

    const filePath = path.join(leadsDir, 'enquiries.xlsx');
    
    let workbook: ReturnType<typeof XLSX.utils.book_new>;
    let worksheet: ReturnType<typeof XLSX.utils.aoa_to_sheet>;

    const headers = [
      'Date & Time',
      'Full Name',
      'Mobile',
      'Email',
      'Preferred Location',
      'Configuration',
      'Budget',
      'Purpose',
      'Preferred Contact Time',
      'Message',
      'Source Page',
      'Property',
      'UTM Source',
      'UTM Medium',
      'UTM Campaign',
    ];

    const row = [
      lead.submittedAt,
      lead.fullName,
      lead.mobile,
      lead.email,
      lead.preferredLocation,
      lead.configuration,
      lead.budget,
      lead.purpose,
      lead.preferredContactTime,
      lead.message || '',
      lead.source || '',
      lead.propertySlug || '',
      lead.utmSource || '',
      lead.utmMedium || '',
      lead.utmCampaign || '',
    ];

    if (fs.existsSync(filePath)) {
      workbook = XLSX.readFile(filePath);
      const sheetName = workbook.SheetNames[0];
      worksheet = workbook.Sheets[sheetName];
      XLSX.utils.sheet_add_aoa(worksheet, [row], { origin: -1 });
    } else {
      workbook = XLSX.utils.book_new();
      worksheet = XLSX.utils.aoa_to_sheet([headers, row]);
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Enquiries');
    }

    XLSX.writeFile(workbook, filePath);
  } catch (error) {
    console.error('Excel save error:', error);
    // Don't throw – lead is already saved to console/logs
  }
}

export async function saveLeadToJSON(lead: LeadRecord): Promise<void> {
  try {
    const leadsDir = path.join(process.cwd(), 'leads');
    if (!fs.existsSync(leadsDir)) {
      fs.mkdirSync(leadsDir, { recursive: true });
    }

    const filePath = path.join(leadsDir, 'enquiries.jsonl');
    const line = JSON.stringify(lead) + '\n';
    fs.appendFileSync(filePath, line, 'utf8');
  } catch (error) {
    console.error('JSON lead save error:', error);
  }
}

export async function saveLeadToGoogleSheets(lead: LeadRecord): Promise<boolean> {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || process.env.GOOGLE_SHEETS_URL;
  if (!webhookUrl) {
    return false;
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lead),
      redirect: 'follow',
    });

    if (res.ok || res.status === 200 || res.status === 302) {
      console.log('[GOOGLE_SHEETS] Lead successfully synced to Google Sheet.');
      return true;
    } else {
      console.warn(`[GOOGLE_SHEETS] Webhook returned status ${res.status}`);
      return false;
    }
  } catch (error) {
    console.error('[GOOGLE_SHEETS_SYNC_ERROR]', error);
    return false;
  }
}

