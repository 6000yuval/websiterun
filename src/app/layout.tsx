import React from 'react';
import Link from 'next/link';
import '../../index.css'; // reuse your global CSS

export const metadata = {
  title: 'AI בעברית',
  description: 'המדריך המלא לעבודה נכונה עם בינה מלאכותית'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head />
      <body className="bg-slate-50 text-slate-900 antialiased font-sans">
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link href="/" className="flex items-center gap-3 text-slate-900">
                <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v6" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg">AI בעברית</div>
                  <div className="text-[10px] text-slate-500">לעבוד נכון עם בינה מלאכותית</div>
                </div>
              </Link>

              <nav className="hidden lg:flex items-center gap-4">
                <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600">בית</Link>
                <Link href="/category/basics" className="text-sm font-medium text-slate-600 hover:text-blue-600">הבסיס</Link>
                <Link href="/category/skills" className="text-sm font-medium text-slate-600 hover:text-blue-600">מיומנות</Link>
                <Link href="/glossary" className="text-sm font-medium text-slate-600 hover:text-blue-600">מילון מושגים</Link>
                <button className="px-3 py-1.5 bg-slate-100 rounded-md text-slate-500 text-sm">חיפוש</button>
              </nav>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">AI בעברית</h3>
                <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
                  אתר תוכן סמכותי שמטרתו ללמד את הקהל הישראלי איך לעבוד נכון, חכם ובטוח עם בינה מלאכותית.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">מדורים באתר</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <li><Link href="/category/basics" className="hover:text-blue-400">הבסיס</Link></li>
                  <li><Link href="/category/skills" className="hover:text-blue-400">מיומנות</Link></li>
                  <li><Link href="/glossary" className="hover:text-blue-400">מילון מושגים</Link></li>
                </ul>
              </div>

              <div className="text-sm text-slate-400">
                <h4 className="text-white font-semibold mb-4">חשוב לדעת</h4>
                <p className="mb-4">המידע באתר זה נועד למטרות חינוכיות בלבד.</p>
                <p className="opacity-50 text-xs">© {new Date().getFullYear()} AI בעברית. כל הזכויות שמורות.</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}