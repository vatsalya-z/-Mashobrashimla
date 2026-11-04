# Google Search Console (GSC) Readiness & Submission Manual

Website: The Ridge Mashobra, Shimla  
Production Domain: `https://mashobrashimla.com`  
Sitemap URL: `https://mashobrashimla.com/sitemap.xml`  
Robots.txt URL: `https://mashobrashimla.com/robots.txt`

---

## 1. Technical Prerequisites Verified

The website is fully prepared for Google Search Console verification and indexing:
- [x] Server-Side Rendered Static HTML (SSG): All 53 indexable routes are pre-rendered, ensuring Googlebot encounters full body content, headings, and images on initial HTTP GET.
- [x] Canonical Tags: Every indexable route emits a strict absolute canonical URL (`https://mashobrashimla.com/...`).
- [x] Sitemap: Fully dynamic `sitemap.xml` output containing all valid static, property, location, and blog URLs with appropriate priority and change frequency tiers.
- [x] Robots Directive: Crawl allowed for all public pages; private endpoints (`/api/`, `/admin/`, `/dashboard/`) blocked.
- [x] Structured Data (Schema.org): Verified JSON-LD for `RealEstateAgent`, `WebSite`, `BreadcrumbList`, `FAQPage`, `Article`, and `SingleFamilyResidence`.
- [x] Mobile Responsiveness: Viewport meta tags, fluid typography, and responsive image sizes configured.
- [x] No Broken Internal Links: All internal links resolve to valid, active 200 OK routes.
- [x] HTTP Status Codes: Custom `not-found.tsx` provides clean 404 responses for non-existent pages without soft-404 degradation.

---

## 2. Step-by-Step Google Search Console Setup Checklist

### Step 1: Verify Domain Ownership
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Choose Domain property type and enter `mashobrashimla.com` (covers `https://`, `http://`, `www`, and non-www subdomains).
3. Add the TXT verification record provided by Google to your DNS records (via Cloudflare, GoDaddy, Namecheap, or your DNS provider).
4. *Alternative Method:* If DNS access is restricted, use the URL Prefix property type for `https://mashobrashimla.com` and verify via HTML file upload or Google Analytics / Google Tag Manager.

### Step 2: Submit the XML Sitemap
1. In the left navigation menu, click Sitemaps (under Indexing).
2. Under "Add a new sitemap", enter:
   ```text
   sitemap.xml
   ```
3. Click Submit.
4. Confirm that the status reports Success and that all 53 public URLs are discovered.

### Step 3: Inspect & Validate Core URLs
Use the URL Inspection tool (top search bar in GSC) to inspect:
- `https://mashobrashimla.com/` (Homepage)
- `https://mashobrashimla.com/the-ridge-mashobra` (Project Landing Page)
- `https://mashobrashimla.com/properties` (Catalog Hub)
- `https://mashobrashimla.com/locations/mashobra` (Core Location Page)
- `https://mashobrashimla.com/blog/section-118-himachal-property-rules` (Key Authority Guide)

For each URL:
1. Click Test Live URL.
2. Verify:
   - "URL is available to Google"
   - "Crawl allowed: Yes"
   - "Page fetch: Successful"
   - "User-declared canonical: matches Google-selected canonical"
   - "Rich Results detected: Breadcrumbs, FAQs, RealEstateAgent, Articles"
3. Click Request Indexing.

### Step 4: Monitor Page Indexing & Coverage Reports
- Regularly check the Pages report under Indexing:
  - Ensure zero unexpected "Not indexed" pages.
  - Confirm that redirect URLs (`/projects/the-ridge-mashobra`, `/projects/amenities`, `/gallery`) are appropriately categorized as "Page with redirect" (301/308).
  - Confirm that no valid public pages are categorized as "Duplicate without user-selected canonical" or "Soft 404".

### Step 5: Monitor Core Web Vitals & Page Experience
- Review the Core Web Vitals report (Mobile & Desktop).
- The website uses `next/font` for zero layout shift (CLS < 0.1), optimized Next.js images, and server-side static generation for rapid Largest Contentful Paint (LCP < 2.5s).

### Step 6: Monitor Search Performance
- Review Performance (Search Results):
  - Track clicks, impressions, average CTR, and average position for target terms:
    - `The Ridge Mashobra`
    - `Properties in Mashobra`
    - `Properties in Shimla`
    - `Villas in Mashobra`
    - `Section 118 Himachal property rules`

