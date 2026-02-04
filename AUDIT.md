Site audit for existing repository and the new Next.js MVP

Summary:
- The repo originally contained a Vite React app with a content file (src/data/content.tsx) that includes many article entries in JSX.
- I created a new Next.js MVP under next-app/ which converts a selection of those articles into MDX files and a minimal site that SSG-renders them.

Findings & Recommendations (audit):

1) Content extraction
- The content is already authored and lives in src/data/content.tsx. For best SEO and editorial workflow, convert each article to a single MDX file under next-app/content/articles/ with frontmatter (title, slug, date, description, tags, category, image).
- I migrated a representative set of articles into MDX (5 articles). Continue migrating the rest.

2) Routing & SEO
- The Next.js app uses SSG for article pages (static generation) which is optimal for SEO.
- Ensure each article MDX has proper frontmatter: title, description (~150 chars), date, lastUpdated, image (absolute URL), slug, category, tags.
- Add JSON-LD structured data in the Head for article pages if you want richer results.

3) Images
- Images are external (Unsplash). next.config.js allows images.unsplash.com. For best LCP, consider copying hero images into public/ and serving via next/image.

4) Accessibility & RTL
- The global CSS sets direction: rtl. Ensure all components support RTL and test keyboard navigation.

5) Search & Glossary
- We included dependencies (Fuse.js) in package.json. Implement build-time search index builder (lib/searchIndex.ts) that reads frontmatter and emits a small JSON for client search.
- Glossary can remain in a data file and the highlighter should be client-only.

6) Performance
- Keep client-side JS minimal. Lazy-load search and glossary scripts.
- Optimize fonts via Next or host local fonts.

7) Deployment
- The next-app is Vercel-ready. Connect repo in Vercel UI and select next-app as the project root if you keep it in a subfolder; or move files to root for automatic detection.

8) Security
- No API keys are required in the MVP. If you add revalidation endpoints later, secure them with a token in env vars.

Next steps:
- Migrate the remainder of articles to MDX files.
- Implement sitemap.xml and RSS generator (can be a simple build script reading frontmatter).
- Add social/og image strategy (static or dynamic Vercel OG).
- Implement search index builder and client SearchModal.
- Add more MDX components mapping to the original callouts and details blocks for parity with current styling.

