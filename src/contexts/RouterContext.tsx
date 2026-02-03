import React, { useEffect, useState } from 'react';

export type Page =
  | { name: "home" }
  | { name: "article"; id: string }
  | { name: "category"; id: string }
  | { name: "glossary"; term?: string };

export interface RouterContextType {
  page: Page;
  navigate: (page: Page) => void;
}

export const RouterContext = React.createContext<RouterContextType | undefined>(undefined);

// Helper to parse pathname
const getPageFromPath = (): Page => {
  const path = window.location.pathname;
  if (path === '/' || path === '') return { name: "home" };

  const segments = path.split('/').filter(Boolean);

  if (segments[0] === 'article' && segments[1]) return { name: "article", id: decodeURIComponent(segments[1]) };
  if (segments[0] === 'category' && segments[1]) return { name: "category", id: decodeURIComponent(segments[1]) };
  if (segments[0] === 'glossary') return { name: "glossary", term: segments[1] ? decodeURIComponent(segments[1]) : undefined };

  return { name: "home" };
};

// Helper to set path
const setPathFromPage = (page: Page) => {
  let path = '';
  switch (page.name) {
    case 'home':
      path = '/';
      break;
    case 'article':
      path = `/article/${page.id}`;
      break;
    case 'category':
      path = `/category/${page.id}`;
      break;
    case 'glossary':
      path = page.term ? `/glossary/${page.term}` : '/glossary';
      break;
  }
  if (window.location.pathname !== path) {
    window.history.pushState(null, '', path);
  }
};

export const useRouter = () => {
  const context = React.useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
};

export const RouterProvider: React.FC<{ children: React.ReactNode; initialPage?: Page }> = ({ children, initialPage }) => {
  const [page, setPage] = useState<Page>(initialPage || getPageFromPath());

  useEffect(() => {
    // Sync URL when page changes
    setPathFromPage(page);
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    // Handle browser back/forward buttons
    const handlePopState = () => {
      setPage(getPageFromPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ page, navigate: setPage }}>
      {children}
    </RouterContext.Provider>
  );
};