import Head from "next/head";
import { defaultMeta } from "../lib/pageMeta";

export default function SEOhead({ meta }) {
  const title = meta ? `${meta.title} | ${defaultMeta.title}` : defaultMeta.title;
  const description = meta ? meta.description : defaultMeta.description;
  const image = meta ? meta.image : defaultMeta.image;
  const url = meta ? `${defaultMeta.url}${meta.slug || ''}` : defaultMeta.url;

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="language" content="English" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Primary Meta Tags */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="ortholinear keyboards, mechanical keyboards, OLKB, Planck, Preonic, Ergodox, programmable keyboards, QMK, VIA" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Try Ortho Keys" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@tryorthokeys" />
      <meta property="twitter:site" content="@tryorthokeys" />

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Try Ortho Keys" />
      <meta name="theme-color" content="#007bff" />
      <meta name="msapplication-TileColor" content="#007bff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Try Ortho Keys" />
    </Head>
  );
}
