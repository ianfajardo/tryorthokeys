import Head from "next/head";
import Navigation from "../components/nav";
import Footer from "../components/footer";

export default function Niu() {
  return (
    <div>
      <Head>
        <title>
          Let's Split - Ortholinear Split keyboards for even better ergonomics
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="You can usually spot a Let's Split keyboard if it has two
          seperate PCBs connected by a cable. Let's Split keyboards
          literally split the keyboard in half to further better the
          ergonomics and encourage better touch typing and the ones
          mentioned here are only a few."
        />
      </Head>

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">Let's Split</h1>
                <p style={{ fontSize: "20px" }}>
                  You can usually spot a Let's Split keyboard if it has two
                  seperate PCBs connected by a cable. Let's Split keyboards
                  literally split the keyboard in half to further better the
                  ergonomics and encourage better touch typing and the ones
                  mentioned here are only a few.
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

      <div id="ergodox" className="section-container ">
        <div className="container">
          <div className="card ele-2">
            <div className="px-5 py-5 py-lg-5">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <h2 className="font-weight-bold text-primary">ErgoDox</h2>
                  <p style={{ fontSize: "20px" }}>
                    The ErgoDox is a keyboard built for complete ergonomics that
                    splits the keyboard in half, allowing you to open your chest
                    and widen your arm span while you are typing. Their online
                    store allows you to highly customize your ErgoDox so that
                    it's ready to go when it reaches your doorstep. Their new
                    offering, the Moonlander, allows you to customize different
                    angles on the keyboard, fold into to a carrying package and
                    much more.
                  </p>
                  <a
                    href="https://ergodox-ez.com/"
                    className="btn btn-primary mr-2"
                  >
                    View on ErgoDox
                  </a>
                  <a
                    href="https://ergodox-ez.com/pages/our-firmware"
                    className="btn btn-link"
                  >
                    QMK Firmware
                  </a>
                </div>
                <div className="col-lg-7">
                  <div className="usa-embed-container">
                    <iframe
                      src="https://www.youtube.com/embed/mWu-_ACpSgY"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
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
          <div className="row">
            <div className="col-lg-12">
              <div className="usa-embed-container">
                <h2>Videos</h2>
                <iframe
                  src="https://www.youtube.com/embed/mWu-_ACpSgY"
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
