# The Ridge Mashobra, Shimla – Official Real Estate Web Platform

Production-ready, full-stack real estate website and lead-generation portal for **The Ridge Mashobra, Shimla** (`https://mashobrashimla.com`).

---

## 1. Project Overview

- **Brand / Website Name:** The Ridge Mashobra, Shimla
- **Domain:** `https://mashobrashimla.com`
- **Business Model:** Real Estate Brokerage / Property Consultancy / Lead Generation
- **Primary Micro-market:** Mashobra, Shimla, Himachal Pradesh
- **Target Audience:** Premium property buyers, affluent families seeking mountain second homes, vacation home investors, and real estate professionals.
- **Primary Objective:** High-intent property enquiries, brochure downloads, callback requests, and private site visit bookings.

---

## 2. Technology Stack

- **Framework:** Next.js (App Router, Server Components by default)
- **Language:** TypeScript 5 (Strict mode)
- **Styling:** Tailwind CSS v4 with custom brand tokens:
  - Primary: `#1E3A5F` (Deep Mountain Navy)
  - Accent: `#E07A2F` (Warm Cedar Terracotta)
  - Background: `#FFFFFF`
  - Secondary Background: `#F1F5F9`
  - Text Primary: `#172033`
  - Text Secondary: `#64748B`
  - Borders: `#E2E8F0`
- **Typography:** Next.js Font Optimization (`Manrope` headings, `Inter` body copy)
- **Icons:** `lucide-react`
- **Data Persistence:** Automated Excel workbook logging (`xlsx`) & JSON Lines stream (`leads/enquiries.jsonl`)
- **SEO & Compliance:** Semantic HTML, Dynamic Metadata API, JSON-LD Schema (RealEstateAgent, WebSite, Breadcrumbs, Article, FAQPage), automated `sitemap.xml`, `robots.txt`, and `llms.txt`.

---

## 3. Directory Structure

```text
├── public/
│   ├── images/
│   │   ├── hero/               # Mashobra landscape & villa hero photography
│   │   ├── properties/         # 3 BHK, 4 BHK, and luxury villa showcases
│   │   ├── locations/          # Mashobra, Shimla, Kufri, Naldehra
│   │   ├── gallery/            # Architecture, interiors, and decks
│   │   ├── about/              # Mountain lifestyle photography
│   │   └── blog/               # Insight articles & guide covers
│   ├── llms.txt                # Comprehensive AI/LLM discoverability spec
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── (core pages)
│   │   │   ├── page.tsx                    # Conversion-optimized homepage
│   │   │   ├── about-us/page.tsx           # Transparency & consultancy scope
│   │   │   ├── properties/                 # Directory & dynamic [slug] detail
│   │   │   ├── locations/                  # Region directory & [slug] guides
│   │   │   ├── blog/                       # Search, categories & [slug] posts
│   │   │   ├── contact-us/page.tsx         # Direct contact channels
│   │   │   └── enquire-now/page.tsx        # High-conversion enquiry portal
│   │   ├── (SEO high-intent landing pages)
│   │   │   ├── luxury-villas-mashobra/
│   │   │   ├── luxury-properties-shimla/
│   │   │   ├── property-in-mashobra/
│   │   │   ├── 3-bhk-villas-mashobra/
│   │   │   ├── 4-bhk-villas-mashobra/
│   │   │   ├── luxury-second-homes/
│   │   │   ├── holiday-homes-himachal/
│   │   │   ├── property-investment-shimla/
│   │   │   ├── properties-kufri/
│   │   │   ├── properties-naldehra/
│   │   │   ├── projects/the-ridge-mashobra/
│   │   │   ├── property-buying-guide-himachal/
│   │   │   └── mashobra-vs-shimla/
│   │   ├── (legal pages)
│   │   │   ├── privacy-policy/
│   │   │   ├── terms-and-conditions/
│   │   │   └── disclaimer/
│   │   ├── api/enquiries/route.ts          # Server-side validation, rate limiting & Excel
│   │   ├── sitemap.ts                      # Dynamic XML sitemap generator
│   │   ├── robots.ts                       # Search engine crawler policies
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/                         # Header, Footer, MobileStickyBar, WhatsAppFloat
│   │   ├── forms/                          # EnquiryForm with client validation & state
│   │   ├── seo/                            # JsonLd structured data generators
│   │   └── ui/                             # PropertyCard, Breadcrumb, SEOLandingPage
│   ├── lib/
│   │   ├── analytics/gtag.ts               # GA4 / GTM event hooks
│   │   ├── data/                           # Verified properties, locations & blog data
│   │   ├── excel/leads.ts                  # Automated xlsx & jsonl lead logger
│   │   ├── seo/metadata.ts                 # Reusable OpenGraph/Meta helper
│   │   └── validation/enquiry.ts           # Server validation & sanitization
│   └── types/                              # Strict TypeScript interfaces
└── leads/                                  # Server-side lead storage (enquiries.xlsx)
```

