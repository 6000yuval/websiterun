import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

export const render = (url: string) => {
  // You can add logic here to determine the initial page based on the URL
  // For now, we'll let the client-side routing handle it
  const html = renderToString(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  return { html };
};