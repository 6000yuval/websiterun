import React, { useEffect, useRef } from 'react';
import { GLOSSARY } from '../data/content';
import { ChevronLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { useRouter } from '../contexts/RouterContext';

interface GlossaryPageProps {
  term?: string;
}

const GlossaryPage: React.FC<GlossaryPageProps> = ({ term }) => {
  const { navigate } = useRouter();
  const termRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (term) {
      const el = termRefs.current[term];
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('ring-2', 'ring-blue-500', 'bg-blue-50');
          setTimeout(() => {
             el.classList.remove('ring-2', 'ring-blue-500', 'bg-blue-50');
          }, 3000);
        }, 100);
      }
    }
  }, [term]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="מילון מושגים" 
        description="מילון מונחי AI מקיף בעברית. הסברים פשוטים למושגים כמו LLM, Prompt, Hallucination ועוד." 
      />
      
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <nav className="flex items-center text-sm text-slate-500 mb-6">
            <button onClick={() => navigate({ name: 'home' })} className="hover:text-slate-900">בית</button>
            <ChevronLeft className="w-4 h-4 mx-2 text-slate-300" />
            <span className="text-slate-900 font-medium">מילון מושגים</span>
          </nav>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            מילון מושגים
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            הסברים קצרים וברורים למונחים הנפוצים בעולם הבינה המלאכותית.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {GLOSSARY.map((item) => (
            <div 
              key={item.term} 
              ref={(el) => { termRefs.current[item.term] = el; }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                {item.term}
              </h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlossaryPage;