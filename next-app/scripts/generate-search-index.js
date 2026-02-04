const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsPath = path.join(process.cwd(), 'next-app', 'content', 'articles');
const outPath = path.join(process.cwd(), 'next-app', 'public');
if (!fs.existsSync(outPath)) fs.mkdirSync(outPath, { recursive: true });

const files = fs.readdirSync(postsPath).filter((f) => f.endsWith('.mdx'));

const index = files.map((fileName) => {
  const fullPath = path.join(postsPath, fileName);
  const raw = fs.readFileSync(fullPath, 'utf-8');
  const { data } = matter(raw);
  const slug = fileName.replace(/\.mdx$/, '');
  return {
    title: data.title || slug,
    slug,
    description: data.description || '',
    date: data.date || '',
    lastUpdated: data.lastUpdated || data.date || '',
    category: data.category || '',
    tags: data.tags || [],
    readTime: data.readTime || null,
    image: data.image || null
  };
});

// Write index trimmed to essential fields
const outFile = path.join(outPath, 'search-index.json');
fs.writeFileSync(outFile, JSON.stringify(index, null, 2), 'utf-8');
console.log(`Wrote search index to ${outFile} (${index.length} entries)`);