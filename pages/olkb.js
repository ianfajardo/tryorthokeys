import Head from "next/head";
import Navigation from "../components/nav";
import Footer from "../components/footer";

export default function Olkb() {
  return (
    <div>
      <Head>
        <title>
          OLKB Preonic & Planck - Highly popular ortholinear keyboard producer
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="OLKB is the producer of the highly popular Planck & Preonic Ortholinear keyboards. The owner, Jack Humbert, is also the founder of QMK. These keyboards are sold on the OLKB website and frequently on Drop.com"
        />
      </Head>

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">OLKB</h1>
                <h2 className="font-weight-light">Planck & Preonic</h2>
                <p style={{ fontSize: "20px" }}>
                  OLKB is the producer of the highly popular Planck & Preonic
                  Ortholinear keyboards. The owner,{" "}
                  <a href="https://github.com/jackhumbert">Jack Humbert</a>, is
                  also the founder of QMK. These keyboards are sold on the{" "}
                  <a href="https://olkb.com">OLKB website</a> and frequently on{" "}
                  <a href="https://drop.com/buy/planck-mechanical-keyboard?utm_source=linkshare&referer=T93XGG">
                    Drop.com
                  </a>
                </p>
                <a href="https://olkb.com/" className="mt-3 btn btn-primary">
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>{/* ad space */}</div>

      <div className="section-container ">
        <div className="container">
          <div className="card ele-2">
            <div className="px-5 py-5 py-lg-5">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <h2 className="font-weight-bold text-primary">Planck</h2>
                  <p style={{ fontSize: "20px" }}>
                    The latest version of the Planck keyboard supports hot
                    swappable switches, LEDs, a small speaker and even rotary
                    encoders. There are several offerings for baseplates: EOTW
                    (easy on the wallet), hi-pro and low-pro. These keyboards
                    usually come in as a kit with some light assembly required.
                  </p>
                  <a
                    href="https://olkb.com/collections/planck"
                    className="btn btn-primary mr-2 mb-2"
                  >
                    View on OLKB
                  </a>
                  <a
                    href="https://drop.com/buy/planck-mechanical-keyboard?utm_source=linkshare&referer=T93XGG"
                    className="btn btn-secondary mr-2 mb-2"
                  >
                    Buy on Drop
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
                    alt="Planck Keyboard"
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
                    alt="Preonic Keyboard"
                  />
                </div>
                <div className="col-lg-5">
                  <h2 className="font-weight-bold text-primary">Preonic</h2>
                  <p style={{ fontSize: "20px" }}>
                    The Preonic keyboard is the Planck's big brother with an extra row of keys for those that really missing the number row or want more keys to customize.  The newest version of the Preonic is almost identical the Planck in terms of of features.
                  </p>
                  <a
                    href="https://olkb.com/collections/planck"
                    className="btn btn-primary mr-2 mb-2"
                  >
                    View on OLKB
                  </a>
                  <a
                    href="https://drop.com/buy/preonic-mechanical-keyboard?utm_source=linkshare&referer=T93XGG"
                    className="btn btn-secondary mr-2 mb-2"
                  >
                    Buy on Drop
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
