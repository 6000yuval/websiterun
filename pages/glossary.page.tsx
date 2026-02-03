import React from 'react';

export { Page };

function Page() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            מילון מונחים
          </h1>
          <p className="text-xl text-slate-600">
            מילון מונחים מקיף של בינה מלאכותית בעברית.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <p>תוכן מילון המונחים יוצג כאן.</p>
      </div>
    </div>
  );
}