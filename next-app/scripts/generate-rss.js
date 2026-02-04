const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const SITE_URL = process.env.SITE_URL || 'https://your-domain.com';
const postsPath = path.join(process.cwd(), 'next-app', 'content', 'articles');
const outPath = path.join(process.cwd(), 'next-app', 'public');
if (!fs.existsSync(outPath)) fs.mkdirSync(outPath, { recursive: true });

const files = fs.readdirSync(postsPath).filter((f) => f.endsWith('.mdx'));

// Read posts and sort by date desc
const posts = files.map((fileName) => {
  const fullPath = path.join(postsPath, fileName);
  const raw = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(raw);
  const slug = fileName.replace(/\.mdx$/, '');
  return {
    title: data.title || slug,
    description: data.description || '',
    date: data.date || new Date().toISOString(),
    link: `${SITE_URL}/articles/${slug}`,
    guid: `${SITE_URL}/articles/${slug}`,
    content: content || ''
  };
}).sort((a,b) => new Date(b.date) - new Date(a.date));

const siteTitle = 'AI בעברית';
const siteDesc = 'המדריך המלא לעבודה נכונה עם בינה מלאכותית';

const rssItems = posts.map(p => {
  return `<item>
    <title><![CDATA[${p.title}]]></title>
    <link>${p.link}</link>
    <guid>${p.guid}</guid>
    <pubDate>${new Date(p.date).toUTCString()}</pubDate>
    <description><![CDATA[${p.description}]]></description>
  </item>`;
}).join('\n');

const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title><![CDATA[${siteTitle}]]></title>
  <link>${SITE_URL}</link>
  <description><![CDATA[${siteDesc}]]></description>
  <language>he-IL</language>
  ${rssItems}
</channel>
</rss>
`;

const outFile = path.join(outPath, 'rss.xml');
fs.writeFileSync(outFile, rss, 'utf-8');
console.log(`Wrote RSS to ${outFile} (${posts.length} items)`);