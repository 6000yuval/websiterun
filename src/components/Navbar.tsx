import React, { useState } from 'react';
import { Menu, X, Brain, Search } from 'lucide-react';
import { CATEGORIES } from '../data/content';
import { useSearch } from '../contexts/SearchContext';
import { Page, useRouter } from '../contexts/RouterContext';

interface NavbarProps {
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { openSearch } = useSearch();
  const { page } = useRouter();

  const closeMenu = () => setIsOpen(false);

  const handleNav = (target: Page) => {
    onNavigate(target);
    closeMenu();
  };

  const isHome = page.name === 'home';
  const isGlossary = page.name === 'glossary';
  const currentCatId = page.name === 'category' ? page.id : null;

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNav({ name: 'home' })} 
              className="flex-shrink-0 flex items-center gap-2 group text-right"
            >
              <div className="bg-blue-600 p-1.5 rounded-lg text-white group-hover:bg-blue-700 transition-colors">
                <Brain className="w-6 h-6" />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-lg leading-none text-slate-900 group-hover:text-blue-600 transition-colors">AI בעברית</span>
                <span className="text-[10px] text-slate-500 font-medium">לעבוד נכון עם בינה מלאכותית</span>
              </div>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:gap-5">
            <button 
              onClick={() => handleNav({ name: 'home' })}
              className={`text-sm font-medium hover:text-blue-600 transition-colors ${isHome ? 'text-blue-600' : 'text-slate-600'}`}
            >
              בית
            </button>
            {CATEGORIES.slice(0, 7).map((cat) => (
              <button 
                key={cat.id} 
                onClick={() => handleNav({ name: 'category', id: cat.id })}
                className={`text-sm font-medium hover:text-blue-600 transition-colors ${currentCatId === cat.id ? 'text-blue-600' : 'text-slate-600'}`}
              >
                {cat.title.split(':')[0]}
              </button>
            ))}
            <button 
              onClick={() => handleNav({ name: 'glossary' })}
              className={`text-sm font-medium hover:text-blue-600 transition-colors ${isGlossary ? 'text-blue-600' : 'text-slate-600'}`}
            >
              מילון מושגים
            </button>
            
            <button onClick={openSearch} className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-500 text-sm transition-colors mr-2 group">
              <Search className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
              <span className="sr-only">חיפוש...</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2">
            <button onClick={openSearch} className="p-2 text-slate-500 hover:bg-slate-100 rounded-md">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-lg absolute w-full left-0 top-16 z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[80vh] overflow-y-auto">
            <button onClick={() => handleNav({ name: 'home' })} className="block w-full text-right px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">בית</button>
            {CATEGORIES.map((cat) => (
              <button key={cat.id} onClick={() => handleNav({ name: 'category', id: cat.id })} className="block w-full text-right px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">
                {cat.title}
              </button>
            ))}
            <button onClick={() => handleNav({ name: 'glossary' })} className="block w-full text-right px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">מילון מושגים</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;