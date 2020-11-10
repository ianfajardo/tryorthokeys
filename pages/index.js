import Head from "next/head";
import Navigation from "../components/nav";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Try Ortho Keys - Ortholinear Keyboards</title>
        <link rel="icon" href="/favicon.ico" />

        <title>Try Ortho Keys - Ortholinear Keyboards</title>
        <meta name="title" content="Try Ortho Keys - Ortholinear Keyboards" />
        <meta
          name="description"
          content="Ortholinear keyboards are erognomic computer keyboards with a grid layout. Most orthlinear keyboards have mechanical key switches and programmable keymappings."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tryorthokeys.com/" />
        <meta
          property="og:title"
          content="Try Ortho Keys - Ortholinear Keyboards"
        />
        <meta
          property="og:description"
          content="Ortholinear keyboards are erognomic computer keyboards with a grid layout. Most orthlinear keyboards have mechanical key switches and programmable keymappings."
        />
        <meta property="og:image" content="/planck-2.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.tryorthokeys.com/" />
        <meta
          property="twitter:title"
          content="Try Ortho Keys - Ortholinear Keyboards"
        />
        <meta
          property="twitter:description"
          content="Ortholinear keyboards are erognomic computer keyboards with a grid layout. Most orthlinear keyboards have mechanical key switches and programmable keymappings."
        />
        <meta property="twitter:image" content="/planck-2.jpg" />
      </Head>

      <Navigation />

      <div className="jumbo-container section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="py-3">
                <h1 className="display-1 font-weight-bolder">
                  Try Ortho Keys!
                </h1>
                <h2 className="text-primary font-weight-bold py-2">
                  Ergonomic, Programmable and Compact
                </h2>
                <p className="py-3" style={{ fontSize: "20px" }}>
                  Ortholinear keyboards are erognomic computer keyboards with
                  their keys arranged in a grid layout. Most orthlinear
                  keyboards have mechanical switches and programmable
                  keymappings.
                </p>
                <a href="/keyboards" className="mt-2 btn btn-primary btn-lg">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>{/* ad space */}</div>

      <div id="ergonomic" className="section-container ">
        <div className="">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="display-2 font-weight-bolder text-primary">
                  Ergonomic
                </h2>
                <p className="lead">
                  On most ortholinear keyboards, your fingers aren't more than
                  two keys away from what is considered home row. The less you
                  have to move around the keyboard, the less stress there is on
                  your fingers!
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
                keyboard has speakers! They utilize the open-source QMK firmware
                so that you can customize the keys mappings to your liking.
              </p>

              <a href="https://qmk.fm/" className="btn btn-secondary">
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
