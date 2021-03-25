import Layout from "../../components/layout";
import Link from "next/link";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import Head from "next/head";

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
  return (
    <div>
      <Head>
        <title>{"Try Ortho Keys - " + postData.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={"Try Ortho Keys - " + postData.title} />
        <meta
          name="description"
          content={
            postData.description
              ? postData.description
              : "Ortholinear keyboards are computer keyboards with a grid layout. Most orthlinear keyboards have mechanical key switches and programmable keymappings."
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={"https://www.tryorthokeys.com/posts/" + postData.slug}
        />
        <meta
          property="og:title"
          content={"Try Ortho Keys - " + postData.title}
        />
        <meta
          property="og:description"
          content={
            postData.description
              ? postData.description
              : "Ortholinear keyboards are computer keyboards with a grid layout. Most orthlinear keyboards have mechanical key switches and programmable keymappings."
          }
        />
        <meta
          property="og:image"
          content={postData.image ? postData.image : "/planck-2.jpg"}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={"https://www.tryorthokeys.com/posts/" + postData.slug}
        />
        <meta
          property="twitter:title"
          content={"Try Ortho Keys - " + postData.title}
        />
        <meta
          property="twitter:description"
          content={
            postData.description
              ? postData.description
              : "Ortholinear keyboards are computer keyboards with a grid layout. Most orthlinear keyboards have mechanical key switches and programmable keymappings."
          }
        />
        <meta
          property="twitter:image"
          content={postData.image ? postData.image : "/planck-2.jpg"}
        />
      </Head>
      <Layout>
        <div className="section-container bg-primary text-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Link href="/posts">
                  <a className="text-white">Blog</a>
                </Link>
                <h1 className="display-4 font-weight-bolder">{postData.title}</h1>
                <Date dateString={postData.date} />
              </div>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
