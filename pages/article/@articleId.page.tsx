import React from 'react';
import { ARTICLES, CATEGORIES } from '../../src/data/content';
import SEO from '../../src/components/SEO';
import { useRouter } from '../../src/contexts/RouterContext';
import { ArrowLeft, Clock, User } from 'lucide-react';

export { Page };

function Page({ routeParams }: { routeParams: { articleId: string } }) {
  const { navigate } = useRouter();
  const article = ARTICLES.find(a => a.id === routeParams.articleId);
  const category = article ? CATEGORIES.find(c => c.id === article.categoryId) : null;

  if (!article) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <SEO title="מאמר לא נמצא" description="המאמר שחיפשת אינו קיים." />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">המאמר לא נמצא</h2>
        <p className="text-slate-600 mb-6">נראה שהמאמר שחיפשת לא קיים.</p>
        <button onClick={() => navigate({ name: 'home' })} className="text-blue-600 hover:underline">חזרה לדף הבית</button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title={article.title}
        description={article.excerpt}
      />

      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={() => navigate({ name: 'home' })}
            className="flex items-center text-slate-600 hover:text-slate-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 ml-2" />
            חזרה לדף הבית
          </button>

          <div className="flex items-center mb-4">
            {category && (
              <div className={`p-2 rounded-lg ${category.color} mr-3`}>
                {category.icon}
              </div>
            )}
            <div className="text-sm text-slate-500">
              {category?.title}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {article.title}
          </h1>

          <div className="flex items-center text-slate-600 mb-6">
            <User className="w-4 h-4 ml-1" />
            <span className="ml-4">{article.author}</span>
            <Clock className="w-4 h-4 ml-4" />
            <span>{article.readTime} דקות קריאה</span>
          </div>

          <p className="text-xl text-slate-600 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}