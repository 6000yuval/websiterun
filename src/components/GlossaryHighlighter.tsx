import React from 'react';
import { GLOSSARY } from '../data/content';
import { useRouter } from '../contexts/RouterContext';

interface GlossaryHighlighterProps {
  children: React.ReactNode;
}

// Generate a mapping of keyword -> term definition
// Splits "Prompt (קלט)" into ["Prompt", "קלט", "Prompt (קלט)"] pointing to the same entry
const generateKeywordsMap = () => {
  const map = new Map<string, string>();
  GLOSSARY.forEach(item => {
    // Exact match
    map.set(item.term.toLowerCase(), item.term);
    
    // Split parens
    const match = item.term.match(/^(.+?)\s*\((.+?)\)$/);
    if (match) {
      const main = match[1].trim().toLowerCase();
      const sub = match[2].trim().toLowerCase();
      if (main.length > 2) map.set(main, item.term);
      if (sub.length > 2) map.set(sub, item.term);
    }
  });
  return map;
};

const KEYWORDS_MAP = generateKeywordsMap();
// Sort by length desc to match longest first
const SORTED_KEYWORDS = Array.from(KEYWORDS_MAP.keys()).sort((a, b) => b.length - a.length);

const GlossaryHighlighter: React.FC<GlossaryHighlighterProps> = ({ children }) => {
  const { navigate } = useRouter();

  const processNode = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === 'string') {
      if (!node.trim()) return node;
      
      // We need to split the string by keywords, but keep the keywords.
      // We'll use a regex. Escape regex special chars in keywords.
      // Only match whole words if possible, but Hebrew/English mixing makes \b tricky.
      // We'll try simple replacement for now, case insensitive.
      
      // Filter keywords that are actually present in this string to avoid huge regex
      const presentKeywords = SORTED_KEYWORDS.filter(k => node.toLowerCase().includes(k));
      if (presentKeywords.length === 0) return node;

      const pattern = new RegExp(`(${presentKeywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
      
      const parts = node.split(pattern);
      
      return parts.map((part, i) => {
        const lowerPart = part.toLowerCase();
        if (KEYWORDS_MAP.has(lowerPart)) {
           const targetTerm = KEYWORDS_MAP.get(lowerPart);
           return (
             <button
               key={i}
               onClick={(e) => {
                 e.stopPropagation();
                 navigate({ name: 'glossary', term: targetTerm });
               }}
               className="text-blue-600 font-medium hover:underline hover:bg-blue-50 rounded px-0.5 cursor-pointer inline-block"
               title={`לחץ להסבר על: ${targetTerm}`}
             >
               {part}
             </button>
           );
        }
        return part;
      });
    }

    if (React.isValidElement(node)) {
      // Cast to ReactElement with any props to avoid strict type checks on props spread
      const element = node as React.ReactElement<any>;
      
      // Don't link inside buttons, links, or existing interactive elements
      const type = element.type as any;
      if (type === 'button' || type === 'a' || type === 'input' || type === 'textarea' || type === 'select') {
        return node;
      }

      // Clone and recurse children
      const children = element.props.children;
      if (children) {
        return React.cloneElement(element, {
          ...element.props,
          children: React.Children.map(children, child => processNode(child))
        });
      }
      return node;
    }

    if (Array.isArray(node)) {
      return node.map((child, i) => <React.Fragment key={i}>{processNode(child)}</React.Fragment>);
    }

    return node;
  };

  return <>{processNode(children)}</>;
};

export default GlossaryHighlighter;