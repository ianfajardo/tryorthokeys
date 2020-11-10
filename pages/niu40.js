import Head from "next/head";
import Navigation from "../components/nav";
import Footer from "../components/footer";

export default function Niu() {
  return (
    <div>
      <Head>
        <title>
          NIU40 NIU Mini - Highly popular ortholinear keyboard producer
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="The NIU40 is a programmable 40% ortholinear keyboard from KBDFans. There
          are options for different colored aluminium or acrylic
          bases. There are not any hot swappable versions available at the moment."
        />
      </Head>

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">
                  NIU40 / NIU Mini
                </h1>
                <p style={{ fontSize: "20px" }}>
                  The NIU 40 / NIU Mini is a 40% similar keyboard to the Planck
                  ortholinear keyboard. You purchase them fully assembled at{" "}
                  <a href="https://kbdfans.com/products/fully-assembled-niu40-mechanical-keyboard">
                    KBDFans
                  </a>
                  .{" "}
                </p>
                <a
                  href="https://kbdfans.com/products/fully-assembled-niu40-mechanical-keyboard"
                  className="mt-3 btn btn-primary"
                >
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
                  <h2 className="font-weight-bold text-primary">NIU40</h2>
                  <p style={{ fontSize: "20px" }}>
                    The NIU40 is a programmable 40% ortholinear keyboard from KBDFans. There
                    are options for different colored aluminium or acrylic
                    bases. There are not any hot swappable versions available at the moment.
                  </p>
                  <a
                    href="https://kbdfans.com/products/fully-assembled-niu40-mechanical-keyboard"
                    className="btn btn-primary mr-2"
                  >
                    View on KBDFans
                  </a>
                  <a
                    href="https://github.com/qmk/qmk_firmware/tree/master/keyboards/niu_mini"
                    className="btn btn-link"
                  >
                    QMK Firmware
                  </a>
                </div>
                <div className="col-lg-7">
                  <img
                    className="img-fluid"
                    src="/niu40.jpg"
                    alt="Planck Keyboard"
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
                  src="https://www.youtube.com/embed/ofXOu7zK9IY"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="usa-embed-container">
                <iframe
                  src="https://www.youtube.com/embed/Ecvz5wzJ-RQ"
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
