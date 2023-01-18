import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function Id75() {
  return (
    <div>
      <Head>
        <title>
          The Idobo ID75 is a 75 key keyboard, larger than most standard
          ortholinear keyboards.
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="Idobo ID75 - 75 Key Ortholinear Keyboard | Ortho Keyboard"
        />
        <meta
          name="description"
          content="The Idobo ID75 is a 75 key keyboard, larger than most standard
          ortholinear keyboards. A common layout has the alphas split on
          the sides with extra function keys in the middle."
        />
        <meta
          property="og:image"
          content="https://www.tryorthokeys.com/id75.jpg"
        />
      </Head>

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">ID75</h1>
                <p style={{ fontSize: "20px" }}>
                  The Idobo ID75 is a 75 key keyboard, larger than most standard
                  ortholinear keyboards. A common layout has the alphas split on
                  the sides with extra function keys in the middle. This is a
                  great alternative if you want extra programmable keys opposed
                  to the 48 keys on the OLKB Planck and 60 keys on the OLKB
                  Preonic.
                </p>
                <a
                  href="https://ymdkey.com/products/idobo-75-keys-ortholinear-layout-qmk-anodized-aluminum-case-plate-hot-swappable-hot-swap-type-c-pcb-mechanical-keyboard-kit?sca_ref=3163375.1C4wKHXQtf"
                  className="mt-3 btn btn-primary"
                >
                  Buy Now
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
                  <h2 className="font-weight-bold text-primary">Idobo ID75</h2>
                  <p style={{ fontSize: "20px" }}>
                    The ID75 has a hotswappable PCB and connects via USB Type C.
                    In addition, the case is CNC milled anodized aluminum with
                    several color options including an acrylic bottom to allow
                    the underglow led to shine through. The board is
                    customizable using QMK or VIA just like the{" "}
                    <a href="/olkb">OLKB Planck & Preonic</a>.
                  </p>
                  <a
                    href="https://ymdkey.com/products/idobo-75-keys-ortholinear-layout-qmk-anodized-aluminum-case-plate-hot-swappable-hot-swap-type-c-pcb-mechanical-keyboard-kit?sca_ref=3163375.1C4wKHXQtf"
                    className="btn btn-primary mr-2"
                  >
                    Buy Now
                  </a>
                  <a
                    href="https://github.com/qmk/qmk_firmware/tree/master/keyboards/idobo"
                    className="btn btn-link"
                  >
                    QMK Firmware
                  </a>
                  <a href="https://caniusevia.com/" className="btn btn-link">
                    VIA Download
                  </a>
                </div>
                <div className="col-lg-7">
                  <img
                    src="/id75.jpg"
                    alt="ID75 Keyboard Ortho Orthlinear"
                    className="img-fluid"
                  />
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
                  src="https://www.youtube.com/embed/IqxBk1QtdUE"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="usa-embed-container">
                <iframe
                  src="https://www.youtube.com/embed/YrXnuMDn-IY"
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
