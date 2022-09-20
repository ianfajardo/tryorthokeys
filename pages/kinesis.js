import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Nav from "react-bootstrap/Nav";

export default function Kinesis() {
  return (
    <div>
      <Head>
        <title>
          Kinesis offers a variety of ergonomic keyboards meant to enhance
          comfort and boost productivity for home or office use.
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="Kinesis Ergonomic Split Keyboards - Kinesis Advantage2 Kinesis Advantage 2 | Split Ortholinear Keyboard split ortho keyboard"
        />
        <meta
          name="description"
          content="Kinesis offers a variety of ergonomic keyboards meant to enhance
          comfort and boost productivity for home or office use. They
          offer 3 split keyboard designs with their Advantage 2 being
          ortholinear."
        />
        <meta
          property="og:image"
          content="https://www.tryorthokeys.com/kinesis-advantage2.jpg"
        />
      </Head>

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">Kinesis</h1>
                <p style={{ fontSize: "20px" }}>
                  Kinesis offers a variety of ergonomic keyboards meant to
                  enhance comfort and boost productivity for home or office use
                  since 1992. They offer 3 split keyboard designs with their
                  Advantage 2 being an ortholinear split keyboard.
                </p>
                <a
                  href="https://amzn.to/3pSctbE"
                  className="mt-3 btn btn-primary mr-3"
                >
                  Learn More
                </a>
                <a
                  href="https://amzn.to/3IV7kHs"
                  className="mt-3 btn btn-primary"
                >
                  Kinesis Advantage 2
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary">
        <div className="container">
          <Nav defaultActiveKey="/home" as="ul" className="py-2">
            <Nav.Item as="li">
              <Nav.Link className="text-white" href="#advantage2">
                Kinesis Advantage2
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="text-white" href="#freestyle2">
                Kinesis Freestyle2
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="text-white" href="#freestylepro">
                Kinesis Freestyle Pro
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>

      <div id="advantage2" className="section-container ">
        <div className="container">
          <div className="card ele-2">
            <div className="px-5 py-5 py-lg-5">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h2 className="font-weight-bold text-primary">
                    Kinesis Advantage2
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    The Kenesis Advantage 2 is a an ergonomic keyboard with
                    orthogonal layout, Cherry MX Brown switches, 20 degrees of
                    tenting, integrated palm supports, and more.
                    <ul>
                      <li>
                        Onboard programmability using Smart set app GUI for
                        Windows
                      </li>
                      <li>Plug-in-play with all major operating systems</li>
                      <li>3 Year Manufacturers Warranty</li>
                    </ul>
                  </p>
                  <a
                    href="https://amzn.to/3CsZySE"
                    className="btn btn-primary mr-2"
                  >
                    Buy Now
                  </a>
                </div>
                <div className="col-lg-6">
                  <a href="https://amzn.to/3CsZySE">
                    <img
                      src="/kinesis-advantage2.jpg"
                      alt="Kinesis Advantage2"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="freestyle2" className="section-container ">
        <div className="container">
          <div className="card ele-2">
            <div className="px-5 py-5 py-lg-5">
              <div className="row align-items-center">
                <div className="col-lg-9">
                  <h2 className="font-weight-bold text-primary">
                    Kinesis Freestyle2
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    A low-profile split keyboard, the Kinesis Freestyle2 allows
                    you to rotate the left and right keyboards to fit a
                    comfortable position for you.
                    <ul>
                      <li>
                        Available in 9in and 20in split seperation distances
                      </li>
                      <li>Standard Windows Layout</li>
                      <li>
                        Custom membrane key switch with low-activation force
                      </li>
                      <li>Plug-and-play with most major operating systems</li>
                    </ul>
                  </p>
                  <a
                    href="https://amzn.to/3CyE0Ef"
                    className="btn btn-primary mr-2"
                  >
                    Buy Now
                  </a>
                </div>
                <div className="col-lg-3">
                  <a
                    href="https://www.amazon.com/Freestyle2-Ergonomic-Keyboard-Standard-Separation/dp/B00CMALD3E?crid=WDYS7RSXE2S3&keywords=kinesis+keyboard&qid=1646880843&sprefix=kinesis+keyboard%2Caps%2C74&sr=8-6&linkCode=li3&tag=tryorthokey06-20&linkId=65cc5ef6682bb3dfa790dccd397ca041&language=en_US&ref_=as_li_ss_il"
                    target="_blank"
                  >
                    <img
                      border="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00CMALD3E&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                    />
                  </a>
                  <img
                    src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li3&o=1&a=B00CMALD3E"
                    width="1"
                    height="1"
                    border="0"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="freestylepro" className="section-container ">
        <div className="container">
          <div className="card ele-2">
            <div className="px-5 py-5 py-lg-5">
              <div className="row align-items-center">
                <div className="col-lg-9">
                  <h2 className="font-weight-bold text-primary">
                    Kinesis Freestyle Pro
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    Compared to the Freestyle2, the Freestyle Pro offers more
                    customizability with mechanical switches and programmbility.
                    <ul>
                      <li>
                        Onboard programmability with SmartSet app GUI for
                        Windows & Mac
                      </li>
                      <li>Up to 20in split seperation distance</li>
                      <li>Standard Windows Layout</li>
                      <li>Genuine Cherry Mehcnaical Switches</li>
                      <li>Plug-and-play with most major operating systems</li>
                      <li>2 Year Manufacturers Warranty</li>
                    </ul>
                  </p>
                  <a
                    href="https://amzn.to/3hVyEJL"
                    className="btn btn-primary mr-2"
                  >
                    Buy Now
                  </a>
                </div>
                <div className="col-lg-3">
                  <a
                    href="https://www.amazon.com/Freestyle2-Ergonomic-Keyboard-Standard-Separation/dp/B00CMALD3E?crid=WDYS7RSXE2S3&keywords=kinesis+keyboard&qid=1646880843&sprefix=kinesis+keyboard%2Caps%2C74&sr=8-6&linkCode=li3&tag=tryorthokey06-20&linkId=65cc5ef6682bb3dfa790dccd397ca041&language=en_US&ref_=as_li_ss_il"
                    target="_blank"
                  >
                    <img
                      border="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00CMALD3E&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                    />
                  </a>
                  <img
                    src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li3&o=1&a=B00CMALD3E"
                    width="1"
                    height="1"
                    border="0"
                    alt=""
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
                  src="https://www.youtube.com/embed/dHhr30207JY"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="usa-embed-container">
                <iframe
                  src="https://www.youtube.com/embed/ZTFeus_wx1Q"
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
