import Layout from "../../components/layout";
import Link from "next/link";
import { getAllPostIds, getPostData } from "../../lib/posts";
import DateComponent from "../../components/date";
import SEOhead from "../../components/SEOhead";
import { defaultMeta } from "../../lib/pageMeta";
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
  // Prefer metatitle for SEO when set (keyword-rich); ensure frontmatter title and description include target keyword.
  const seoTitle = postData.metatitle
    ? (postData.metatitle.includes("Try Ortho Keys") ? postData.metatitle : `${postData.metatitle} | Try Ortho Keys`)
    : `${postData.title} | Try Ortho Keys`;
  const description =
    postData.description ||
    "Ortholinear keyboards are computer keyboards with a grid layout. Most ortholinear keyboards have mechanical key switches and programmable keymappings.";
  const image = postData.image
    ? `${defaultMeta.url}${postData.image}`
    : `${defaultMeta.url}/planck-2.jpg`;
  const url = `${defaultMeta.url}/posts/${postData.slug}`;
  const publishedDate = postData.date
    ? postData.date instanceof Date
      ? postData.date.toISOString()
      : new Date(postData.date).toISOString()
    : new Date().toISOString();
  const modifiedDate = new Date().toISOString();
  const tags = postData.tags && Array.isArray(postData.tags) ? postData.tags : ["Keyboards"];

  return (
    <div>
      <SEOhead
        title={seoTitle}
        description={description}
        image={image}
        url={url}
        type="article"
        publishedTime={publishedDate}
        modifiedTime={modifiedDate}
        section={postData.section || "Technology"}
        tags={tags}
        keywords="ortholinear keyboards, mechanical keyboards, OLKB, Planck, Preonic, Ergodox, programmable keyboards, QMK, VIA, keyboard review"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: postData.title,
          description,
          image,
          author: { "@type": "Organization", name: "Try Ortho Keys", url: defaultMeta.url },
          publisher: {
            "@type": "Organization",
            name: "Try Ortho Keys",
            logo: { "@type": "ImageObject", url: `${defaultMeta.url}/tryorthokeys.jpg` },
          },
          datePublished: publishedDate,
          dateModified: modifiedDate,
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          url,
          articleSection: postData.section || "Technology",
          keywords: "ortholinear keyboards, mechanical keyboards, OLKB, Planck, Preonic, Ergodox, programmable keyboards, QMK, VIA",
        }}
      />
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
