# Microsoft Bing Webmaster Tools & IndexNow Integration Manual

Website: The Ridge Mashobra, Shimla  
Production Domain: `https://mashobrashimla.com`  
Sitemap URL: `https://mashobrashimla.com/sitemap.xml`  
IndexNow Protocol Endpoint: `https://api.indexnow.org/indexnow`

---

## 1. Overview of Bing Indexing & IndexNow

IndexNow is an open search engine protocol created by Microsoft Bing and supported by Bing, Yandex, Naver, and Seznam. It allows website publishers to instantly inform search engines whenever content is published, updated, or removed, triggering rapid discovery and crawling without waiting for periodic crawler passes.

### Important Distinction
- IndexNow is NOT a guarantee of indexation. It is a real-time notification mechanism that guarantees search engines are alerted to crawl new/updated URLs promptly.
- Indexing decisions remain based on search engine quality standards, content originality, and canonical relevance.

---

## 2. Setting Up Bing Webmaster Tools

### Step 1: Add & Verify the Site
1. Navigate to [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Sign in with your Microsoft account (or Google account).
3. Choose one of two verification methods:
   - Recommended: Import directly from verified Google Search Console (instant verification).
   - Manual: Add `https://mashobrashimla.com` and place the verification CNAME/DNS record or upload the Bing verification XML file to `public/`.

### Step 2: Submit the XML Sitemap
1. In the Bing Webmaster Tools sidebar, select Sitemaps.
2. Click Submit sitemap.
3. Enter:
   ```text
   https://mashobrashimla.com/sitemap.xml
   ```
4. Click Submit and verify that status reflects Processing / Success.

### Step 3: Monitor Crawl & Indexing Health
- Check URL Inspection in Bing Webmaster Tools for core pages.
- Review Crawl Control to optimize Bingbot crawl timing.
- Review SEO Reports and Site Scan for technical health insights.

---

## 3. Configuring IndexNow for The Ridge Mashobra

The website has a complete, production-ready IndexNow integration implemented in code:
- Server-side submit utility: `src/lib/seo/indexnow.ts`
- API webhook endpoint: `src/app/api/indexnow/route.ts`
- CLI submission script: `scripts/submit-indexnow.mjs`

### Step 1: Generate an IndexNow Key
1. Go to [Bing Webmaster Tools IndexNow](https://www.bing.com/indexnow) or generate any 8–128 character hex/alphanumeric string:
   *Example key:* `a1b2c3d4e5f67890abcdef1234567890`
2. Create a verification text file in the `public/` directory named `<your-key>.txt` containing only the key:
   *File path:* `public/a1b2c3d4e5f67890abcdef1234567890.txt`
   *File content:* `a1b2c3d4e5f67890abcdef1234567890`
3. Add the key to your `.env` file on production:
   ```env
   INDEXNOW_KEY=a1b2c3d4e5f67890abcdef1234567890
   INDEXNOW_HOST=mashobrashimla.com
   INDEXNOW_KEY_LOCATION=https://mashobrashimla.com/a1b2c3d4e5f67890abcdef1234567890.txt
   INDEXNOW_SUBMIT_SECRET=your_custom_internal_secret_token
   ```

### Step 2: Triggering IndexNow Submissions

#### Option A: Run via CLI Script
When you deploy updates or add blog posts/properties:
```bash
node scripts/submit-indexnow.mjs
```
Or submit a specific newly updated URL:
```bash
node scripts/submit-indexnow.mjs https://mashobrashimla.com/the-ridge-mashobra
```

#### Option B: Trigger via Secure Webhook / API
Send an authenticated POST request to your website:
```bash
curl -X POST https://mashobrashimla.com/api/indexnow \
  -H "Authorization: Bearer your_custom_internal_secret_token" \
  -H "Content-Type: application/json" \
  -d '{"urls": ["https://mashobrashimla.com/properties/the-ridge-mashobra-premium-villa"]}'
```
*Note:* If no `urls` array is passed, the endpoint automatically compiles and submits all 53 canonical public routes.

---

## 4. Verification & Status Monitoring

1. In Bing Webmaster Tools, open the IndexNow tab under Configure My Site.
2. Review the submission history table:
   - Check Submitted URLs count.
   - Check Status (200 OK / 202 Accepted).
   - Monitor the crawl timestamp showing when Bingbot visited the submitted URLs.

