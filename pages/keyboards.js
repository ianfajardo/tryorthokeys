import Head from "next/head";
import Navigation from "../components/nav";
import Footer from "../components/footer";

export default function Keyboards() {
  return (
    <div>
      <Head>
        <title>Try Ortho Keys - Ortholinear Keyboard Products</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="There are several different companies that offer ortholinear keyboards.  OLKB, KBDFans and many other's sell keyboard such as the Preonic, Planck, NUI40 and Let's Split."
        />
      </Head>

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">
                  Ortholinear keyboards
                </h1>
                <h2 className="text-primary font-weight-light">
                  Not only are ortholinear keyboards ergonomic, they're pretty
                  freaking cool
                </h2>
                <p style={{ fontSize: "20px" }}>
                  There are a plethora of keyboards to choose from and below are
                  only a couple of the popular ones to choose from
                </p>
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
                  <h2 className="font-weight-bold text-primary">OLKB Planck & Preonic</h2>
                  <p style={{ fontSize: "20px" }}>
                    They ortholinear keyboards from OLKB are the most popular
                    offerings today. Both are highly customizable and the Planck
                    and Preonic frequently updated.
                  </p>

                  <a href="/olkb" className="btn btn-primary mr-2 mb-2">
                    View OLKB Keyboards
                  </a>
                  <a
                    href="https://drop.com/buy/planck-mechanical-keyboard?utm_source=linkshare&referer=T93XGG"
                    className="btn btn-secondary mb-2"
                  >
                    Buy on Drop
                  </a>
                </div>
                <div className="col-lg-7">
                  <img
                    src="/plank-preonic.jpg"
                    alt="Plance & Preonic Keyboards"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="ergodox" className="section-container ">
        <div className="container">
          <div className="card ele-2">
            <div className="px-5 py-5 py-lg-5">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <h2 className="font-weight-bold text-primary">Let's Split</h2>
                  <p style={{ fontSize: "20px" }}>
                    You can usually spot a Let's Split keyboard if it has two
                    seperate PCBs connected by a cable. Let's Split keyboards
                    literally split the keyboard in half to further better the
                    ergonomics.
                  </p>
                  <a href="/letssplit" className="btn btn-primary mr-2">
                    Let's Split Keyboards
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
          <div className="card ele-2">
            <div className="px-5 py-5 py-lg-3">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="usa-embed-container">
                    <iframe
                      src="https://www.youtube.com/embed/rM0m5Xg1D3s"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h2 className="font-weight-bold text-primary">NIU40</h2>
                  <p style={{ fontSize: "20px" }}>
                    The NIU40 is a programmable 40% ortholinear keyboard from
                    KBDFans. There are options for different colored aluminium
                    or acrylic bases.
                  </p>

                  <a href="/niu40" className="btn btn-primary">
                    Learn about NIU40
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
