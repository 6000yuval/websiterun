import React, { useState } from 'react';
import { Article } from '../types';
import { Clock, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { useRouter } from '../contexts/RouterContext';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { navigate } = useRouter();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      onClick={() => navigate({ name: 'article', id: article.id })}
      className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all cursor-pointer group flex flex-col h-full text-right"
    >
      {/* Image Section */}
      <div className="relative h-48 bg-slate-100 overflow-hidden">
        {article.imageUrl && !imageError ? (
          <>
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-slate-200 border-t-blue-500 rounded-full animate-spin"></div>
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-50 text-slate-300">
            <ImageIcon className="w-12 h-12" />
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
            {article.title}
          </h3>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {article.description}
        </p>
        <div className="flex items-center justify-between text-slate-400 text-xs mt-auto pt-4 border-t border-slate-50">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{article.readTimeMinutes} דק' קריאה</span>
          </div>
          <div className="flex items-center gap-1 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            <span>לקריאה</span>
            <ArrowLeft className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;