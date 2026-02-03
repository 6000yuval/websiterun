import React from 'react';
import { renderToString } from 'react-dom/server';
import * as helmet from 'react-helmet-async';
const { HelmetProvider } = helmet;
import { SearchProvider } from '../src/contexts/SearchContext';
import { RouterProvider, useRouter } from '../src/contexts/RouterContext';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import SearchModal from '../src/components/SearchModal';

export { render };

function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = renderToString(
    <Layout>
      <Page {...pageProps} />
    </Layout>
  );

  const documentHtml = `<!DOCTYPE html>
    <html lang="he" dir="rtl">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AI בעברית</title>
      </head>
      <body>
        <div id="page-view">${pageHtml}</div>
      </body>
    </html>`;

  return { documentHtml };
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-900" dir="rtl">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-slate-900">AI בעברית</h1>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 AI בעברית</p>
        </div>
      </footer>
    </div>
  );
}