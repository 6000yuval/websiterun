"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useSearch } from '../contexts/SearchContext';
import { ARTICLES, GLOSSARY } from '../data/content';
import { Search, X, ChevronLeft, Sparkles, BookOpen, AlertCircle } from 'lucide-react';
import { useRouter } from '../contexts/RouterContext';
import Fuse from 'fuse.js';
import ReactMarkdown from 'react-markdown';

const SearchModal: React.FC = () => {
  const { isOpen, closeSearch } = useSearch();
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'search' | 'ai'>('search');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const { navigate } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
      setAiResponse('');
      setActiveTab('search');
    }
  }, [isOpen]);

  // Configure Fuse.js for local search
  const fuse = useMemo(() => {
    const searchData = [
      ...ARTICLES.map(a => ({ ...a, type: 'article' as const })),
      ...GLOSSARY.map(g => ({ ...g, title: g.term, description: g.definition, type: 'glossary' as const, id: 'glossary' }))
    ];
    
    return new Fuse(searchData, {
      keys: ['title', 'description', 'term', 'definition'],
      threshold: 0.4,
      includeScore: true
    });
  }, []);

  const searchResults = useMemo(() => {
    if (!query) return [];
    return fuse.search(query).map(result => result.item).slice(0, 5);
  }, [query, fuse]);

  const handleNavigate = (type: string, id: string) => {
    if (type === 'glossary') {
      navigate({ name: 'glossary' });
    } else {
      navigate({ name: 'article', id });
    }
    closeSearch();
  };

  // Local non-AI fallback: build a helpful summary from site content and glossary.
  const handleAiAsk = async () => {
    if (!query.trim()) return;
    setIsAiLoading(true);
    setAiResponse('');

    // Simulate a short "thinking" delay for UX
    await new Promise((r) => setTimeout(r, 500));

    // Gather top matches
    const topArticles = searchResults.filter(r => (r as any).type === 'article') as any[];
    const topGlossary = searchResults.filter(r => (r as any).type === 'glossary') as any[];

    // Additionally search glossary directly for partial matches
    const glossaryMatches = GLOSSARY.filter(g => {
      const q = query.toLowerCase();
      return g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q);
    }).slice(0, 5);

    // Compose a readable markdown response
    let parts: string[] = [];
    parts.push('**תשובה מבוססת על חיפוש מקומי באתר (לא מופעלת על ידי מודל חיצוני)**');
    parts.push('');
    parts.push(`שאלתך: "${query}"`);
    parts.push('');

    if (topArticles.length > 0) {
      parts.push('**מאמרים רלוונטיים שמצאתי:**');
      topArticles.forEach(a => {
        parts.push(`- **${a.title}** — ${a.description}`);
      });
      parts.push('');
      parts.push('אם אחד מהמאמרים מתאים, לחצו על תוצאת החיפוש כדי לעבור אליו ולקרוא בהרחבה.');
      parts.push('');
    }

    if (topGlossary.length > 0 || glossaryMatches.length > 0) {
      const combinedGloss = [...topGlossary.map(g => g as any), ...glossaryMatches];
      const unique = combinedGloss.reduce((acc: any[], item: any) => {
        if (!acc.find(x => x.term === item.term)) acc.push(item);
        return acc;
      }, []);
      if (unique.length > 0) {
        parts.push('**מושגים מהיומן/מילון שעשויים לעזור:**');
        unique.slice(0, 5).forEach((g: any) => {
          parts.push(`- **${g.term}**: ${g.definition}`);
        });
        parts.push('');
      }
    }

    if (topArticles.length === 0 && (topGlossary.length === 0 && glossaryMatches.length === 0)) {
      parts.push('לא נמצאו תוצאות ברורות בתוכן האתר עבור שאילתה זו.');
      parts.push('- נסה לשנות מילות חיפוש או להשתמש במונחים אחרים.');
      parts.push('- לחץ על "תוצאות חיפוש" כדי לראות התאמות מלאות ולבחור מאמרים ידנית.');
    } else {
      parts.push('אם תרצה תשובה מסכמת קצרה יותר או פירוט טכני, כתוב בקצרה איזה סגנון אתה רוצה (לדוגמה: "תקציר קצר", "רשימת נקודות", או "הסבר למתחיל").');
    }

    const final = parts.join('\n');
    setAiResponse(final);
    setIsAiLoading(false);
    setActiveTab('ai');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={closeSearch}
      />

      {/* Modal */}
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative z-10 flex flex-col max-h-[80vh]">
        
        {/* Search Header */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 text-lg outline-none placeholder:text-slate-400 text-slate-800 bg-transparent"
            placeholder="חיפוש באתר (לדוגמה: פרומפט, אוטומציה, איך להתחיל...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                if (activeTab === 'ai') handleAiAsk();
              }
            }}
          />
          <button onClick={closeSearch} className="p-1 hover:bg-slate-100 rounded-full text-slate-400 transition-colors" aria-label="Close search">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        {query && (
          <div className="flex border-b border-slate-100">
            <button
              onClick={() => setActiveTab('search')}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === 'search' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              תוצאות חיפוש
            </button>
            <button
              onClick={() => {
                setActiveTab('ai');
                if (!aiResponse && !isAiLoading) handleAiAsk();
              }}
              className={`flex-1 py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2 ${activeTab === 'ai' ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <Sparkles className="w-4 h-4" />
              שאל את ה-AI (לא-חיצוני)
            </button>
          </div>
        )}

        {/* Content Area */}
        <div className="overflow-y-auto p-4 min-h-[300px]">
          
          {/* Default Empty State */}
          {!query && (
            <div className="text-center py-12 text-slate-400">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>התחילו להקליד כדי לחפש מדריכים, מושגים ועוד.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {['איך מתחילים', 'הנדסת פרומפט', 'אתיקה', 'בטיחות'].map(term => (
                  <button 
                    key={term}
                    onClick={() => { setQuery(term); inputRef.current?.focus(); }}
                    className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-xs text-slate-600 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          {activeTab === 'search' && query && (
            <div className="space-y-2">
              {searchResults.length > 0 ? (
                searchResults.map((result: any, index) => (
                  <div 
                    key={index}
                    onClick={() => handleNavigate(result.type, result.id)}
                    className="p-3 hover:bg-slate-50 rounded-lg cursor-pointer group transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        {result.type === 'glossary' ? (
                          <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold">מושג</span>
                        ) : (
                          <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-full font-bold">מאמר</span>
                        )}
                        <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                          {result.title || result.term}
                        </h4>
                      </div>
                      <ChevronLeft className="w-4 h-4 text-slate-300 group-hover:text-blue-400" />
                    </div>
                    <p className="text-sm text-slate-500 line-clamp-1">
                      {result.description || result.definition}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-slate-500">
                  <AlertCircle className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                  <p>לא נמצאו תוצאות לחיפוש זה.</p>
                  <button onClick={() => { setActiveTab('ai'); handleAiAsk(); }} className="text-purple-600 hover:underline text-sm mt-2 font-medium">
                    נסה סיכום מקומי במקום &rarr;
                  </button>
                </div>
              )}
            </div>
          )}

          {/* AI Tab (local fallback) */}
          {activeTab === 'ai' && query && (
            <div className="space-y-4">
               {isAiLoading && !aiResponse ? (
                 <div className="flex flex-col items-center justify-center py-12 text-slate-400 animate-pulse">
                   <Sparkles className="w-8 h-8 mb-4 text-purple-400 animate-spin" />
                   <p className="text-sm">מחפש תשובות באתר...</p>
                 </div>
               ) : (
                 <div className="bg-purple-50/50 p-5 rounded-xl border border-purple-100">
                   <div className="flex items-center gap-2 text-purple-700 font-bold mb-3 text-xs uppercase tracking-wider">
                     <Sparkles className="w-4 h-4" />
                     תשובת חיפוש מקומית
                   </div>
                   <div className="prose prose-sm prose-slate max-w-none">
                      <ReactMarkdown>{aiResponse}</ReactMarkdown>
                   </div>
                 </div>
               )}
               
               {!isAiLoading && aiResponse && (
                 <div className="text-[10px] text-center text-slate-400 mt-4">
                   * תשובה זו נוצרה באופן מקומי מתוך תוכן האתר (מאמרים ומילון). אינה מבוססת על מודל חיצוני.
                 </div>
               )}
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="bg-slate-50 p-3 border-t border-slate-100 text-[10px] text-slate-400 flex justify-between items-center">
          <div className="flex gap-4">
            <span><kbd className="bg-white border border-slate-200 rounded px-1 font-sans">Enter</kbd> לבחירה/שליחה</span>
            <span><kbd className="bg-white border border-slate-200 rounded px-1 font-sans">Esc</kbd> לסגירה</span>
          </div>
          <div className="flex items-center gap-1">
             תוצאות מתוך האתר
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;