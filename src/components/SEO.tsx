import React from 'react';
import * as helmet from 'react-helmet-async';
const { Helmet } = helmet;

interface SEOProps {
  title: string;
  description: string;
  type?: 'website' | 'article';
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, type = 'website', canonicalUrl }) => {
  const siteTitle = 'AI בעברית';
  const fullTitle = `${title} | ${siteTitle}`;
  const defaultCanonical = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="he_IL" />
      <meta property="og:site_name" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {!canonicalUrl && defaultCanonical && <link rel="canonical" href={defaultCanonical} />}
    </Helmet>
  );
};

export default SEO;