import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Try Ortho Keys</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="jumbo-container section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="py-3">
                <h1 className="display-1 font-weight-bolder">
                  Try Ortho Keys!
                </h1>
                <h2 className="font-weight-light">
                  Ergonomic, Compact and Programmable
                </h2>
                <a href="#why" className="mt-2 btn btn-primary btn-lg">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>{/* ad space */}</div>

      <div id="why" className="section-container ">
        <div className="">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="display-2 font-weight-bolder text-primary">Ergonomic</h2>
                <p className="lead">
                  On most ortholinear keyboards, your fingers aren't more than
                  two keys away from what is considered home row. The less you
                  have to move around the keyboard, the less stress there is on
                  your fingers!
                </p>
                <a href="https://olkb.com/" className="btn btn-primary mr-2">
                  OLKB Keyboards
                </a>
                <a
                  href="https://kbdfans.com/collections/fully-assembled-keyboard/products/fully-assembled-niu40-mechanical-keyboard"
                  className="btn btn-secondary"
                >
                  NIU40
                </a>
              </div>
              <div className="col-lg-6">
                <img src="/preonic-1.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
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
                className="img-fluid"
                src="/olkb-keymap.png"
                alt="Planck Keymap"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-2 font-weight-bolder text-primary">Programmable</h2>
              <p className="lead">
                Most ortholinear keyboards available allow you to fully
                customize your key mappings and can even play music! They utlize
                the open-source QMK firmware with a large supporting community.
              </p>

              <a href="https://qmk.fm/" className="btn btn-primary">
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
