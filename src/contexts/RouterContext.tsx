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
  if (typeof window === 'undefined') {
    return { name: "home" }; // Default for SSR
  }
  const path = window.location.pathname;
  if (path === '/' || path === '') return { name: "home" };

  const segments = path.split('/').filter(Boolean);

  if (segments[0] === 'article' && segments[1]) return { name: "article", id: decodeURIComponent(segments[1]) };
  if (segments[0] === 'category' && segments[1]) return { name: "category", id: decodeURIComponent(segments[1]) };
  if (segments[0] === 'glossary') return { name: "glossary", term: segments[1] ? decodeURIComponent(segments[1]) : undefined };

  return { name: "home" };
};

// Helper to get path from page
const getPathFromPage = (page: Page): string => {
  switch (page.name) {
    case 'home':
      return '/';
    case 'article':
      return `/article/${page.id}`;
    case 'category':
      return `/category/${page.id}`;
    case 'glossary':
      return page.term ? `/glossary/${page.term}` : '/glossary';
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
    // Handle browser back/forward buttons (only on client)
    if (typeof window !== 'undefined') {
      const handlePopState = () => {
        setPage(getPageFromPath());
      };
      window.addEventListener('popstate', handlePopState);
      return () => window.removeEventListener('popstate', handlePopState);
    }
  }, []);

  const handleNavigate = (newPage: Page) => {
    const path = getPathFromPage(newPage);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', path);
      window.scrollTo(0, 0);
    }
    setPage(newPage);
  };

  return (
    <RouterContext.Provider value={{ page, navigate: handleNavigate }}>
      {children}
    </RouterContext.Provider>
  );
};