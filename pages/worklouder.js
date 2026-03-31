import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Nav from "react-bootstrap/Nav";
import Sticky from "react-stickynode";
import { getUrl } from "../lib/affiliates";

export default function Worklouder() {
  return (
    <div>
      <Head>
        <title>
          Work Louder XYZ Work Board r2 | Split 40% keyboard for creators
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="Work Louder XYZ Work Board r2 | Split 40% keyboard for creators"
        />
        <meta
          name="description"
          content="The Work Louder XYZ Work Board r2 is an Alice-inspired split 40% keyboard kit built for creators. It is currently in production for April 2026 and available to pre-order."
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
                  Work Louder builds keyboards with a more playful,
                  creator-friendly industrial design than most of the ortho
                  market. The current board we recommend here is the{" "}
                  <strong>XYZ Work Board r2</strong>, an Alice-inspired split
                  40% keyboard kit that is currently{" "}
                  <strong>in production for April 2026</strong>. Learn more
                  about{" "}
                  <a
                    href="/ultimate-guide-to-ortholinear-keyboards"
                    className="text-white font-weight-bold"
                  >
                    <u>ortho keyboards</u>
                  </a>{" "}
                  and our full lineup in our{" "}
                  <a href="/keyboards" className="text-white font-weight-bold">
                    <u>keyboards guide</u>
                  </a>
                  .
                </p>
                <a
                  href={getUrl('work-louder-xyz-work-board-r2')}
                  className="mt-3 btn btn-primary mr-2"
                >
                  Pre-order XYZ Work Board r2
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
        innerZ="5"
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
                <Nav.Link className="text-white" href="#xyz-work-board-r2">
                  XYZ Work Board r2
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link className="text-white" href="#creator-micro">
                  Creator Micro
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link className="text-white" href="#legacy-work-louder">
                  Legacy Work Louder
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </Sticky>

      <div className="section-container" id="xyz-work-board-r2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>XYZ Work Board r2</h2>
              <p>
                The XYZ Work Board r2 is Work Louder&apos;s new Alice-inspired
                split 40% keyboard kit. It keeps the brand&apos;s playful
                hardware style, but shifts the lineup toward a more compact
                split board that still feels built for shortcuts, creative
                workflows, and distinctive desk setups.
              </p>
              <p>
                As of March 23, 2026, Work Louder lists it as{" "}
                <strong>in production for April 2026</strong>, so this is a
                pre-order rather than an in-stock board.
              </p>
              <ul>
                <li>Alice-inspired split 40% layout</li>
                <li>Choc V2 low-profile magnetic switches</li>
                <li>Magnetic tenting system</li>
                <li>Compact keyboard kit aimed at creative workflows</li>
                <li>Currently in production for April 2026</li>
              </ul>
              <a
                href={getUrl('work-louder-xyz-work-board-r2')}
                className="mt-3 btn btn-primary mr-2"
              >
                Pre-order Now
              </a>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="/work-louder-xyz-work-board-r2.png"
                alt="Work Louder XYZ Work Board r2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section-container" id="creator-micro">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>Creator Micro</h2>
              <p>
                The Creator Micro is still the smaller Work Louder option if
                you want a dedicated macro pad instead of a full keyboard. It
                makes the most sense for stream controls, creative app
                shortcuts, and editing workflows where you want a second
                programmable surface next to your main board.
              </p>
              <a
                href={getUrl('work-louder-creator-micro')}
                className="mt-3 btn btn-primary mr-2"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container bg-light" id="legacy-work-louder">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>What happened to the Creator Board?</h2>
              <p>
                The older Work Louder Creator Board appears to be out of stock
                at the time of this update. Because of that, we removed the old
                Creator Board buy links on Try Ortho Keys and now point readers
                to the current Work Louder lineup instead.
              </p>
              <p className="mb-0">
                If you specifically want a current Work Louder product, the
                best place to start is the XYZ Work Board r2 above, followed by
                the Creator Micro if you want a dedicated macro pad.
              </p>
            </div>
            <div className="col-lg-4">
              <a
                href={getUrl('work-louder-xyz-work-board-r2')}
                className="btn btn-primary mt-3 mt-lg-0"
              >
                See Current Work Louder Board
              </a>
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
                Catch up on our blog for the latest guides and news for all your
                ortholinear keyboard needs.
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
