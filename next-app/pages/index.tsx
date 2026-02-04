import Link from 'next/link'
import { getAllPosts } from '../lib/posts'
import { GetStaticProps } from 'next'

export default function Home({ posts }: { posts: any[] }) {
  return (
    <main className="content-wrap">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">AI בעברית — מדריכים וטיפים</h1>
        <p className="text-slate-600 mt-2">מדריכים פרקטיים, קצרים וברורים על איך להשתמש ב-AI נכון.</p>
      </header>

      <section className="space-y-6">
        {posts.map((p) => (
          <article key={p.slug} className="p-4 border rounded-lg">
            <Link href={`/articles/${p.slug}`}>
              <a className="text-xl font-semibold">{p.title}</a>
            </Link>
            <p className="text-slate-600">{p.description}</p>
            <div className="text-sm text-slate-500 mt-2">{p.date} • {p.readTime} דקות</div>
          </article>
        ))}
      </section>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return { props: { posts } };
}
