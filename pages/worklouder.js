import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";
import Sticky from "react-stickynode";

export default function Worklouder() {
  return (
    <div>
      <Head>
        <title>
          Work Louder | Modular keyboards for digital creators | 60% keyboard
          ortholinear keyboard ortho keyboard
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="Work Louder | Modular keyboards for digital creators | 60% keyboard ortholinear keyboard ortho keyboard"
        />
        <meta
          name="description"
          content="The Work Louder Creator Board is a modular, ortholinear keyboard for the creative who types all day long - writers, coders, business owners, and more.  It's designed to be highly customizable, and can change with your needs."
        />
      </Head>

      <Navigation />

      <div className="bg-secondary text-white section-container work-louder-jumbo">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">Work Louder</h1>
                <p className="lead" style={{ fontSize: "27px" }}>
                  Work Louder is a company building keyboards with innovative
                  features designed to make things easier for creatives.
                </p>
                <a
                  href="https://worklouder.cc/shop/"
                  className="mt-3 btn btn-primary mr-2"
                >
                  Buy Now
                </a>
                <a
                  className="mt-3 btn btn-outline-primary"
                  href="https://worklouder.cc/"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Sticky
        enabled={true}
        top="#secondnav"
        bottomBoundary="#content"
        innerZ="99999"
      >
        <div
          className="bg-primary"
          style={{ position: "relative", zIndex: "99999" }}
        >
          <div className="container">
            <Nav
              id="#secondnav"
              defaultActiveKey="/home"
              as="ul"
              className="py-2"
            >
              <Nav.Item as="li">
                <Nav.Link className="text-white" href="#creator-board">
                  Creator Board
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link className="text-white" href="#creator-micro">
                  Creator Micro
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link className="text-white" href="#photos">
                  Photos
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
      </Sticky>

      <div className="section-container" id="creator-board">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>Creator Board</h2>
              <p>
                The Creator Board is an innovative modular design keyboard that can be configured to suit individual preferences. This is a customizable keyboard (customizable in terms of keys, orientation, modules, and size), which means you can create a personally tailored setup to fit your needs.
              </p>
              <ul>
                <li>Cusomizable removable modules</li>
                <li>Up to 6 rotary knobs</li>
                <li>236 programmable keys across 4 key layers</li>
                <li>VIA and QMK configurarable to customize all keys</li>
                <li>60% layout</li>
              </ul>
              <a
                href="https://worklouder.cc/creator-board/"
                className="mt-3 btn btn-primary mr-2"
              >
                Buy Now
              </a>
              <a
                className="mt-3 btn btn-outline-primary"
                href="https://worklouder.cc/"
              >
                Website
              </a>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="creator-board/work-louder-creator-board-keycaps.jpg"
                alt="work louder creator board"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section-container " id="creator-micro">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="/work-louder-creator-board-switches.jpg"
                alt="work louder creator board"
              />
            </div>
            <div className="col-lg-6">
              <h2>Creator Micro</h2>
              <p>
                Recently announced, the Creator Micro is a smaller, macro
                keyboard with a similar design as their Creator Board.
              </p>
              <a
                href="https://worklouder.cc/creator-micro/"
                className="mt-3 btn btn-primary mr-2"
              >
                Coming Soon
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container" id="photos">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 mb-3">
              <h2>Photos</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <img
                src="/creator-board/work-louder-creator-board-bag.jpg"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4">
              <img
                src="/creator-board/work-louder-creator-board-packaging-keycaps.jpg"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4">
              <img
                src="/creator-board/work-louder-creator-board-packaging.jpg"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4">
              <img
                src="/creator-board/work-louder-creator-board-switches.jpg"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4">
              <img
                src="/creator-board/work-louder-creator-board-keycaps.jpg"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4">
              <img
                src="/creator-board/work-louder-creator-board.jpg"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section-container" id="videos">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Videos</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="usa-embed-container">
                <iframe
                  src="https://www.youtube.com/embed/GH8f0UpX8CE"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="usa-embed-container">
                <iframe
                  src="https://www.youtube.com/embed/ATpmty4Leto"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="usa-embed-container">
                <iframe
                  src="https://www.youtube.com/embed/OyC12A24Sag"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Read Our Blog</h2>
              <p className="lead">
                Catch up on our blog for the latest guides & news for all your
                ortholinear keyboard needs!
              </p>
              <a href="/posts" className="btn btn-primary my-2">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
