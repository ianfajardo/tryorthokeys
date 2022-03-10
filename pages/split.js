import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Nav from "react-bootstrap/Nav";

export default function Split() {
  return (
    <div>
      <Head>
        <title>
          Split Keyboards - Ortholinear Split keyboards for better ergonomics |
          split keyboards ortho split keyboard keyboard split in half Kenesis
          Advantage2 Ergodox
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="Split Keyboards - Ortholinear Split keyboards for better ergonomics | split keyboards ortho split keyboard keyboard split in half Kenesis Advantage2 Ergodox"
        />
        <meta
          name="description"
          content="You can usually spot a Split keyboard if it has two
          seperate PCBs connected by a cable. Split keyboards
          literally split the keyboard in half for better
          ergonomics and encourage better touch typing. The ones
          mentioned here are only but a few."
        />
      </Head>

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">Split</h1>
                <p style={{ fontSize: "20px" }}>
                  You can usually spot a split keyboard if it has two seperate
                  PCBs connected by a cable. Split keyboards literally half the
                  keyboard to better the ergonomics and encourage better touch
                  typing. The ones mentioned here are only a few.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary">
        <div className="container">
          <Nav defaultActiveKey="/home" as="ul" className="py-2">
            <Nav.Item as="li">
              <Nav.Link className="text-white" href="#kinesis">
                Kinesis Advantage2
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="text-white" href="#ergodox">
                Ergodox
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="text-white" href="#rebound">
                Montsinger Rebound
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>

      <div id="kinesis" className="section-container ">
        <div className="container">
          <div className="card ele-2">
            <div className="px-5 py-5 py-lg-5">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h2 className="font-weight-bold text-primary">
                    Kinesis Advantage2
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    The Kinesis Advantage 2 is a an ergonomic keyboard with
                    Cherry MX Brown switches, 20 degrees of tenting, integrated
                    palm supports, and more.
                  </p>
                  <a
                    href="https://amzn.to/3acrMnl"
                    className="btn btn-primary mr-2"
                  >
                    View on Amazon
                  </a>
                  <a href="/kinesis" className="btn btn-primary mr-2">
                    Learn more
                  </a>
                </div>
                <div className="col-lg-4">
                  <a
                    href="https://www.amazon.com/Kinesis-Advantage2-Ergonomic-Keyboard-KB600/dp/B01KR1C5PY?dchild=1&keywords=ergodox&link_code=qs&qid=1633572132&sr=8-8&linkCode=li3&tag=tryorthokey06-20&linkId=4833c6cd4b32fd50c0ede5e210da6cd7&language=en_US&ref_=as_li_ss_il"
                    target="_blank"
                  >
                    <img
                      border="0"
                      src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01KR1C5PY&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                    />
                  </a>
                  <img
                    src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li3&o=1&a=B01KR1C5PY"
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

      <div id="rebound" className="section-container ">
        <div className="container">
          <div className="card ele-2">
            <div className="px-5 py-5 py-lg-5">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <h2 className="font-weight-bold text-primary">
                    Montsinger Rebound
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    The Rebound is a 50% split ortholinear keyboard and is made
                    to fit into most 60% percent keyboard cases. It is highly
                    customizable with space in the middle of the keyboard for
                    additional switches and support for a rotary encoder. The
                    keyboard isn't available pre-built and the parts must be
                    purchased seperately.
                  </p>
                  <a
                    href="https://store.montsinger.net/products/rebound"
                    className="btn btn-primary mr-2"
                  >
                    Buy the Rebound
                  </a>
                </div>
                <div className="col-lg-7">
                  <img
                    className="img-fluid"
                    src="montsinger.webp"
                    alt="Montsinger Rebound"
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
