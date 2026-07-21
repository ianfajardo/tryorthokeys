import SEOhead from "../components/SEOhead";
import { defaultMeta } from "../lib/pageMeta";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { getUrl } from "../lib/affiliates";

export default function Olkb() {
  return (
    <div>
      <SEOhead
        meta={{
          title: "OLKB Planck & Preonic: Where to Buy in 2026",
          description:
            "The OLKB Planck and Preonic are the original ortholinear keyboards from Jack Humbert and the QMK project. Here's where to buy a Planck or Preonic in 2026 now that Drop has closed.",
          image: "/planck-2.jpg",
          slug: "/olkb",
        }}
        keywords="OLKB, Planck, Preonic, Planck keyboard, Preonic keyboard, ortholinear keyboard, QMK, where to buy planck, where to buy preonic"
      />

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">OLKB</h1>
                <h2 className="font-weight-light">Planck &amp; Preonic</h2>
                <p style={{ fontSize: "20px" }}>
                  OLKB is the producer of the highly popular Planck and Preonic
                  ortholinear keyboards. The owner,{" "}
                  <a
                    className="text-white"
                    href="https://github.com/jackhumbert"
                  >
                    <u>Jack Humbert</u>
                  </a>
                  , is also the founder of QMK. For years these keyboards were
                  sold primarily through Drop.com, but{" "}
                  <a className="text-white" href="/posts/drop-ecommerce-store-closing-march-31-keyboard-club">
                    <u>Drop closed its ecommerce store on March 31, 2026</u>
                  </a>
                  . If you're looking for a Planck or Preonic in 2026, see our{" "}
                  <a
                    className="text-white"
                    href="/posts/best-ortholinear-keyboards-2026-after-drop-planck-preonic"
                  >
                    <u>2026 buying guide for ortholinear keyboards</u>
                  </a>
                  , or jump to the listings below.
                </p>

                <a
                  href="https://olkb.com/"
                  className="mt-3 mr-3 btn btn-primary"
                >
                  Visit OLKB Website
                </a>
                <a
                  href="/keyboards"
                  className="mt-3 btn btn-outline-light"
                >
                  Compare Ortho Keyboards
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="container">
          <div className="card ele-2 bg-warning">
            <div className="px-4 py-3">
              <p className="mb-0">
                <strong>Update (May 2026):</strong> Drop's ecommerce store
                closed March 31, 2026. Existing Drop links may still resolve
                under the CORSAIR-integrated site but are no longer the primary
                retail channel. New stock of the Planck and Preonic is limited.
                For active alternatives, see our{" "}
                <a href="/keyboards">ortholinear keyboards page</a> — the{" "}
                <a href="/keyboards#chosfox-geonix-rev2">Chosfox x Masro Geonix Rev.2</a>{" "}
                is currently our top Planck successor.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container ">
        <div className="container">
          <div className="card ele-2">
            <div className="px-5 py-5 py-lg-5">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <h2 className="font-weight-bold text-primary">
                    Planck Keyboard
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    The Planck is a 40% ortholinear keyboard supporting
                    hot-swappable switches, LEDs, a small speaker, and rotary
                    encoders. Multiple baseplate options have shipped over the
                    years (EOTW, hi-pro, and low-pro). Most Plancks ship as kits
                    with light assembly required.
                  </p>
                  <a
                    href="https://olkb.com/collections/planck"
                    className="btn btn-primary mr-2 mb-2"
                  >
                    View on OLKB
                  </a>
                  <a
                    href={getUrl('olkb-planck')}
                    className="btn btn-secondary mr-2 mb-2"
                  >
                    Search on Amazon
                  </a>
                  <a
                    href="https://qmk.fm/keyboards/planck/"
                    className="btn btn-link mb-2"
                  >
                    QMK Firmware
                  </a>
                </div>
                <div className="col-lg-7">
                  <img
                    className="img-fluid mb-2"
                    src="/planck-2.jpg"
                    alt="OLKB Planck ortholinear keyboard"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container ">
        <div className="container">
          <div className="card ele-2">
            <div className="px-5 py-5 py-lg-5">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <img
                    className="img-fluid mb-2 mb-2"
                    src="/preonic-1.jpg"
                    alt="OLKB Preonic ortholinear keyboard"
                  />
                </div>
                <div className="col-lg-5">
                  <h2 className="font-weight-bold text-primary">
                    Preonic Keyboard
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    The Preonic is the Planck's bigger sibling — a 50%
                    ortholinear keyboard with an extra row for users who want
                    the dedicated number row back. Recent versions of the
                    Preonic are nearly identical to the Planck in features and
                    QMK support.
                  </p>
                  <a
                    href="https://olkb.com/collections/preonic"
                    className="btn btn-primary mr-2 mb-2"
                  >
                    View on OLKB
                  </a>
                  <a
                    href="https://amzn.to/3xzTDbF"
                    className="btn btn-secondary mr-2 mb-2"
                  >
                    Search on Amazon
                  </a>
                  <a
                    href="https://github.com/qmk/qmk_firmware/tree/master/keyboards/preonic"
                    className="btn btn-link"
                  >
                    QMK Firmware
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="container">
          <div className="card ele-2 bg-light">
            <div className="px-5 py-5">
              <h2 className="font-weight-bold text-primary">
                Looking for a Planck or Preonic Alternative?
              </h2>
              <p style={{ fontSize: "18px" }}>
                With Drop closed and OLKB stock limited, most buyers in 2026
                are picking modern ortholinear keyboards that match or exceed
                the Planck on every spec line. Our current top picks:
              </p>
              <ul style={{ fontSize: "18px" }}>
                <li>
                  <a href="/keyboards#chosfox-geonix-rev2">Chosfox x Masro Geonix Rev.2</a> — 40% low-profile wireless ortho ($112)
                </li>
                <li>
                  <a href="/ymdk-air40">YMDK Air40</a> — Planck-clone build with QMK/VIA ($103)
                </li>
                <li>
                  <a href="/kprepublic-cstc40">KPrepublic CSTC40</a> — Budget Planck alternative ($49)
                </li>
                <li>
                  <a href="/mechdiy-59">MechDIY 59</a> — Preonic-style 50% with VIA ($175)
                </li>
              </ul>
              <a
                href="/posts/best-ortholinear-keyboards-2026-after-drop-planck-preonic"
                className="btn btn-primary mr-2"
              >
                Read the Full 2026 Guide
              </a>
              <a href="/keyboards" className="btn btn-secondary">
                Compare All Ortho Keyboards
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container" id="videos">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Videos</h2>
              <div className="usa-embed-container">
                <iframe
                  src="https://www.youtube.com/embed/bEPg8kk84gw"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="usa-embed-container">
                <iframe
                  src="https://www.youtube.com/embed/NcnMR8D0G5o"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
