import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";

const recentPostscount = 6;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData(recentPostscount);
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Links({ allPostsData }) {
  return (
    <div>
      <div className="bg-secondary">
        <div className="container text-white">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="h4 font-weight-bolder text-primary mt-3">
                Try Ortho Keys!
              </h1>
              <p style={{ fontSize: "14px" }}>
                Ortholinear keyboards are computer keyboards with their keys
                arranged in a grid layout. It can be a fun DIY project to
                assemble your own keyboard, add your own switches, and program
                your own keymappings.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          {allPostsData.map(({ slug, date, title, description, image }) => (
            <div className="col-lg-12" key={slug}>
            <div className="mb-5">
              <div className="card">
                <div className="card-img-top">
                  <Link href={`/posts/${slug}`}>
                    <a className="lead">
                      <img
                        className="img-fluid mb-3"
                        src={image}
                        alt={title}
                      />
                    </a>
                  </Link>
                </div>
                <div className="card-body">
                  <div className="text-muted ">
                    <small>
                      <Date dateString={date} />
                    </small>
                  </div>
                  <Link href={`/posts/${slug}`}>
                    <a className="lead">{title}</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
}
