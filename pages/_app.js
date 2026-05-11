import '../styles/index.scss';
import NewsletterPopup from '../components/newsletterPopup';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NewsletterPopup />
    </>
  );
}

export default MyApp
