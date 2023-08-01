import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