---

## 4. Lead Capture & Excel Integration

When a visitor submits an enquiry through any form on the site:
1. **Security & Validation:**
   - Client and server-side validation against mobile numbers (`[6-9]\d{9}`), valid emails, and required inputs.
   - String sanitization to prevent XSS / markup injection.
   - In-memory rate limiting (max 10 requests / minute per IP).
2. **Dual-Store Persistence:**
   - **Excel:** Automatically creates or appends to `./leads/enquiries.xlsx` with headers (`Date & Time`, `Full Name`, `Mobile`, `Email`, `Preferred Location`, `Configuration`, `Budget`, `Purpose`, `Preferred Contact Time`, `Message`, `Source Page`, `Property`, `UTM Source`, `UTM Medium`, `UTM Campaign`).
   - **JSONL Fallback:** Appends row to `./leads/enquiries.jsonl` for zero-loss serverless environments.
3. **Analytics Tracking:**
   - Dispatches GA4 / GTM events (`enquiry_submission`, `whatsapp_click`, `phone_click`, `brochure_request`, `site_visit_request`) without passing PII into URL parameters.

---

## 5. Local Setup & Development

1. **Clone & Install Dependencies:**
   ```bash
   npm install
   ```

2. **Configure Environment Variables:**
   Create a `.env.local` file based on `.env.example`:
   ```env
   NEXT_PUBLIC_SITE_URL=https://mashobrashimla.com
   NEXT_PUBLIC_SITE_NAME=The Ridge Mashobra, Shimla

   NEXT_PUBLIC_PHONE=+91-XXXXXXXXXX
   NEXT_PUBLIC_EMAIL=info@mashobrashimla.com
   NEXT_PUBLIC_WHATSAPP=+91XXXXXXXXXX

   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

   LEAD_STORAGE_PATH=./leads/enquiries.xlsx
   ```

3. **Start Local Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build:**
   ```bash
   npm run build
   npm run start
   ```

---

## 6. Production Deployment for `mashobrashimla.com`

### Deploying to Vercel (Recommended):
1. Import the repository into your Vercel account.
2. Under **Project Settings > Environment Variables**, add the production values from `.env.example`.
3. In your DNS provider (e.g., Cloudflare, GoDaddy, Namecheap):
   - **A Record:** `@` points to `76.76.21.21`
   - **CNAME Record:** `www` points to `cname.vercel-dns.com`
4. In Vercel Domains tab, assign `mashobrashimla.com` and enable automated SSL generation.

### Deploying to VPS / Linux Container:
1. Ensure Node.js 20+ and PM2 are installed.
2. Clone repo and run:
   ```bash
   npm ci
   npm run build
   pm2 start npm --name "mashobrashimla" -- start
   ```
3. Set up Nginx reverse proxy to `http://localhost:3000` with Certbot Let's Encrypt SSL.

---

## 7. Compliance and Disclaimer

This website operates strictly as an independent real estate consultancy and buyer support portal. It is **NOT** the official website of the project developer, nor does it impersonate any official developer credentials. All visual impressions are conceptual and prospective buyers are guided through full legal due diligence under Section 118 and HRERA guidelines before any transaction.
