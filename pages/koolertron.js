import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Nav from "react-bootstrap/Nav";

export default function Kinesis() {
  return (
    <div>
      <Head>
        <title>
          Koolertron Ortholinear Keyboard | ortho keyboard macro keyboard
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="Koolertron Ortholinear Keyboard | ortho keyboard macro keyboard"
        />
        <meta
          name="description"
          content="Koolertron keyboard is a 48 programmable keys & 8 macro keys perfect for office and gaming use  | ortholinear Keyboard split ortho keyboard 46 programmable keypad"
        />
      </Head>

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">Koolertron</h1>
                <p style={{ fontSize: "20px" }}>
                  Koolertron keyboard is a 48 programmable keys & 8 macro keys
                  perfect for office and gaming use
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
                Koolertron Single-Handed Keyboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="text-white" href="#videos">
                Videos
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
                    Koolertron Single-Handed Keyboard
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    Koolertron keyboard is a 48 programmable keys & 8 macro keys
                    perfect for office and gaming use. Common uses include
                    creating macros and shortcuts for productivity and key
                    shortcuts for gaming.
                  </p>
                  <ul>
                    <li>46 Programmable Keys & 8 Macro Keys Based Hardware</li>
                    <li>OEM Gateron Red Switches</li>
                    <li>Portable Mini keypad</li>
                  </ul>
                  <a
                    href="https://amzn.to/3hXMSdb"
                    className="btn btn-primary mr-2"
                  >
                    Buy Now
                  </a>
                </div>
                <div className="col-lg-6">
                  <a href="https://amzn.to/3hXMSdb">
                    <img
                      src="/koolertron.jpg"
                      alt="Koolertron"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="videos" className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Videos</h2>
              <div className="usa-embed-container">
                <iframe
                  src="https://www.youtube.com/embed/19MnTDfOs4Y"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="usa-embed-container">
                <iframe
                  src="https://www.youtube.com/embed/kgMKOT6vb50"
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
