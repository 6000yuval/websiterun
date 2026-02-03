import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { SearchProvider } from "./contexts/SearchContext";
import { RouterProvider, useRouter } from "./contexts/RouterContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchModal from "./components/SearchModal";

import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import CategoryPage from "./pages/CategoryPage";
import GlossaryPage from "./pages/GlossaryPage";

const AppContent = () => {
  const { page, navigate } = useRouter();

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-900" dir="rtl">
      <Navbar onNavigate={navigate} />
      <SearchModal />
      <main className="flex-grow">
        {page.name === "home" && <Home />}
        {page.name === "article" && <ArticlePage id={page.id} />}
        {page.name === "category" && <CategoryPage id={page.id} />}
        {page.name === "glossary" && <GlossaryPage term={page.term} />}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <HelmetProvider>
        <SearchProvider>
          <AppContent />
        </SearchProvider>
      </HelmetProvider>
    </RouterProvider>
  );
}