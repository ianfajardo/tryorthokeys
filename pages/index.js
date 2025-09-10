import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { getSortedPostsData } from "../lib/posts";

import Link from "next/link";
import Date from "../components/date";

const recentPostscount = 6;

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
        <title>
          Try Ortho Keys | Ortholinear Keyboards OLKB Planck Preonic Ergodox
          NIU40 Split Ortholinear Keyboard
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tryorthokeys.com/" />
        
        {/* Primary Meta Tags */}
        <meta
          name="title"
          content="Try Ortho Keys | Ortholinear Keyboards Ortho OLKB Planck Preonic Ergodox NIU40 Split Ortholinear Keyboard 40 keyboard"
        />
        <meta
          name="description"
          content="Ortholinear keyboards are computer keyboards with a grid layout. An ortho keyboard usually has mechanical key switches and programmable keymappings.  Popular products include OLKB Planck and Preonic, Ergodox, NIU40 mini and more."
        />
        <meta name="keywords" content="ortholinear keyboards, mechanical keyboards, OLKB, Planck, Preonic, Ergodox, NIU40, split keyboards, programmable keyboards, QMK, VIA, 40% keyboard, compact keyboard" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tryorthokeys.com/" />
        <meta
          property="og:title"
          content="Try Ortho Keys | Ortholinear Keyboards Ortho OLKB Planck Preonic Ergodox NIU40 Split Ortholinear Keyboard"
        />
        <meta
          property="og:description"
          content="Ortholinear keyboards are computer keyboards with a grid layout. An ortho keyboard usually has mechanical key switches and programmable keymappings.  Popular products include OLKB Planck and Preonic, Ergodox, NIU40 mini and more."
        />
        <meta
          property="og:image"
          content="https://tryorthokeys.com/tryorthokeys.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Try Ortho Keys" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.tryorthokeys.com/" />
        <meta
          property="twitter:title"
          content="Try Ortho Keys | Ortholinear Keyboards Ortho OLKB Planck Preonic Ergodox NIU40 Split Ortholinear Keyboard"
        />
        <meta
          property="twitter:description"
          content="Ortholinear keyboards are computer keyboards with a grid layout. An ortho keyboard usually has mechanical key switches and programmable keymappings.  Popular products include OLKB Planck and Preonic, Ergodox, NIU40 mini and more."
        />
        <meta
          property="twitter:image"
          content="https://tryorthokeys.com/tryorthokeys.jpg"
        />
        <meta property="twitter:creator" content="@tryorthokeys" />
        <meta property="twitter:site" content="@tryorthokeys" />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Try Ortho Keys" />
        <meta name="theme-color" content="#007bff" />
        <meta name="msapplication-TileColor" content="#007bff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Try Ortho Keys" />

        {/* Structured Data - CollectionPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Try Ortho Keys - Ortholinear Keyboards",
              "description": "Ortholinear keyboards are computer keyboards with a grid layout. An ortho keyboard usually has mechanical key switches and programmable keymappings.",
              "url": "https://www.tryorthokeys.com/",
              "mainEntity": {
                "@type": "ItemList",
                "name": "Ortholinear Keyboards",
                "description": "Collection of ortholinear keyboards including OLKB Planck, Preonic, Ergodox, NIU40, and split keyboards",
                "itemListElement": [
                  {
                    "@type": "Product",
                    "name": "OLKB Planck",
                    "description": "40% ortholinear keyboard with programmable keymappings",
                    "url": "https://www.tryorthokeys.com/olkb"
                  },
                  {
                    "@type": "Product", 
                    "name": "OLKB Preonic",
                    "description": "60% ortholinear keyboard with programmable keymappings",
                    "url": "https://www.tryorthokeys.com/olkb"
                  },
                  {
                    "@type": "Product",
                    "name": "Ergodox",
                    "description": "Split ortholinear keyboard for ergonomic typing",
                    "url": "https://www.tryorthokeys.com/split"
                  }
                ]
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.tryorthokeys.com/"
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <Navigation />

      <div className="jumbo-container section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="offset-lg-2 col-lg-8">
              <div className="py-3">
                <img
                  className="img-fluid"
                  src="/try-ortho-keys-logo.png"
                  alt="Try Ortho Keys, Ortholinear Keyboards"
                />
                <h1 className="display-1 font-weight-bolder d-none">
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
                  Keyboards
                </a>
                <a href="/deals" className="mt-2 btn btn-secondary btn-lg">
                  Deals
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="blog" className="section-container">
        <div className="container">
          <div className="col-lg-12">
            <h2 className="display-2 font-weight-bolder text-secondary mb-1">
              Blog
            </h2>
            <h3 className="mb-5">
              Ortholinear keyboard guides, news and more.
            </h3>
          </div>
        </div>

        <div className="container-xxl">
          <div className="row mb-5">
            {allPostsData.map(({ slug, date, title, description, image }) => (
              <div className="col-lg-4" key={slug}>
                <div className="mb-5">
                  <div className="card">
                    <div className="card-img-top">
                      <Link legacyBehavior href={`/posts/${slug}`}>
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
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12 text-center">
              <a href="/posts" className="btn btn-primary btn-lg">
                View All
              </a>
            </div>
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
                keyboard has speakers! Most utilize VIA and open-source QMK
                firmware making easier than ever to setup your keyboard the way
                you like.
              </p>

              <a href="/configure" className=" mr-3 btn btn-secondary">
                Configure your Planck or Preonic
              </a>

              <a
                href="https://www.caniusevia.com/"
                className=" mr-3 btn btn-secondary"
              >
                Learn about VIA
              </a>

              <a href="https://qmk.fm/" className="btn btn-outline-secondary">
                Learn about QMK
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="compact" className="section-container bg-primary text-white">
        <div className="">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h2 className="display-2 font-weight-bolder text-white mb-1">
                  Ortholinear Keyboards
                </h2>
                <h2 className="text-secondary font-weight-light mb-3">
                  Not only are ortholinear keyboards useful, they're pretty
                  freaking cool
                </h2>
                <p>
                  There are a plethora of keyboards to choose from and below are
                  our recommendations on getting started. It can be a fun DIY
                  project to assemble your own ortho keyboard, add your own
                  switches, and program your own keymappings.
                </p>
                <a href="/keyboards" className="btn btn-secondary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row text-dark">
              <div className="col-lg-3">
                <div className="card ele-3">
                  <div className="card-body">
                    <h3>OLKB Plank & Preonic</h3>
                    <img
                      className="img-fluid my-3"
                      src="/plank-preonic.jpg"
                      alt="OLKB Planck & Preonic"
                    />
                    <p className="mt-3">
                      OLKB is the producer of the highly popular Planck &
                      Preonic Ortholinear keyboards. The owner, Jack Humbert, is
                      also the founder of QMK. These keyboards are sold on the
                      OLKB website and frequently on Drop.com
                    </p>
                    <a href="/olkb" className="btn btn-secondary mt-3">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card ele-3">
                  <div className="card-body">
                    <h3>Idobo ID75</h3>
                    <img
                      className="img-fluid my-3"
                      src="/id75.jpg"
                      alt="Idobo ID75"
                    />
                    <p className="mt-3">
                      The Idobo ID75 is a 75 key keyboard, larger than most
                      standard ortholinear keyboards. A common layout has the
                      alphas split on the sides with extra function keys in the
                      middle. This is a great alternative if you want extra
                      programmable keys opposed to the 48 keys on the OLKB
                      Planck and 60 keys on the OLKB Preonic.
                    </p>
                    <a href="/id75" className="btn btn-secondary mt-3">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card ele-3">
                  <div className="card-body">
                    <h3>Split Keyboards</h3>
                    <img
                      className="img-fluid my-5 py-4"
                      src="/ergodox.png"
                      alt="Moonlander Ergodox"
                    />
                    <p className="mt-3">
                      You can usually spot a split keyboard if it has two
                      seperate PCBs connected by a cable. Split keyboards
                      literally half the keyboard to better the ergonomics and
                      encourage better touch typing. The ones mentioned here are
                      only a few.
                    </p>
                    <a href="/split" className="btn btn-secondary mt-3">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card ele-3">
                  <div className="card-body">
                    <h3>Work Louder: Creator Board</h3>
                    <img
                      className="img-fluid"
                      src="/creator-board/work-louder-creator-board.jpg"
                      alt="Work Louder Creator Board"
                    />
                    <p className="mt-3">
                      The Creator Board is an innovative modular design keyboard
                      that can be configured to suit individual preferences.
                      This is a customizable keyboard (customizable in terms of
                      keys, orientation, modules, and size), which means you can
                      create a personally tailored setup to fit your needs.
                    </p>
                    <a href="/worklouder" className="btn btn-secondary mt-3">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
