import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';

export type PostMeta = {
  title: string;
  description: string;
  date: string;
  lastUpdated?: string;
  image?: string;
  tags?: string[];
  slug: string;
  readTime?: number;
  category?: string;
};

const postsPath = path.join(process.cwd(), 'next-app', 'content', 'articles');

export async function getAllPosts() {
  const files = fs.readdirSync(postsPath).filter((f) => f.endsWith('.mdx'));
  const posts = files.map((fileName) => {
    const fullPath = path.join(postsPath, fileName);
    const raw = fs.readFileSync(fullPath, 'utf-8');
    const { data } = matter(raw);
    const slug = fileName.replace(/\.mdx$/, '');
    return { ...(data as PostMeta), slug };
  });
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsPath, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(raw);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
    },
    scope: data,
  });
  return { meta: data as PostMeta, mdxSource };
}
