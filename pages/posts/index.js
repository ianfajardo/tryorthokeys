import SEOhead from "../../components/SEOhead";
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
      <SEOhead
        meta={{
          title: "Blog",
          description:
            "Ortholinear keyboard guides, reviews, and news: Planck, Preonic, OLKB, ortho keycaps, 40% keyboards, and more.",
          slug: "/posts",
        }}
      />

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">Blog</h1>
                <p className="lead mb-0">
                  Ortholinear keyboard guides, ortho keycaps, and keyboard news.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="posts" className="section-container ">
        <div className="container">
          <div className="row">
            {allPostsData.map(({ slug, date, title, description, image }) => (
              <div className="col-lg-4 col-md-6 mb-4" key={slug}>
                <Link legacyBehavior href={`/posts/${slug}`}>
                  <a className="text-decoration-none text-dark">
                    <div className="card h-100 border shadow-sm">
                      <div className="card-img-top overflow-hidden" style={{ aspectRatio: "16/10", backgroundColor: "var(--bs-secondary-bg, #e9ecef)" }}>
                        {image ? (
                          <img
                            className="img-fluid w-100 h-100"
                            src={image}
                            alt={title}
                            style={{ objectFit: "cover" }}
                          />
                        ) : (
                          <div className="w-100 h-100 d-flex align-items-center justify-content-center text-muted small">
                            No image
                          </div>
                        )}
                      </div>
                      <div className="card-body d-flex flex-column">
                        <small className="text-muted mb-1">
                          <Date dateString={date} />
                        </small>
                        <h5 className="card-title mb-0">{title}</h5>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
