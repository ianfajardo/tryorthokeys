import Head from "next/head";

export default function SEO({
  title,
  description,
  image = "https://tryorthokeys.com/tryorthokeys.jpg",
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Try Ortho Keys",
  section = "Technology",
  tags = ["Keyboards"],
  keywords = "ortholinear keyboards, mechanical keyboards, OLKB, Planck, Preonic, Ergodox, programmable keyboards, QMK, VIA",
  noindex = false,
  structuredData,
}) {
  const siteUrl = "https://tryorthokeys.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
  
  const structuredDataDefault = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebPage",
    "headline": title,
    "description": description,
    "image": fullImage,
    "url": fullUrl,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Try Ortho Keys",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tryorthokeys.com/tryorthokeys.jpg"
      }
    },
    ...(publishedTime && { "datePublished": publishedTime }),
    ...(modifiedTime && { "dateModified": modifiedTime }),
    ...(type === "article" && {
      "articleSection": section,
      "keywords": tags.join(", ")
    })
  };

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="language" content="English" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Primary Meta Tags */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Article specific meta tags */}
      {type === "article" && (
        <>
          <meta name="article:author" content={author} />
          <meta name="article:section" content={section} />
          {tags.map((tag, index) => (
            <meta key={index} name="article:tag" content={tag} />
          ))}
          {publishedTime && <meta name="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta name="article:modified_time" content={modifiedTime} />}
        </>
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Try Ortho Keys" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific Open Graph tags */}
      {type === "article" && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          <meta property="article:author" content={author} />
          <meta property="article:section" content={section} />
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />
      <meta property="twitter:creator" content="@tryorthokeys" />
      <meta property="twitter:site" content="@tryorthokeys" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#007bff" />
      <meta name="msapplication-TileColor" content="#007bff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Try Ortho Keys" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData || structuredDataDefault)
        }}
      />
    </Head>
  );
}
