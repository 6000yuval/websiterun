const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const SITE_URL = process.env.SITE_URL || 'https://your-domain.com';
const postsPath = path.join(process.cwd(), 'next-app', 'content', 'articles');
const outPath = path.join(process.cwd(), 'next-app', 'public');
if (!fs.existsSync(outPath)) fs.mkdirSync(outPath, { recursive: true });

const files = fs.readdirSync(postsPath).filter((f) => f.endsWith('.mdx'));

const urls = [];

// root
urls.push({
  loc: `${SITE_URL}/`,
  lastmod: new Date().toISOString().slice(0,10),
  changefreq: 'weekly',
  priority: 1.0
});

const categoriesSet = new Set();

files.forEach((fileName) => {
  const fullPath = path.join(postsPath, fileName);
  const raw = fs.readFileSync(fullPath, 'utf-8');
  const { data } = matter(raw);
  const slug = fileName.replace(/\.mdx$/, '');
  const lastmod = (data.lastUpdated || data.date || new Date().toISOString()).slice(0,10);
  urls.push({
    loc: `${SITE_URL}/articles/${slug}`,
    lastmod,
    changefreq: 'monthly',
    priority: 0.7
  });
  if (data.category) categoriesSet.add(data.category);
});

// categories
Array.from(categoriesSet).forEach((cat) => {
  urls.push({
    loc: `${SITE_URL}/category/${cat}`,
    lastmod: new Date().toISOString().slice(0,10),
    changefreq: 'monthly',
    priority: 0.8
  });
});

// glossary
urls.push({
  loc: `${SITE_URL}/glossary`,
  lastmod: new Date().toISOString().slice(0,10),
  changefreq: 'monthly',
  priority: 0.6
});

// Compose XML
const header = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

const body = urls.map(u => {
  return `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`;
}).join('\n');

const footer = `\n</urlset>\n`;

const outFile = path.join(outPath, 'sitemap.xml');
fs.writeFileSync(outFile, header + body + footer, 'utf-8');
console.log(`Wrote sitemap to ${outFile} (${urls.length} urls)`);