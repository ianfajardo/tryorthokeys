import Head from "next/head";
import Navigation from "../components/nav";
import Footer from "../components/footer";
import { getSortedPostsData } from "../lib/posts";

import Link from "next/link";
import Date from "../components/date";

const recentPostscount = 4;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData(recentPostscount);
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Try Ortho Keys - Ortholinear Keyboards</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Try Ortho Keys - Ortholinear Keyboards" />
        <meta
          name="description"
          content="Ortholinear keyboards are computer keyboards with a grid layout. Most orthlinear keyboards have mechanical key switches and programmable keymappings."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tryorthokeys.com/" />
        <meta
          property="og:title"
          content="Try Ortho Keys - Ortholinear Keyboards"
        />
        <meta
          property="og:description"
          content="Ortholinear keyboards are computer keyboards with a grid layout. Most orthlinear keyboards have mechanical key switches and programmable keymappings."
        />
        <meta property="og:image" content="/planck-2.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.tryorthokeys.com/" />
        <meta
          property="twitter:title"
          content="Try Ortho Keys - Ortholinear Keyboards"
        />
        <meta
          property="twitter:description"
          content="Ortholinear keyboards are erognomic computer keyboards with a grid layout. Most orthlinear keyboards have mechanical key switches and programmable keymappings."
        />
        <meta property="twitter:image" content="/planck-2.jpg" />
      </Head>

      <Navigation />

      <div className="jumbo-container section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="offset-lg-2 col-lg-8">
              <div className="py-3">
                <h1 className="display-1 font-weight-bolder">
                  Try Ortho Keys!
                </h1>
                <h2 className="text-primary font-weight-bold py-2">
                  Programmable and Compact
                </h2>
                <p className="py-3" style={{ fontSize: "20px" }}>
                  Ortholinear keyboards are computer keyboards with their keys
                  arranged in a grid layout. It can be a fun DIY project to
                  assemble your own keyboard, add your own switches, and program
                  your own keymappings.
                </p>
                <a
                  href="/keyboards"
                  className="mt-2 mr-3 btn btn-primary btn-lg"
                >
                  Learn More
                </a>
                <a href="/olkb" className="mt-2 btn btn-secondary btn-lg">
                  OLKB Keyboards
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="blog" className="section-container">
        <div className="container">
          <div className="col-lg-12">
            <h2 className="display-2 font-weight-bolder text-primary mb-5">
              Blog
            </h2>
            <div className="row mb-5">
              {allPostsData.map(({ slug, date, title, description, image }) => (
                <div className="col-lg-6" key={slug}>
                  <div className="">
                    <div className="row">
                      <div className="col-lg-5">
                        <Link href={`/posts/${slug}`}>
                          <a className="lead">
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
                        <Link href={`/posts/${slug}`}>
                          <a className="lead">{title}</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-12">
            <a href="/posts" className="btn btn-primary">
              Read our Blog
            </a>
          </div>
        </div>
      </div>

      <div id="compact" className="section-container bg-secondary text-white">
        <div className="">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="display-2 font-weight-bolder text-primary">
                  Compact
                </h2>
                <p className="lead">
                  With the smaller form factor on ortholinear keyboards, your
                  fingers aren't more than two keys away from what is considered
                  home row on most key keyboards. They are a favorite for those
                  who want to carry their keyboard on the go.
                </p>
                <a href="/keyboards" className="btn btn-primary mr-2 mb-2">
                  See the keyboards
                </a>
              </div>
              <div className="col-lg-6">
                <img src="/preonic-1.jpg" alt="" className="img-fluid mb-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="programmable" className="section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                className="mb-1 d-block"
                width="300"
                src="/qmk-light.png"
                alt="QMK Firmware"
              />
              <img
                className="img-fluid mb-2"
                src="/olkb-keymap.png"
                alt="Planck Keymap"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-2 font-weight-bolder text-secondary">
                Programmable
              </h2>
              <p className="lead">
                Most ortholinear keyboards available allow you to fully
                customize your key mappings and can even play music if your
                keyboard has speakers! Most utilize the open-source QMK firmware
                making easier than ever to setup your keyboard the way you like.
              </p>

              <a href="/configure" className=" mr-3 btn btn-secondary">
                Configure your Planck or Preonic
              </a>

              <a href="https://qmk.fm/" className="btn btn-outline-secondary">
                Learn about QMK
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
