import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Nav from "react-bootstrap/Nav";

export default function Kinesis() {
  return (
    <div>
      <Head>
        <title>
          Gizmo Engineering GK6 | GK6 ergonomic 50% ortholinear keyboard
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="Gizmo Engineering GK6 | GK6 ergonomic 50% ortholinear keyboard from Kono | mechanical keyboard | qmk firmware"
        />
        <meta
          name="description"
          content="The Gizmo Engineering GK6 is an ergonomic 50% keyboard editable with QMK firmware, hot-swap PCB, and aluminum case."
        />
        <meta property="og:image" content="https://www.tryorthokeys.com/gk6.webp"/>

      </Head>

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">
                  Gizmo Engineering GK6
                </h1>
                <p style={{ fontSize: "20px" }}>
                  The Gizmo Engineering GK6 is an ergonomic 50% keyboard
                  editable with QMK firmware, hot-swap PCB, and aluminum case.
                </p>
                <a
                  href="https://sovrn.co/1iddf86"
                  className="mt-3 btn btn-primary mr-3"
                >
                  Learn More
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
              <Nav.Link className="text-white" href="#gk6">
                Gizmo Engineering GK6
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
                    Gizmo Engineering GK6
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    The Gizmo Engineering GK6 is an ergonomic 50% keyboard
                    editable with QMK firmware, hot-swap PCB, and aluminum case.
                  </p>
                  <ul>
                    <li>Hot-swap PCB</li>
                    <li>50% Ortholinear keyboard with multiple layouts</li>
                    <li>Supports multiple bottom-row layouts</li>
                    <li>Aluminum case and ceramic coating</li>
                  </ul>
                  <a
                    href="https://sovrn.co/1iddf86"
                    className="btn btn-primary mr-2"
                  >
                    Buy Now
                  </a>
                </div>
                <div className="col-lg-6">
                  <a href="https://sovrn.co/1iddf86">
                    <img
                      src="/gk6.webp"
                      alt="Gizmo Engineering GK6"
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
                  src="https://www.youtube.com/embed/ksnYSRTOSZs"
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
