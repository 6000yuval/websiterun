import React from 'react';
import Link from 'next/link';
import { ARTICLES, CATEGORIES } from '../../../data/content';
import { notFound } from 'next/navigation';

interface Params {
  id: string;
}

export async function generateMetadata({ params }: { params: Params }) {
  const category = CATEGORIES.find(c => c.id === params.id);
  if (!category) {
    return { title: 'מדור לא נמצא' };
  }
  return {
    title: `${category.title} | AI בעברית`,
    description: category.description
  };
}

export default function CategoryPage({ params }: { params: Params }) {
  const category = CATEGORIES.find(c => c.id === params.id);
  if (!category) {
    notFound();
  }
  const categoryArticles = ARTICLES.filter(a => a.categoryId === params.id);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <nav className="flex items-center text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900">בית</Link>
            <span className="mx-2 text-slate-300">›</span>
            <span className="text-slate-900 font-medium">{category?.title}</span>
          </nav>

          <div className="flex items-start gap-6">
            <div className={`hidden md:flex p-4 rounded-2xl text-slate-800 ${category.color}`}>
              {category.icon && React.isValidElement(category.icon)
                ? React.cloneElement(category.icon as React.ReactElement<any>, { className: "w-8 h-8" })
                : null}
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">{category.title}</h1>
              <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">{category.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map(article => (
              <article key={article.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
                <Link href={`/article/${article.id}`} className="text-xl font-bold text-slate-900 hover:text-blue-600 block mb-2">
                  {article.title}
                </Link>
                <p className="text-slate-600 text-sm mb-4">{article.description}</p>
                <div className="text-slate-400 text-xs">{article.readTimeMinutes} דקות קריאה</div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100">
            <p className="text-xl text-slate-500 mb-4">טרם פורסמו מאמרים במדור זה.</p>
            <p className="text-slate-400">אנחנו עובדים על תוכן איכותי שיעלה בקרוב.</p>
          </div>
        )}
      </div>
    </div>
  );
}