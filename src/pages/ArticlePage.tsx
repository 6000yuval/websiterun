import React from 'react';
import { ARTICLES, CATEGORIES } from '../data/content';
import { Clock, Calendar, ChevronLeft, User, ArrowRight, Share2 } from 'lucide-react';
import SEO from '../components/SEO';
import ArticleCard from '../components/ArticleCard';
import { useRouter } from '../contexts/RouterContext';
import GlossaryHighlighter from '../components/GlossaryHighlighter';

interface ArticlePageProps {
  id: string;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ id }) => {
  const { navigate } = useRouter();
  const article = ARTICLES.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <SEO title="מאמר לא נמצא" description="המאמר שחיפשת אינו קיים." />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">המאמר לא נמצא</h2>
        <p className="text-slate-600 mb-6">נראה שהדף שחיפשת לא קיים או הוסר.</p>
        <button onClick={() => navigate({ name: 'home' })} className="text-blue-600 hover:underline">חזרה לדף הבית</button>
      </div>
    );
  }

  const category = CATEGORIES.find(c => c.id === article.categoryId);
  
  // Logic for Related Articles: Same category, exclude current, take 3
  const relatedArticles = ARTICLES
    .filter(a => a.categoryId === article.categoryId && a.id !== article.id)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.description,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('הקישור הועתק ללוח!');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title={article.title} 
        description={article.description} 
        type="article"
      />
      
      {/* Main Content Container */}
      <div className="py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
            <button onClick={() => navigate({ name: 'home' })} className="hover:text-slate-900">בית</button>
            <ChevronLeft className="w-4 h-4 mx-2 flex-shrink-0 text-slate-300" />
            <button onClick={() => navigate({ name: 'category', id: article.categoryId })} className="hover:text-slate-900">
              {category?.title || 'קטגוריה'}
            </button>
            <ChevronLeft className="w-4 h-4 mx-2 flex-shrink-0 text-slate-300" />
            <span className="text-slate-900 font-medium truncate">{article.title}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-10 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex flex-wrap gap-3">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full ${category?.color || 'bg-slate-100'} text-slate-800`}>
                  {category?.title}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm text-slate-500 bg-slate-50 rounded-full">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTimeMinutes} דקות קריאה
                </span>
              </div>
              <button 
                onClick={handleShare}
                className="p-2 text-slate-400 hover:text-blue-600 hover:bg-slate-50 rounded-full transition-colors"
                title="שתף מאמר"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              {article.description}
            </p>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>מערכת AI בעברית</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>עודכן: {article.lastUpdated}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="bg-white p-6 md:p-12 rounded-2xl shadow-sm border border-slate-100 prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-a:text-blue-600">
            <GlossaryHighlighter>
              {article.content}
            </GlossaryHighlighter>
          </article>

          {/* CTA */}
          <div className="mt-12 p-8 bg-blue-600 rounded-2xl text-white text-center shadow-lg shadow-blue-200">
            <h3 className="text-2xl font-bold mb-3">המאמר עזר לכם?</h3>
            <p className="mb-6 opacity-90 text-lg">
              שתפו את הידע עם חברים או המשיכו לקרוא מדריכים נוספים.
            </p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => navigate({ name: 'category', id: article.categoryId })}
                className="px-6 py-2 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                לכל המדריכים במדור
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <div className="bg-slate-100 border-t border-slate-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900">עוד מאמרים שיעניינו אותך</h2>
              <button onClick={() => navigate({ name: 'category', id: article.categoryId })} className="text-blue-600 text-sm hover:underline font-medium">
                הכל בנושא {category?.title}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map(relArticle => (
                <ArticleCard key={relArticle.id} article={relArticle} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticlePage;