import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPosts, getPostBySlug } from '../../lib/posts'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '../../components/MDXComponents'
import Head from 'next/head'

export default function PostPage({ meta, mdxSource }: any) {
  if (!meta) return <div className="content-wrap">Not found</div>
  return (
    <main className="content-wrap">
      <Head>
        <title>{meta.title} | AI בעברית</title>
        <meta name="description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <article>
        <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
        <div className="text-sm text-slate-500 mb-6">{meta.date} • {meta.readTime} דקות</div>
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </article>
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await getPostBySlug(slug);
  if (!post) return { notFound: true };
  return { props: { meta: post.meta, mdxSource: post.mdxSource } };
}
