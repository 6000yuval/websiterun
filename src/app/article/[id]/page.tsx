import React from 'react';
import { ARTICLES, CATEGORIES } from '../../../data/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import GlossaryHighlighter from '../../../components/GlossaryHighlighter';
import SEO from '../../../components/SEO'; // kept for compatibility if needed

interface Params {
  id: string;
}

export async function generateMetadata({ params }: { params: Params }) {
  const article = ARTICLES.find(a => a.id === params.id);
  if (!article) {
    return { title: 'מאמר לא נמצא' };
  }
  return {
    title: `${article.title} | AI בעברית`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description
    }
  };
}

export default function ArticlePage({ params }: { params: Params }) {
  const article = ARTICLES.find(a => a.id === params.id);
  if (!article) {
    notFound();
  }
  const category = CATEGORIES.find(c => c.id === article!.categoryId);
  const relatedArticles = ARTICLES.filter(a => a.categoryId === article!.categoryId && a.id !== article!.id).slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
            <Link href="/" className="hover:text-slate-900">בית</Link>
            <span className="mx-2 text-slate-300">›</span>
            <Link href={`/category/${article.categoryId}`} className="hover:text-slate-900">{category?.title || 'קטגוריה'}</Link>
            <span className="mx-2 text-slate-300">›</span>
            <span className="text-slate-900 font-medium truncate">{article.title}</span>
          </nav>

          <header className="mb-10 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex flex-wrap gap-3">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full ${category?.color || 'bg-slate-100'} text-slate-800`}>
                  {category?.title}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm text-slate-500 bg-slate-50 rounded-full">
                  {article.readTimeMinutes} דקות קריאה
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              {article.description}
            </p>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-sm text-slate-400">
              <div>מערכת AI בעברית</div>
              <div>עודכן: {article.lastUpdated}</div>
            </div>
          </header>

          <article className="bg-white p-6 md:p-12 rounded-2xl shadow-sm border border-slate-100 prose prose-lg prose-slate max-w-none">
            <GlossaryHighlighter>
              {article.content}
            </GlossaryHighlighter>
          </article>

          <div className="mt-12 p-8 bg-blue-600 rounded-2xl text-white text-center shadow-lg shadow-blue-200">
            <h3 className="text-2xl font-bold mb-3">המאמר עזר לכם?</h3>
            <p className="mb-6 opacity-90 text-lg">שתפו את הידע עם חברים או המשיכו לקרוא מדריכים נוספים.</p>
            <div className="flex justify-center gap-4">
              <Link href={`/category/${article.categoryId}`} className="px-6 py-2 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                לכל המדריכים במדור
              </Link>
            </div>
          </div>
        </div>
      </div>

      {relatedArticles.length > 0 && (
        <div className="bg-slate-100 border-t border-slate-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900">עוד מאמרים שיעניינו אותך</h2>
              <Link href={`/category/${article.categoryId}`} className="text-blue-600 text-sm hover:underline font-medium">הכל בנושא {category?.title}</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map(rel => (
                <article key={rel.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
                  <Link href={`/article/${rel.id}`} className="text-lg font-bold text-slate-900 hover:text-blue-600 block mb-2">{rel.title}</Link>
                  <p className="text-slate-600 text-sm line-clamp-2">{rel.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}