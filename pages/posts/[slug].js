import Layout from "../../components/layout";
import Link from "next/link";
import { getAllPostIds, getPostData } from "../../lib/posts";
import DateComponent from "../../components/date";
import Head from "next/head";
import SpecialDeals from "../../components/specialdeals";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  const title = `Try Ortho Keys - ${postData.title}`;
  const description = postData.description || "Ortholinear keyboards are computer keyboards with a grid layout. Most orthlinear keyboards have mechanical key switches and programmable keymappings.";
  const image = postData.image ? `https://www.tryorthokeys.com${postData.image}` : "https://www.tryorthokeys.com/planck-2.jpg";
  const url = `https://www.tryorthokeys.com/posts/${postData.slug}`;
  const publishedDate = postData.date ? (postData.date instanceof Date ? postData.date.toISOString() : new Date(postData.date).toISOString()) : new Date().toISOString();
  const modifiedDate = new Date().toISOString();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />
        
        {/* Primary Meta Tags */}
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content="ortholinear keyboards, mechanical keyboards, OLKB, Planck, Preonic, Ergodox, programmable keyboards, QMK, VIA, keyboard review" />
        <meta name="author" content="Try Ortho Keys" />
        <meta name="article:author" content="Try Ortho Keys" />
        <meta name="article:published_time" content={publishedDate} />
        <meta name="article:modified_time" content={modifiedDate} />
        <meta name="article:section" content="Technology" />
        <meta name="article:tag" content="Keyboards" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Try Ortho Keys" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content={publishedDate} />
        <meta property="article:modified_time" content={modifiedDate} />
        <meta property="article:author" content="Try Ortho Keys" />
        <meta property="article:section" content="Technology" />
        <meta property="article:tag" content="Keyboards" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <meta property="twitter:creator" content="@tryorthokeys" />
        <meta property="twitter:site" content="@tryorthokeys" />

        {/* Structured Data - Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": postData.title,
              "description": description,
              "image": image,
              "author": {
                "@type": "Organization",
                "name": "Try Ortho Keys",
                "url": "https://tryorthokeys.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Try Ortho Keys",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://tryorthokeys.com/tryorthokeys.jpg"
                }
              },
              "datePublished": publishedDate,
              "dateModified": modifiedDate,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": url
              },
              "url": url,
              "articleSection": "Technology",
              "keywords": "ortholinear keyboards, mechanical keyboards, OLKB, Planck, Preonic, Ergodox, programmable keyboards, QMK, VIA"
            })
          }}
        />
      </Head>
      <Layout>
        <div className="section-container bg-primary text-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Link legacyBehavior href="/posts">
                  <a className="text-white">Blog</a>
                </Link>
                <h1 className="display-4 font-weight-bolder">
                  {postData.title}
                </h1>
                <DateComponent dateString={postData.date} />
              </div>
            </div>
          </div>
        </div>
        <div className="blog-content-container section-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div
                  dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
              </div>
              <div className="col-lg-4">
                <SpecialDeals col="col-lg-12" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
