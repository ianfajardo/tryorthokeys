import SEOhead from "../components/SEOhead";
import { defaultMeta } from "../lib/pageMeta";
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
      <SEOhead
        title={defaultMeta.title}
        description={defaultMeta.description}
        url={defaultMeta.url}
        image={defaultMeta.image}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Try Ortho Keys - Ortholinear Keyboards",
          description: defaultMeta.description,
          url: defaultMeta.url,
          mainEntity: {
            "@type": "ItemList",
            name: "Ortholinear Keyboards",
            description:
              "Collection of ortholinear keyboards including OLKB Planck, Preonic, Ergodox, NIU40, and split keyboards",
            itemListElement: [
              {
                "@type": "Product",
                name: "OLKB Planck",
                description: "40% ortholinear keyboard with programmable keymappings",
                url: `${defaultMeta.url}/olkb`,
              },
              {
                "@type": "Product",
                name: "OLKB Preonic",
                description: "Preonic keyboard: 60% ortholinear with programmable keymappings",
                url: `${defaultMeta.url}/olkb`,
              },
              {
                "@type": "Product",
                name: "Ergodox",
                description: "Split ortholinear keyboard for ergonomic typing",
                url: `${defaultMeta.url}/split`,
              },
            ],
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: defaultMeta.url },
            ],
          },
        }}
      />

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
                <h1 className="h2 font-weight-bolder text-primary pt-2 mb-2">
                  Ortholinear Keyboards, 40% Boards, and Setup Guides
                </h1>
                <h2 className="h5 font-weight-bold" style={{ color: "#d6dde5" }}>
                  Compact, programmable keyboards for people who like to customize.
                </h2>
                <p className="py-3" style={{ fontSize: "20px" }}>
                  Ortholinear keyboards use a straight grid layout instead of
                  the staggered rows found on a typical keyboard. People like
                  them for their smaller footprint, cleaner keycap
                  compatibility, and the freedom to build layers and shortcuts
                  around the way they actually type.
                </p>
                <div className="button-cluster mt-2">
                  <a
                    href="/keyboards"
                    className="btn btn-primary btn-lg"
                  >
                    Keyboards
                  </a>
                  <a href="/deals" className="btn btn-secondary btn-lg">
                    Deals
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What is an ortholinear keyboard? / ortho keyboard - for SEO quick wins */}
      <div className="section-container bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2 className="h3 font-weight-bold mb-3">
                What is an ortholinear keyboard?
              </h2>
              <p className="lead mb-2">
                An <strong>ortholinear keyboard</strong> (or <strong>ortho keyboard</strong>) is a
                keyboard whose keys are arranged in a straight grid instead of the staggered rows
                you see on a typical keyboard. Ortholinear keyboards are usually mechanical and
                programmable, so you can customize keymappings with QMK or VIA.
              </p>
              <p className="mb-0">
                Popular ortholinear keyboards include the{" "}
                <Link href="/olkb">OLKB Planck and Preonic</Link>, the{" "}
                <Link href="/ultimate-guide-to-ortholinear-keyboards">
                  ultimate guide to ortholinear keyboards
                </Link>{" "}
                covers more options and how to get started.
              </p>
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

        <div className="container-xxl card-link-grid">
          <div className="row mb-5">
            {allPostsData.map(({ slug, date, title, description, image }) => (
              <div className="col-lg-4 col-md-6 mb-4" key={slug}>
                  <div className="card h-100">
                    <div className="card-img-top">
                      <Link legacyBehavior href={`/posts/${slug}`}>
                        <a className="lead">
                          <img
                            className="img-fluid"
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
                <img
                  src="/preonic-1.jpg"
                  alt="Preonic ortholinear keyboard"
                  className="img-fluid mb-2"
                />
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
                keyboard has speakers. Most support VIA and open-source QMK
                firmware, making it easier than ever to set up your keyboard the way
                you like.
              </p>

              <div className="button-cluster">
                <a href="/configure" className="btn btn-secondary">
                  Configure your Planck or Preonic
                </a>

                <a
                  href="https://www.caniusevia.com/"
                  className="btn btn-secondary"
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
                    <h3>OLKB Planck & Preonic</h3>
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
                      separate PCBs connected by a cable. Split keyboards
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
