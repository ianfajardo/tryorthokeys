import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function Niu() {
  return (
    <div>
      <Head>
        <title>
          NIU40 NIU Mini - The NIU40 is a programmable 40% ortholinear keyboard
          from KBDFans
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="NIU40 NIU Mini - The NIU40 is a programmable 40% ortholinear keyboard from KBDFans | NIU ortho keyboard NIU 40 NIU Mini"
        />
        <meta
          name="description"
          content="The NIU40 is a programmable 40% ortholinear keyboard from KBDFans. There
          are options for different colored aluminium or acrylic
          bases. There are not any hot swappable versions available at the moment."
        />
        <meta
          property="og:image"
          content="https://www.tryorthokeys.com/niu40.webp"
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
                  The NIU 40 / NIU Mini is a 40% keyboard similar to the Planck
                  ortholinear keyboard. A bit cheaper than the OLKB offerings,
                  it offers similar functionality and features. The NIU 40 is no
                  longer available anymore at KBDFans but a new ortholienar
                  keyboard by them in the works called the{" "}
                  <a href="https://kbdfans.com/r?id=be1aik">
                    Solar Keyboard Kit
                  </a>
                  .
                </p>
                <a
                  href="https://kbdfans.com/r?id=be1aik"
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
                <div className="col-lg-8">
                  <h2 className="font-weight-bold text-primary">NIU40</h2>
                  <p style={{ fontSize: "20px" }}>
                    The NIU40 is a programmable 40% ortholinear keyboard from
                    KBDFans. There are options for different colored aluminium
                    or acrylic bases. Features include Underglow RGB PCBs, QMK
                    support, and precision CNC production. There are not any hot
                    swappable versions available at the moment.
                  </p>
                  <a
                    href="https://kbdfans.com/r?id=be1aik"
                    className="btn btn-primary mr-2"
                  >
                    Buy Now
                  </a>
                  <a
                    href="https://github.com/qmk/qmk_firmware/tree/master/keyboards/niu_mini"
                    className="btn btn-link"
                  >
                    QMK Firmware
                  </a>
                </div>
                <div className="col-lg-4">
                  <img
                    className="img-fluid"
                    src="/niu40.webp"
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
            <div className="col-lg-6">
              <div className="card">
                <div className="card-img-top">
                  <a href="/posts/what-to-do-after-getting-an-ortholinear-keyboard">
                    <img
                      src="/first-ortholinear-board.png"
                      alt="What to do after getting an Ortholinear Keyboard"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <div className="text-muted">
                    <small>March 25, 2021</small>
                  </div>
                  <a
                    class="lead"
                    href="/posts/what-to-do-after-getting-an-ortholinear-keyboard"
                  >
                    What to do after getting your first Ortholinear Keyboard
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-img-top">
                  <a href="/posts/budget-keycaps-for-your-ortho-keyboard">
                    <img
                      src="/best-budget-keycaps-ortho-keyboard.png"
                      alt="Best Budget Keycaps Ortho Keyboard"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <div className="text-muted">
                    <small>April 14, 2021</small>
                  </div>
                  <a
                    class="lead"
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
