import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function Keyboards() {
  return (
    <div>
      <Head>
        <title>Try Ortho Keys | Ortholinear Keyboards Ortho Keyboards OLKB Planck Preonic Ergodox NIU40 Split Ortholinear Keyboard</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Try Ortho Keys | Ortholinear Keyboards Ortho Keyboards OLKB Planck Preonic Ergodox NIU40 Split Ortholinear Keyboard"/>
        <meta
          name="description"
          content="There are several different companies that offer ortholinear keyboards.  OLKB, KBDFans and more sell keyboard such as the Preonic, Planck, NUI40 and Split."
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
                  Not only are ortholinear keyboards useful, they're pretty
                  freaking cool
                </h2>
                <p style={{ fontSize: "20px" }}>
                  There are a plethora of keyboards to choose from and below are our recommendations on getting started.  It can be a fun DIY project to assemble your own ortho keyboard, add your own switches, and program your own keymappings.
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
                  <h2 className="font-weight-bold text-primary">
                    OLKB Planck & Preonic
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    The ortholinear keyboards from OLKB are the most popular
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
                  <h2 className="font-weight-bold text-primary">Split</h2>
                  <p style={{ fontSize: "20px" }}>
                    You can usually spot a split keyboard if it has two seperate
                    PCBs connected by a cable. Split keyboards literally half
                    the keyboard better ergonomics and touch typing.
                  </p>
                  <a href="/letssplit" className="btn btn-primary mr-2">
                    Split Keyboards
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
