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

2. (Optional) If you plan to integrate an external AI provider (e.g., Gemini) for server-side or advanced AI features, add the provider's API key to your environment and follow secure server-side integration practices. This app's built-in search and "AI" summarizer are local and do not require any external API key to function.

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

If you intend to add an external AI service later, prefer a server-side proxy that keeps API keys secret; do not embed secret keys in client code or commit them to the repository.