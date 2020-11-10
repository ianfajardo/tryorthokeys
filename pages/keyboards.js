import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Keyboards() {
  return (
    <div>
      <Head>
        <title>Try Ortho Keys</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">
                  Ortholinear keyboards
                </h1>
                <h2 className="font-weight-light">
                  Ergonomic, Compact and Programmable
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>{/* ad space */}</div>

      <div id="why" className="section-container ">
        <div className="container">
          <div className="card ele-2">
            <div className="px-5 py-5 py-lg-3">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <h2>OLKB Planck & Preonic</h2>
                  <p style={{ fontSize: "20px" }}>
                    They ortholinear keyboards from OLKB are the most popular
                    offerings today. Both are highly customizable and the Planck
                    and Preonic frequently updated.
                  </p>
                  <a
                    href="https://olkb.com/collections/planck"
                    className="btn btn-primary mr-2"
                  >
                    Planck
                  </a>
                  <a
                    href="https://olkb.com/collections/preonic"
                    className="btn btn-secondary"
                  >
                    Preonic
                  </a>
                </div>
                <div className="col-lg-7">
                  <div className="usa-embed-container">
                    <iframe
                      src="https://www.youtube.com/embed/bEPg8kk84gw"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="container">
          <div className="card ele-2">
            <div className="px-5 py-5 py-lg-3">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="usa-embed-container">
                    <iframe
                      src="https://www.youtube.com/embed/rM0m5Xg1D3s"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h2>NIU40</h2>
                  <p style={{ fontSize: "20px" }}>
                    The NIU40 is an complete keyboard offered by KBDFANS
                  </p>

                  <a href="https://qmk.fm/" className="btn btn-primary">
                    Learn about QMK
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
