import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>404 | Try Ortho Keys</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Configuring your Planck or Preonic | QMK toolbox OLKB ortholinear keyboard ortho keyboard 40% keyboard kit Drop keycaps ortholinear keycaps qmk keyboard preonic keyboard qmk configurator" />
        <meta
          name="description"
          content="This guide will show you how to configure your OLKB Planck or Preonic Keyboard such as the QMK configurator and toolbox. "
        />
      </Head>

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">
                  {" "}
                  404 Page Not Found
                </h1>
                <p style={{ fontSize: "20px" }}>
                  The page you were looking for could not be found. Try the links below or view the posts from our blog below to get started.
                </p>

                <a
                  href="/keyboards"
                  className="mt-3 mr-3 btn btn-primary"
                >
                  View Ortho Keyboards
                </a>
                <a
                  href="/keycaps"
                  className="mt-3 btn btn-outline-primary"
                >
                  Ortho Keycaps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <h3 className="font-weight-bold text-primary">Keyboards</h3>
              <div className="mt-3">
                <div className="card">
                  <div className="card-body">
                    <h3>OLKB Plank &amp; Preonic</h3>
                    <img
                      className="img-fluid my-3"
                      src="/plank-preonic.jpg"
                      alt="OLKB Planck &amp; Preonic"
                    />
                    <p className="mt-3">
                      OLKB is the producer of the highly popular Planck &amp;
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
              <div className="mt-3">
                <div className="card">
                  <div className="card-body">
                    <h3>NIU40 / NIU Mini</h3>
                    <img
                      className="img-fluid"
                      src="/niu40.webp"
                      alt="NIU 40 NIU Mini"
                    />
                    <p>
                      The NIU 40 / NIU Mini is a 40% keyboard similar to the
                      Planck ortholinear keyboard. You purchase them a DIY kit
                      at <a href="https://kbdfans.com/r?id=eft22v">KBDFans</a>.
                      A bit cheaper than the OLKB offerings, it offers similar
                      functionality and features.
                    </p>
                    <a href="/niu40" className="btn btn-secondary mt-3">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <h3 className="font-weight-bold text-primary">Blog</h3>
              <div className="mt-3">
                <div className="card">
                  <div className="card-img-top">
                    <a
                      className="lead"
                      href="/posts/what-to-do-after-getting-an-ortholinear-keyboard"
                    >
                      <img
                        className="img-fluid mb-3"
                        src="/first-ortholinear-board.png"
                        alt="What to do after getting your first Ortholinear Keyboard"
                      />
                    </a>
                  </div>
                  <div className="card-body">
                    <a
                      className="lead"
                      href="/posts/what-to-do-after-getting-an-ortholinear-keyboard"
                    >
                      What to do after getting your first Ortholinear Keyboard
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="card">
                  <div className="card-img-top">
                    <a
                      className="lead"
                      href="/posts/budget-keycaps-for-your-ortho-keyboard"
                    >
                      <img
                        className="img-fluid mb-3"
                        src="/best-budget-keycaps-ortho-keyboard.png"
                        alt="Best Budget Keycaps for Your Ortho Keyboard"
                      />
                    </a>
                  </div>
                  <div className="card-body">
                    <a
                      className="lead"
                      href="/posts/budget-keycaps-for-your-ortho-keyboard"
                    >
                      Best Budget Keycaps for Your Ortho Keyboard
                    </a>
                  </div>
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
                    className="btn btn-secondary mr-2 mb-2"
                    href="https://amzn.to/333pMu0"
                  >
                    Buy on Amazon
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
                    The Preonic keyboard is the Planck's big brother with an
                    extra row of keys for those really missing the number row or
                    want more keys to customize. The newest version of the
                    Preonic is almost identical the Planck in terms of features.
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
                    className="btn btn-secondary mr-2 mb-2"
                    href="https://amzn.to/3xzTDbF"
                  >
                    Buy on Amazon
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
      <Footer />
    </div>
  );
}