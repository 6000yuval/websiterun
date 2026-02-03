import React from 'react';
import { GLOSSARY } from '../../data/content';

export const metadata = {
  title: 'מילון מושגים | AI בעברית',
  description: 'מילון מונחי AI מקיף בעברית. הסברים פשוטים למושגים כמו LLM, Prompt, Hallucination ועוד.'
};

export default function GlossaryPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">מילון מושגים</h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">הסברים קצרים וברורים למונחים הנפוצים בעולם הבינה המלאכותית.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {GLOSSARY.map(item => (
            <div key={item.term} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">{item.term}</h3>
              <p className="text-slate-700 leading-relaxed text-lg">{item.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}