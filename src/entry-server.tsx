import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { RouterProvider, Page } from './contexts/RouterContext';

const getPageFromUrl = (url: string): Page => {
  // Create a URL object — if url is a path, use a dummy base.
  let pathname = '/';
  try {
    const u = new URL(url, 'http://localhost');
    pathname = u.pathname;
  } catch {
    pathname = '/';
  }

  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) return { name: 'home' };

  if (segments[0] === 'article' && segments[1]) {
    return { name: 'article', id: decodeURIComponent(segments[1]) };
  }
  if (segments[0] === 'category' && segments[1]) {
    return { name: 'category', id: decodeURIComponent(segments[1]) };
  }
  if (segments[0] === 'glossary') {
    return { name: 'glossary', term: segments[1] ? decodeURIComponent(segments[1]) : undefined };
  }

  return { name: 'home' };
};

export const render = (url: string) => {
  const initialPage: Page = getPageFromUrl(url);

  // Collect helmet data during server render
  const helmetContext: { helmet?: any } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <RouterProvider initialPage={initialPage}>
        <App />
      </RouterProvider>
    </HelmetProvider>
  );

  // Compose head markup from helmet if present (title/meta/link/etc)
  const head = helmetContext.helmet
    ? `${helmetContext.helmet.title.toString() || ''}${helmetContext.helmet.meta.toString() || ''}${helmetContext.helmet.link.toString() || ''}`
    : '';

  return { html, head };
};