import React from 'react';
import { ARTICLES, CATEGORIES } from '../../src/data/content';
import SEO from '../../src/components/SEO';
import ArticleCard from '../../src/components/ArticleCard';
import { useRouter } from '../../src/contexts/RouterContext';
import { ArrowLeft } from 'lucide-react';

export { Page };

function Page({ routeParams }: { routeParams: { categoryId: string } }) {
  const { navigate } = useRouter();
  const category = CATEGORIES.find(c => c.id === routeParams.categoryId);
  const categoryArticles = ARTICLES.filter(a => a.categoryId === routeParams.categoryId);

  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <SEO title="קטגוריה לא נמצאה" description="הקטגוריה שחיפשת אינה קיימת." />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">הקטגוריה לא נמצאה</h2>
        <p className="text-slate-600 mb-6">נראה שהקטגוריה שחיפשת לא קיימת.</p>
        <button onClick={() => navigate({ name: 'home' })} className="text-blue-600 hover:underline">חזרה לדף הבית</button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title={category.title}
        description={category.description}
      />

      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <button
            onClick={() => navigate({ name: 'home' })}
            className="flex items-center text-slate-600 hover:text-slate-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 ml-2" />
            חזרה לדף הבית
          </button>

          <div className="flex items-center mb-4">
            <div className={`p-3 rounded-lg ${category.color} mr-4`}>
              {category.icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {category.title}
              </h1>
              <p className="text-xl text-slate-600">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onClick={() => navigate({ name: 'article', id: article.id })}
            />
          ))}
        </div>

        {categoryArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">אין עדיין מאמרים בקטגוריה זו.</p>
          </div>
        )}
      </div>
    </div>
  );
}