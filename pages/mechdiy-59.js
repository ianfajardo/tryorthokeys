import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Nav from "react-bootstrap/Nav";

export default function Kinesis() {
  return (
    <div>
      <Head>
        <title>MechDIY 59 | Ortholinear Keyboard 50% Keyboard Ortho </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="MechDIY 59 | Ortholinear Keyboard | 40% Keyboard Ortho | 40 percent ortholinear | mechanical keyboard | qmk firmware"
        />
        <meta
          name="description"
          content="The MechDIY 59-Key ortholinear keyboard has an acrylic case, hotswap PCB, RGB backlit, and is fully customizable through VIA software."
        />
        <meta
          property="og:image"
          content="https://www.tryorthokeys.com/mechdiy-59.jpg"
        />
      </Head>

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">MechDIY 59</h1>
                <p style={{ fontSize: "20px" }}>
                  The MechDIY 59-Key ortholinear keyboard has an acrylic case,
                  hotswap PCB, RGB backlit, and is fully customizable through
                  VIA software.
                </p>
                <a
                  href="https://shrsl.com/45sgz"
                  className="mt-3 btn btn-primary mr-3"
                >
                  Buy Now
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
              <Nav.Link className="text-white" href="#mechdiy">
                MechDIY 59
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
                  <h2 className="font-weight-bold text-primary">MechDIY 59</h2>
                  <p style={{ fontSize: "20px" }}>
                    The MechDIY 59-Key ortholinear keyboard has an acrylic case,
                    hotswap PCB, RGB backlit, and is fully customizable through
                    VIA software.
                  </p>
                  <ul>
                    <li>Hot-swap PCB</li>
                    <li>Acrlyic Case</li>
                    <li>
                      RGB Backlit: designed with full keyboard independent RGB
                      light, 16.8 million color combinations, 8 monochrome
                      backlight modes and 1 full color backlight mode.
                    </li>
                    <li>Aluminum case and ceramic coating</li>
                  </ul>
                  <a
                    href="https://shrsl.com/45sgz"
                    className="btn btn-primary mr-2"
                  >
                    Buy Now
                  </a>
                </div>
                <div className="col-lg-6">
                  <a href="https://shrsl.com/45sgz">
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
