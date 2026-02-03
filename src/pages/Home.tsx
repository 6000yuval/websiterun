import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { CATEGORIES } from '../data/content';
import SEO from '../components/SEO';
import { useRouter } from '../contexts/RouterContext';

const Home: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="flex flex-col">
      <SEO title="דף הבית" description="המדריך המלא והסמכותי לעבודה נכונה עם בינה מלאכותית (AI) בישראל." canonicalUrl="https://your-domain.com/" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-16 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-grid-slate-200"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            המדריך המלא לעבודה עם AI
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            בינה מלאכותית בעברית <br/>
            <span className="text-blue-600">להבין, לעבוד, ולהעמיק</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            לא איך להשתמש ב-AI, אלא איך להשתמש בו <strong>נכון</strong>.
            <br className="hidden md:block" />
            אנחנו כאן כדי ללמד אתכם מיומנות חדשה: לנהל שיחה חכמה, נשלטת ואפקטיבית.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => navigate({ name: 'category', id: 'basics' })}
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              התחילו כאן
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => navigate({ name: 'category', id: 'skills' })}
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              שיפור מיומנויות
            </button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">כל המדריכים</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category) => (
              <button 
                key={category.id} 
                onClick={() => navigate({ name: 'category', id: category.id })}
                className="group p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all bg-white flex flex-col items-start text-right relative overflow-hidden"
              >
                {/* Colored accent background */}
                <div className={`absolute top-0 right-0 w-full h-1 ${category.color.replace('bg-', 'bg-opacity-50 bg-')}`} />
                
                <div className={`p-3 rounded-lg mb-4 group-hover:scale-110 transition-transform ${category.color}`}>
                  {category.icon && React.isValidElement(category.icon)
                    ? React.cloneElement(category.icon as React.ReactElement<any>, { className: "text-slate-800 w-6 h-6" })
                    : null}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {category.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="mt-auto text-blue-600 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  למעבר למדור <ArrowLeft className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;