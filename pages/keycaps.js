import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";
import Sticky from "react-stickynode";

export default function Keycaps() {
  return (
    <div>
      <Head>
        <title>
          Ortholinear Keycap Set List | OLKB Planck Preonic NIU40 NIUmini ortho
          keyboard ortho keycaps budget keycaps Drop KBDfans Amazon keycaps
          mechanical keyboard
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="Ortholinear Keycap Set List | OLKB Planck Preonic NIU40 NIUmini ortho keyboard ortho keycaps budget keycaps Drop KBDfans Amazon keycaps mechanical keyboard"
        />
        <meta
          name="description"
          content="Here is a list of ortholinear keycaps availble for your ortho keyboard such as the OLKB Planck or Preonic. Ortho Keycaps can be an option along with the standard layouts for more common mechanical keyboards."
        />
        <meta
          property="og:image"
          content="https://www.tryorthokeys.com/ortho-keycaps.png"
        />
        <meta
          property="og:title"
          content="Ortholinear Keycap Set List | OLKB Planck Preonic NIU40 NIUmini ortho keyboard ortho keycaps budget keycaps Drop KBDfans Amazon keycaps mechanical keyboard"
        />
        <meta
          property="og:description"
          content="Here is a list of ortholinear keycaps availble for your ortho keyboard such as the OLKB Planck or Preonic. Ortho Keycaps can be an option along with the standard layouts for more common mechanical keyboards."
        />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.tryorthokeys.com/keycaps/"
        />
        <meta
          property="twitter:title"
          content="Ortholinear Keycap Set List | OLKB Planck Preonic NIU40 NIUmini ortho keyboard ortho keycaps budget keycaps Drop KBDfans Amazon keycaps mechanical keyboard"
        />
        <meta
          property="twitter:description"
          content="Here is a list of ortholinear keycaps availble for your ortho keyboard such as the OLKB Planck or Preonic. Ortho Keycaps can be an option along with the standard layouts for more common mechanical keyboards."
        />
        <meta
          property="twitter:image"
          content="https://www.tryorthokeys.com/ortho-keycaps.png"
        />
      </Head>

      <Navigation />

      <div id="header" className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">
                  Ortholinear Keycaps
                </h1>
                <h2 className="text-primary font-weight-light">
                  Our list of ortho keycaps for your keyboard that you can get
                  today!
                </h2>
                <p style={{ fontSize: "20px" }}>
                  Below is a list of available keycap sets for otholinear
                  keyboards or have an ortholinear keycap option. This list will
                  be updated as often as possible. <br />
                  <br />
                  For any recommendations to this list, please send us a tweet
                  on our <a href="https://twitter.com/tryorthokeys">
                    twitter
                  </a>{" "}
                  or message us on our{" "}
                  <a href="https://www.instagram.com/try_ortho_keys">
                    instagram
                  </a>
                  .
                </p>
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
                <Nav.Link className="text-white" href="#ydmk">
                  YMDK
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link className="text-white" href="#drop">
                  Drop
                </Nav.Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Nav.Link className="text-white" href="#pimpmykeyboard">
                  Pimp My Keyboard
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link className="text-white" href="#kbdfans">
                  KBDfans
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link className="text-white" href="#kono">
                  Kono
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link className="text-white" href="#amazon">
                  Amazon
                </Nav.Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Nav.Link className="text-white" href="#split">
                  Split Keycaps
                </Nav.Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Nav.Link className="text-white" href="#other">
                  Other
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </Sticky>

      <div id="content" className="container-fluid">
        <div className="row">
          <div className="d-none d-lg-block d-xl-block col-lg-2">
            <div className="section-container">
              <h3 className="font-weight-bold text-primary">Keyboards</h3>
              <div className="card">
                <div className="card-body">
                  <h3>OLKB Plank &amp; Preonic</h3>
                  <img
                    className="img-fluid my-3"
                    src="/plank-preonic.jpg"
                    alt="OLKB Planck &amp; Preonic"
                  />
                  <p className="mt-3">
                    OLKB is the producer of the highly popular Planck &amp;
                    Preonic Ortholinear keyboards. The owner, Jack Humbert, is
                    also the founder of QMK. These keyboards are sold on the
                    OLKB website and frequently on Drop.com
                  </p>
                  <a href="/olkb" className="btn btn-secondary mt-3">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="card">
                <div className="card-body">
                  <h3>KPrepublic CSTC40</h3>
                  <a href="/kprepublic-cstc40">
                    <img
                      className="img-fluid"
                      src="/cstc40.jpg"
                      alt="KPrepublic CSTC40"
                    />
                  </a>
                  <p>
                    The KPrepublic CSTC40 a 40% ortholinear layout similar to
                    the Planck keyboard. It has a hot-swap pcb, rgb lighting,
                    and more. A great budget Planck alternative. Configurable
                    through VIA software.
                  </p>
                  <a
                    href="/kprepublic-cstc40"
                    className="btn btn-secondary mt-3"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-8">
            <div id="FKcaps" className="section-container pb-0">
              <div>
                <div className="card ele-2 bg-primary">
                  <div className="px-5 py-5">
                    <div className="row align-items-center">
                      <div className="col-lg-2">
                        <img className="img-fluid" src="fkcaps.jpg" />
                      </div>
                      <div className="col-lg-8 text-light">
                        <h2>Design your own keycaps with FKcaps</h2>
                        <p>
                          Use our link to get a special <strong>10% off</strong>{" "}
                          affordable customizable keycaps at FKcaps. They offer
                          cherry, DSA, MDA, choc-style caps, and much more.
                          Choose from different layouts to fit your needs, pick
                          custom fonts, and more with their awesome customizer.{" "}
                        </p>
                      </div>
                      <div className="col-lg-2">
                        <a
                          href="https://fkcaps.com/custom?a=tryorthokeys"
                          className="btn btn-lg btn-light"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="ymdk" className="section-container ">
              <div>
                <div className="card ele-2">
                  <div className="px-5 py-5">
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <h2 className="font-weight-bold text-primary">
                          <a href="https://drop.com/?referer=T93XGG">YMDK</a>{" "}
                          Keycaps
                        </h2>
                        <p>YDMK offers budget friendly keycap sets!</p>

                        <a
                          href="https://ymdkey.com/search?q=ortholinear&options%5Bprefix%5D=last&sca_ref=3163375.1C4wKHXQtf"
                          className="btn btn-secondary mb-2"
                        >
                          YDMK Site
                        </a>

                        <Table
                          responsive
                          striped
                          bordered
                          hover
                          className="mt-3"
                        >
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Profile</th>
                              <th>Image</th>
                              <th>Link</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Matcha Keycaps</td>
                              <td>ZDA</td>
                              <td>
                                <a
                                  href="https://ymdkey.com/products/68-matcha-keycaps-dye-sub-zda-profile-for-ergo-ergodox-lily58-planck-preonic?variant=39337151037501&sca_ref=3163375.1C4wKHXQtf"
                                  target="_blank"
                                >
                                  <img
                                    border="0"
                                    src="/matcha-68.jpg"
                                    style={{ maxWidth: "160px" }}
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://ymdkey.com/products/68-matcha-keycaps-dye-sub-zda-profile-for-ergo-ergodox-lily58-planck-preonic?variant=39337151037501&sca_ref=3163375.1C4wKHXQtf">
                                  View Now
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>DSA 48 Keycaps</td>
                              <td>DSA</td>
                              <td>
                                <a
                                  href="https://ymdkey.com/products/dsa-48-keycaps-for-planck-filco-ergodox?_pos=6&_sid=21df443e9&_ss=r&sca_ref=3163375.1C4wKHXQtf"
                                  target="_blank"
                                >
                                  <img
                                    border="0"
                                    src="/dsa-48.jpg"
                                    style={{ maxWidth: "160px" }}
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://ymdkey.com/products/dsa-48-keycaps-for-planck-filco-ergodox?_pos=6&_sid=21df443e9&_ss=r&sca_ref=3163375.1C4wKHXQtf">
                                  View Now
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>58 Mixed Colors Keycaps</td>
                              <td>DSA</td>
                              <td>
                                <a
                                  href="https://ymdkey.com/products/58-mixed-color-keycaps-due-sub-dsa-profile-for-amj40-niu40-ymd-40?variant=30994888294461&sca_ref=3163375.1C4wKHXQtf"
                                  target="_blank"
                                >
                                  <img
                                    border="0"
                                    src="/58-key.jpg"
                                    style={{ maxWidth: "160px" }}
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://ymdkey.com/products/58-mixed-color-keycaps-due-sub-dsa-profile-for-amj40-niu40-ymd-40?variant=30994888294461&sca_ref=3163375.1C4wKHXQtf">
                                  View More
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </Table>

                        <iframe
                          className="d-none d-xl-block"
                          src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=prime_up&banner=13X19G3KXJPB8R7KG782&f=ifr&linkID=31bc46daa187ff9e2cd10925de1ccb59&t=tryorthokey06-20&tracking_id=tryorthokey06-20"
                          width="728"
                          height="90"
                          scrolling="no"
                          border="0"
                          marginWidth="0"
                          style={{ border: "none" }}
                          frameBorder="0"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="drop" className="section-container ">
              <div>
                <div className="card ele-2">
                  <div className="px-5 py-5">
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <h2 className="font-weight-bold text-primary">
                          <a href="https://drop.com/?referer=T93XGG">Drop</a>{" "}
                          Keycaps
                        </h2>
                        <p>
                          Drop offers keyboards, keycaps, and audio peripherals
                          on Amazon and group buys on their websites.
                        </p>
                        <a
                          href="https://amzn.to/3kOm0gT"
                          className="btn btn-primary mr-2 mb-2"
                        >
                          Drop on Amazon
                        </a>
                        <a
                          href="https://drop.com/?referer=T93XGG"
                          className="btn btn-secondary mb-2"
                        >
                          Drop Website
                        </a>

                        <Table
                          responsive
                          striped
                          bordered
                          hover
                          className="mt-3"
                        >
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Profile</th>
                              <th>Image</th>
                              <th>Link</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Preonic Acute Keycaps</td>
                              <td>OEM</td>
                              <td>
                                <a href="https://amzn.to/3jCLKx5">
                                  <img
                                    src="/keycaps/acutepreonic.jpg"
                                    alt="Preonic Keycaps"
                                    style={{ maxWidth: "160px" }}
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://amzn.to/3jCLKx5">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>Black-on-White Keycap Set</td>
                              <td>MT3</td>
                              <td>
                                <a href="https://amzn.to/3zKJ6Lu">
                                  <img
                                    src="/keycaps/mt3bow.jpg"
                                    alt="MT3 BoW Ortholinear keycaps"
                                    style={{ maxWidth: "160px" }}
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://amzn.to/3zKJ6Lu">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>White-on-Black Keycap Set</td>
                              <td>MT3</td>
                              <td>
                                <a href="https://amzn.to/3BzUg69">
                                  <img
                                    src="/keycaps/mt3wob.jpg"
                                    alt="MT3 WoB Ortholinear keycaps"
                                    style={{ maxWidth: "160px" }}
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://amzn.to/3BzUg69">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>Dasher Keycap Set</td>
                              <td>MT3</td>
                              <td>
                                <a href="https://amzn.to/38AcCaN">
                                  <img
                                    src="/keycaps/mt3dasher.jpg"
                                    alt="MT3 Dasher Ortholinear keycaps"
                                    style={{ maxWidth: "160px" }}
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://amzn.to/38AcCaN">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>MiTo Canvas Keycap Set</td>
                              <td>XDA</td>
                              <td>
                                <a href="https://amzn.to/3t7UMoY">
                                  <img
                                    src="/keycaps/canvas.jpg"
                                    alt="MiTo Canvas Ortholinear keycaps"
                                    style={{ maxWidth: "160px" }}
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://amzn.to/3t7UMoY">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>Matt3o /dev/tty Keycap Set</td>
                              <td>MT3</td>
                              <td>
                                <a href="https://drop.com/buy/drop-matt3o-mt3-dev-tty-keycap-set?utm_source=linkshare&referer=T93XGG">
                                  <img
                                    src="/keycaps/dev.jpg"
                                    alt="Matt3o /dev/tty Ortholinear keycaps"
                                    style={{ maxWidth: "160px" }}
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://amzn.to/3jCBsgw">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>Matt3o Susuwatari Custom Keycap Set</td>
                              <td>MT3</td>
                              <td>
                                <a href="https://amzn.to/38FBs96">
                                  <img
                                    src="/keycaps/dev2.jpg"
                                    alt="Matt3o Susuwatari Ortholinear Keycap"
                                    style={{ maxWidth: "160px" }}
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://amzn.to/38FBs96">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>Camillo Keycap Set</td>
                              <td>MT3</td>
                              <td>
                                <a href="https://drop.com/buy/drop-mt3-camillo-keycap-set?utm_source=linkshare&referer=T93XGG">
                                  <img
                                    src="/keycaps/camilo.jpg"
                                    alt="Camillo Ortholinear Keycap Set"
                                    style={{ maxWidth: "160px" }}
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://amzn.to/3zEMeII">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>Jukebox Keycap Set</td>
                              <td>MT3</td>
                              <td>
                                <a href="https://amzn.to/3kLJL9m">
                                  <img
                                    src="/keycaps/jukebox.jpg"
                                    alt="Jukebox Ortholinear Keycap Set"
                                    style={{ maxWidth: "160px" }}
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://amzn.to/3kLJL9m">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>MiTO Cyber Keycap Set</td>
                              <td>MT3</td>
                              <td>
                                <a href="https://amzn.to/3humB6r">
                                  <img
                                    src="/keycaps/cyber.jpg"
                                    alt="MiTO Cyber Orthlinear Keycap Set"
                                    style={{ maxWidth: "160px" }}
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://amzn.to/3humB6r">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>DROP MT3 Skiidata Keycap Set</td>
                              <td>MT3</td>
                              <td>
                                <a href="https://amzn.to/3pWAcaq">
                                  <img
                                    src="/keycaps/skiidata.jpg"
                                    alt="DROP MT3 Skiidata Orthlinear Keycap Set"
                                    style={{ maxWidth: "160px" }}
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://amzn.to/3pWAcaq">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>Planck Acute Keycaps</td>
                              <td>OEM</td>
                              <td>
                                <a href="https://amzn.to/3rzSVKH">
                                  <img
                                    src="/keycaps/acute.jpg"
                                    alt="Acute Planck Keycaps"
                                    style={{ maxWidth: "160px" }}
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://amzn.to/3rzSVKH">Amazon</a>
                              </td>
                            </tr>
                          </tbody>
                        </Table>

                        <iframe
                          className="d-none d-xl-block"
                          src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=prime_up&banner=13X19G3KXJPB8R7KG782&f=ifr&linkID=31bc46daa187ff9e2cd10925de1ccb59&t=tryorthokey06-20&tracking_id=tryorthokey06-20"
                          width="728"
                          height="90"
                          scrolling="no"
                          border="0"
                          marginWidth="0"
                          style={{ border: "none" }}
                          frameBorder="0"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="pimpmykeyboard" className="section-container ">
              <div>
                <div className="card ele-2">
                  <div className="px-5 py-5">
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <h2 className="font-weight-bold text-primary">
                          <a href="http://pimpmykeyboard.com?afmc=5w&utm_campaign=5w&utm_source=leaddyno&utm_medium=affiliate">
                            Pimp My Keyboard
                          </a>{" "}
                          Keycaps
                        </h2>
                        <p>
                          Pimp My Keyboard has a lot of options to choose from,
                          though on some you might need to buy alphas and the
                          ortho modifiers seperately. The sets in the table
                          below are just a handful of the sets they offer.
                        </p>
                        <p>
                          Click the website button here to view a full list of
                          sets that offer an ortho option on Pimp My Keyboard:
                        </p>
                        <a
                          href="https://pimpmykeyboard.com/all-products/keycaps/?search_query=&page=1&limit=75&sort=bestselling&Board=Ortho&category=33&is_category_page=1&afmc=5w&utm_campaign=5w&utm_source=leaddyno&utm_medium=affiliate"
                          className="btn btn-secondary mb-2"
                        >
                          Pimp My Keyboard Website
                        </a>

                        <Table
                          responsive
                          striped
                          bordered
                          hover
                          className="mt-3"
                        >
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Profile</th>
                              <th>Image</th>
                              <th>Link</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>SA-P Snow Cap Keyset</td>
                              <td>SA</td>
                              <td>
                                <a href="https://pimpmykeyboard.com/sa-p-snow-cap-keyset-original/?afmc=5w&utm_campaign=5w&utm_source=leaddyno&utm_medium=affiliate">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="https://cdn10.bigcommerce.com/s-ktpi93fl/products/267/images/2091/Snowcap_Hero_Image__18586.1572026288.1280.1280.png?c=2"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://pimpmykeyboard.com/sa-p-snow-cap-keyset-original/?afmc=5w&utm_campaign=5w&utm_source=leaddyno&utm_medium=affiliate">
                                  View Now
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>SA Ice Cap Keyset</td>
                              <td>SA</td>
                              <td>
                                <a
                                  href="https://pimpmykeyboard.com/sa-ice-cap-keyset-sublimated/?afmc=5w&utm_campaign=5w&utm_source=leaddyno&utm_medium=affiliate
"
                                >
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="https://cdn10.bigcommerce.com/s-ktpi93fl/products/216/images/819/icecapIMG_8769a__01060.1596325746.800.600.JPG?c=2"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://pimpmykeyboard.com/sa-ice-cap-keyset-sublimated/?afmc=5w&utm_campaign=5w&utm_source=leaddyno&utm_medium=affiliate">
                                  View Now
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>DSA Beyond Set</td>
                              <td>DSA</td>
                              <td>
                                <a href="https://pimpmykeyboard.com/dsa-beyond-keyset-sublimated/?afmc=5w&utm_campaign=5w&utm_source=leaddyno&utm_medium=affiliate">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="https://cdn10.bigcommerce.com/s-ktpi93fl/products/265/images/1393/IMGP0273__38757.1578462202.1280.1280.jpg?c=2"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://pimpmykeyboard.com/dsa-beyond-keyset-sublimated/?afmc=5w&utm_campaign=5w&utm_source=leaddyno&utm_medium=affiliate">
                                  View Now
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>DSA Quartz Keyset</td>
                              <td>DSA</td>
                              <td>
                                <a href="https://pimpmykeyboard.com/dsa-quartz-keyset-sublimated/?afmc=5w&utm_campaign=5w&utm_source=leaddyno&utm_medium=affiliate">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="https://cdn10.bigcommerce.com/s-ktpi93fl/products/165/images/1131/IMG_6988__60647.1513284077.800.600.png?c=2"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://pimpmykeyboard.com/dsa-quartz-keyset-sublimated/?afmc=5w&utm_campaign=5w&utm_source=leaddyno&utm_medium=affiliate">
                                  View Now
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>DSA Ferrous Keyset</td>
                              <td>DSA</td>
                              <td>
                                <a
                                  href="https://pimpmykeyboard.com/dsa-ferrous-keyset-sublimated/?afmc=5w&utm_campaign=5w&utm_source=leaddyno&utm_medium=affiliate
"
                                >
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="https://cdn10.bigcommerce.com/s-ktpi93fl/products/270/images/1551/IMGP1651__69003.1548357540.1280.1280.jpg?c=2"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://pimpmykeyboard.com/dsa-ferrous-keyset-sublimated/?afmc=5w&utm_campaign=5w&utm_source=leaddyno&utm_medium=affiliate">
                                  View Now
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>DCS PBT Blank Keyset</td>
                              <td>DCS</td>
                              <td>
                                <a href="https://pimpmykeyboard.com/dcs-pbt-blank-keysets/?afmc=5w&utm_campaign=5w&utm_source=leaddyno&utm_medium=affiliate">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="https://cdn10.bigcommerce.com/s-ktpi93fl/products/283/images/1866/Planck_1__63576.1565895985.800.600.jpg?c=2"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://pimpmykeyboard.com/dcs-pbt-blank-keysets/?afmc=5w&utm_campaign=5w&utm_source=leaddyno&utm_medium=affiliate">
                                  View Now
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="kbdfans" className="section-container ">
              <div className="">
                <div className="card ele-2">
                  <div className="px-5 py-5">
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <h2 className="font-weight-bold text-primary">
                          <a href="https://kbdfans.com/r?id=rq0n5d">KBDfans</a>
                        </h2>
                        <p>
                          KBDfans offers a plethora of keyboards and accessories
                          including the ortholinear keyboard the NIU40.
                        </p>
                        <a
                          href="https://kbdfans.com/r?id=rq0n5d"
                          className="btn btn-primary mr-2 mb-2"
                        >
                          KBDfans Website
                        </a>

                        <Table
                          responsive
                          striped
                          bordered
                          hover
                          className="mt-3"
                        >
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Profile</th>
                              <th>Image</th>
                              <th>Link</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>R2 DA Profile 40V2</td>
                              <td>DA</td>
                              <td>
                                <a href="https://kbdfans.com/r?id=a584gd">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="https://cdn.shopify.com/s/files/1/1473/3902/products/2_ed9114a6-6036-4f11-ba06-0f208b534be6_900x.png?v=1584436755"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://kbdfans.com/r?id=a584gd">
                                  View Now
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>R2 Enjoypbt Grayscale Keycaps</td>
                              <td>Cherry</td>
                              <td>
                                <a href="https://kbdfans.com/r?id=81qd7t">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="https://cdn.shopify.com/s/files/1/1473/3902/products/40_e627bde9-3581-4678-8569-f569b64a5e4a_900x.jpg?v=1649383848"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://kbdfans.com/r?id=81qd7t">
                                  View now
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="kono" className="section-container ">
              <div className="">
                <div className="card ele-2">
                  <div className="px-5 py-5">
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <h2 className="font-weight-bold text-primary">
                          <a href="https://sovrn.co/rgjoybp">Kono</a>
                        </h2>
                        <p>
                          Kono offers many of original keyboards, keycaps, and
                          much more. They offer a handful of ortho kits. Some of
                          these sets you may need to buy the alpha kit and the
                          ortho modifers together.
                        </p>
                        <a
                          href="https://sovrn.co/rgjoybp"
                          className="btn btn-primary mr-2 mb-2"
                        >
                          Kono Website
                        </a>

                        <Table
                          responsive
                          striped
                          bordered
                          hover
                          className="mt-3"
                        >
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Profile</th>
                              <th>Image</th>
                              <th>Link</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>SA Granite</td>
                              <td>SA</td>
                              <td>
                                <a href="https://sovrn.co/sb7810p">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="/sa-granite.jpg"
                                    alt="SA Granite Ortho Keycaps"
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://kbdfans.com/r?id=a584gd">
                                  View Now
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>SA Magica</td>
                              <td>SA</td>
                              <td>
                                <a href="https://sovrn.co/1oajv87">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="/sa-magica.png"
                                    alt="SA Magica Ortho Keycaps"
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://sovrn.co/1oajv87">View Now</a>
                              </td>
                            </tr>
                            <tr>
                              <td>SA Espresso</td>
                              <td>SA</td>
                              <td>
                                <a href="https://sovrn.co/apxgs25">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="/sa-espresso.jpg"
                                    alt="SA Espresso Ortho Keycaps"
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://sovrn.co/apxgs25">View Now</a>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="amazon" className="section-container ">
              <div className="">
                <div className="card ele-2">
                  <div className="px-5 py-5">
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <h2 className="font-weight-bold text-primary">
                          Amazon Keycaps
                        </h2>
                        <p>
                          Assortment of ortholinear keycaps on Amazon, many of
                          which are from YMDK
                        </p>

                        <Table
                          responsive
                          striped
                          bordered
                          hover
                          className="mt-3"
                        >
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Profile</th>
                              <th>Image</th>
                              <th>Link</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>YMDK XDA Blank PBT Keycaps</td>
                              <td>XDA</td>
                              <td>
                                <a href="https://amzn.to/3DLbdwG">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="/keycaps/ymdk-dsa.jpg"
                                    alt="YMDK XDA Ortholinear Keycaps"
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://amzn.to/3DLbdwG">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>YMDK DSA Blank PBT Keycaps</td>
                              <td>DSA</td>
                              <td>
                                <a href="https://amzn.to/3jKH2xH">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="/keycaps/ymdk-dsa.jpg"
                                    alt="YMDK XDA Ortholinear Keycaps"
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://amzn.to/3jKH2xH">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>YMDK 75 Keys DSA PBT Keycaps</td>
                              <td>DSA</td>
                              <td>
                                <a href="https://amzn.to/3mWpj8h">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="/keycaps/ymdk-75.jpg"
                                    alt="YMDK 75 Keys Ortholinear"
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://amzn.to/3mWpj8h">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                YMDK Carbon Laser-Etched Top Print OEM Keycap
                              </td>
                              <td>OEM</td>
                              <td>
                                <a href="https://amzn.to/3DEKmCd">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="/keycaps/carbon.jpg"
                                    alt="YMDK Carbon Ortholinear"
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://amzn.to/3DEKmCd">Amazon</a>
                              </td>
                            </tr>
                          </tbody>
                        </Table>

                        <iframe
                          className="d-none d-lg-block d-xl-block"
                          src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=prime_up&banner=0B87032Z18DPFFYKJ0R2&f=ifr&linkID=a2273376931a60dcd42402249d38d81e&t=tryorthokey06-20&tracking_id=tryorthokey06-20"
                          width="728"
                          height="90"
                          scrolling="no"
                          border="0"
                          marginWidth="0"
                          style={{ border: "none" }}
                          frameBorder="0"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="split" className="section-container ">
              <div className="">
                <div className="card ele-2">
                  <div className="px-5 py-5">
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <h2 className="font-weight-bold text-primary">
                          Split Keycaps
                        </h2>
                        <p>
                          Keycap sets specifically for split ergonomic keyboards
                          with an ortholinear layout
                        </p>

                        <Table
                          responsive
                          striped
                          bordered
                          hover
                          className="mt-3"
                        >
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Profile</th>
                              <th>Image</th>
                              <th>Link</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>YMDK Keycaps Matcha Dye-Sub</td>
                              <td>ZDA</td>
                              <td>
                                <a href="https://amzn.to/3oE5R0V">
                                  <img
                                    src="/keycaps/ymdk-matcha.jpg"
                                    alt="YMDK Matcha Split Keycaps"
                                    style={{ maxWidth: "160px" }}
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://amzn.to/3oE5R0V">Amazon</a>
                              </td>
                            </tr>
                          </tbody>
                        </Table>

                        <iframe
                          className="d-none d-lg-block d-xl-block"
                          src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=prime_up&banner=0B87032Z18DPFFYKJ0R2&f=ifr&linkID=a2273376931a60dcd42402249d38d81e&t=tryorthokey06-20&tracking_id=tryorthokey06-20"
                          width="728"
                          height="90"
                          scrolling="no"
                          border="0"
                          marginWidth="0"
                          style={{ border: "none" }}
                          frameBorder="0"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="other" className="section-container ">
              <div className="">
                <div className="card ele-2">
                  <div className="px-5 py-5">
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <h2 className="font-weight-bold text-primary">Other</h2>
                        <p>
                          Here you will find a collection of sites that provide
                          some options for ortholinear keyboards like modifiers,
                          1u blanks and more.
                        </p>

                        <Table
                          responsive
                          striped
                          bordered
                          hover
                          className="mt-3"
                        >
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Profile</th>
                              <th>Image</th>
                              <th>Link</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>MBK Glow</td>
                              <td>Choc (low-profile)</td>
                              <td>
                                <a href="https://boardsource.xyz/store/610ae434e32a6c051281c3fd">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="https://boardsource.imgix.net/fbc5e6e5-7c95-4d71-9e20-95c88e5f8346.jpg"
                                    alt="MBK Glow"
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://boardsource.xyz/store/610ae434e32a6c051281c3fd">
                                  View Now
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>GMK N9 Ortholinear Add-on Kit</td>
                              <td>Cherry</td>
                              <td>
                                <a href="https://keeb.io/products/gmk-n9-ortholinear-add-on-kit">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="https://cdn.shopify.com/s/files/1/1851/5125/products/NJ3Hssh_1024x1024@2x.png?v=1591984903"
                                    alt="GMK N9 Ortholinear Add-On Kit"
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://keeb.io/products/gmk-n9-ortholinear-add-on-kit">
                                  View Now
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>Ergodox EZ Glow Keycaps</td>
                              <td>OEM</td>
                              <td>
                                <a href="https://ergodox-ez.com/collections/accessories/products/a-set-of-keycaps?variant=12940956270647">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="https://cdn.shopify.com/s/files/1/1152/3264/products/keycaps_1024x1024.jpg?v=1493390613"
                                    alt="Ergodox EZ Glow Keycaps"
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://ergodox-ez.com/collections/accessories/products/a-set-of-keycaps?variant=12940956270647">
                                  View Now
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>KPRepublic</td>
                              <td>
                                Most DSA Kits offer 1u key options,
                                <br />
                                Might need to add blanks to fill in modifiers
                              </td>
                              <td>
                                <a href="https://kprepublic.com/products/dsa-pbt-blank-light-grey-grey-keycaps-60-gh60-poker2-xd64-87-104-xd75-xd96-xd84-cosair-k70-razer-blackwidow-planck-jj40-jj50?_pos=8&_sid=cd25eba9b&_ss=r&variant=7310696939564">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="https://cdn.shopify.com/s/files/1/2711/4238/products/TIM_20180228031111.jpg?v=1569170154"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://kprepublic.com/products/dsa-pbt-blank-light-grey-grey-keycaps-60-gh60-poker2-xd64-87-104-xd75-xd96-xd84-cosair-k70-razer-blackwidow-planck-jj40-jj50?_pos=8&_sid=cd25eba9b&_ss=r&variant=7310696939564">
                                  View Now
                                </a>
                                <br />
                                <br />
                                <a href="https://a.marsello.com/l/613284530880c012c0798cf0">
                                  $2 Off Referral Link
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-4">
            <div className="section-container">
              <h3 className="font-weight-bold text-primary">Blog</h3>
              <div className="card">
                <div className="card-img-top">
                  <a
                    className="lead"
                    href="/posts/what-to-do-after-getting-an-ortholinear-keyboard"
                  >
                    <img
                      className="img-fluid mb-3"
                      src="/first-ortholinear-board.png"
                      alt="What to do after getting your first Ortholinear Keyboard"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <a
                    className="lead"
                    href="/posts/what-to-do-after-getting-an-ortholinear-keyboard"
                  >
                    What to do after getting your first Ortholinear Keyboard
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="card">
                <div className="card-img-top">
                  <a
                    className="lead"
                    href="/posts/budget-keycaps-for-your-ortho-keyboard"
                  >
                    <img
                      className="img-fluid mb-3"
                      src="/best-budget-keycaps-ortho-keyboard.png"
                      alt="Best Budget Keycaps for Your Ortho Keyboard"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <a
                    className="lead"
                    href="/posts/budget-keycaps-for-your-ortho-keyboard"
                  >
                    Best Budget Keycaps for Your Ortho Keyboard
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
