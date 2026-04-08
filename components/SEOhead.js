import Head from "next/head";
import { defaultMeta } from "../lib/pageMeta";

const defaultKeywords =
  "ortholinear keyboards, mechanical keyboards, OLKB, Planck, Preonic, Ergodox, programmable keyboards, QMK, VIA";

/**
 * Unified SEO component: supports both simple pages (meta prop) and full control
 * (title, description, url, type, publishedTime, etc.). Renders canonical, OG,
 * Twitter, JSON-LD, and article meta when type === "article".
 */
export default function SEOhead({
  meta,
  title: titleProp,
  description: descriptionProp,
  image: imageProp,
  url: urlProp,
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Try Ortho Keys",
  section = "Technology",
  tags = ["Keyboards"],
  keywords = defaultKeywords,
  noindex = false,
  structuredData,
}) {
  const siteUrl = defaultMeta.url.replace(/\/$/, "");
  const resolveUrl = (value) => {
    if (!value) return `${siteUrl}/`;
    if (typeof value === "string" && value.startsWith("http")) {
      return value === siteUrl ? `${siteUrl}/` : value;
    }
    return `${siteUrl}${value}`;
  };
  const title = titleProp ?? (meta ? `${meta.title} | ${defaultMeta.title}` : defaultMeta.title);
  const description = descriptionProp ?? (meta ? meta.description : defaultMeta.description);
  const image = imageProp ?? (meta ? meta.image : defaultMeta.image) ?? defaultMeta.image;
  const fullUrl = resolveUrl(urlProp ?? (meta ? meta.slug || "" : ""));
  const fullImage =
    image && typeof image === "string" && image.startsWith("http")
      ? image
      : `${siteUrl}${image || defaultMeta.image}`;

  const structuredDataDefault = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebPage",
    headline: title,
    description,
    image: fullImage,
    url: fullUrl,
    author: {
      "@type": "Organization",
      name: author,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Try Ortho Keys",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/tryorthokeys.jpg`,
      },
    },
    ...(publishedTime && { datePublished: publishedTime }),
    ...(modifiedTime && { dateModified: modifiedTime }),
    ...(type === "article" && {
      articleSection: section,
      keywords: Array.isArray(tags) ? tags.join(", ") : tags,
    }),
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
          {(Array.isArray(tags) ? tags : [tags]).map((tag, index) => (
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
      {type === "article" && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          <meta property="article:author" content={author} />
          <meta property="article:section" content={section} />
          {(Array.isArray(tags) ? tags : [tags]).map((tag, index) => (
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
          __html: JSON.stringify(structuredData || structuredDataDefault),
        }}
      />
    </Head>
  );
}
