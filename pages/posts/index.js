import Head from "next/head";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import { getSortedPostsData } from "../../lib/posts";

import Link from "next/link";
import Date from "../../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Posts({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Try Ortho Keys - Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="There are several different companies that offer ortholinear keyboards.  OLKB, KBDFans and many other's sell keyboard such as the Preonic, Planck, NUI40 and Split."
        />
      </Head>

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">Blog</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="posts" className="section-container ">
        <div className="container">
          <div className="row">
            {allPostsData.map(({ slug, date, title, description, image }) => (
              <div className="col-lg-6" key={slug}>
                <div className="mb-5">
                  <div className="row">
                    <div className="col-lg-5">
                      <Link legacyBehavior href={`/posts/${slug}`}>
                        <a className="d-block">
                          <img
                            className="img-fluid mb-3"
                            src={image}
                            alt="title"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="col-lg-7">
                      <div className="text-muted ">
                        <small>
                          <Date dateString={date} />
                        </small>
                      </div>
                      <Link legacyBehavior href={`/posts/${slug}`}>
                        <a className="lead">{title}</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
