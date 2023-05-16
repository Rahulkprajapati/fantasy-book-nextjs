// pages/_app.jsx

import '../shared/global.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}