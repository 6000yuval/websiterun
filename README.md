<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/15n4Uz1cqdQ_FdckfeLzW-fPqTWBr8hMU

## SEO and Crawlability

This site is optimized for search engines with:

- **Meta tags**: Dynamic SEO meta tags for each page using react-helmet-async
- **Sitemap**: Automatically generated sitemap.xml with all routes
- **Robots.txt**: Proper robots.txt configuration
- **Canonical URLs**: Canonical URLs to prevent duplicate content issues
- **Prerendering**: Basic prerendering with react-snap for better SEO
- **History-based routing**: Uses browser history API instead of hash routing for cleaner URLs

### Before Deploying

1. Update the domain in these files:
   - `public/sitemap.xml` - Replace `https://your-domain.com` with your actual domain
   - `public/robots.txt` - Replace `https://your-domain.com` with your actual domain
   - `src/components/SEO.tsx` - Update canonical URLs in page components

2. Submit your sitemap to Google Search Console and Bing Webmaster Tools

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
