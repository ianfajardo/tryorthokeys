import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";

export default function Keycaps() {
  return (
    <div>
      <Head>
        <title>
          Try Ortho Keys | Ortho Keycaps Ortholinear Keycaps Ortholinear
          Keyboards Ortho Keyboards OLKB Planck Preonic Ergodox NIU40 Split
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="Ortholinear Keycap Set List | OLKB Planck Preonic NIU40 NIUmini ortho keyboard ortho keycaps budget keycaps Drop KBDfans Amazon keycaps"
        />
        <meta
          name="description"
          content="Here is a list of ortholinear keycaps availble for your ortho keyboard such as the OLKB Planck or Preonic. Ortho Keycaps can be an option along with the standard layouts for more common mechanical keyboards."
        />
        <meta property="og:image" content="/ortho-keycaps.png" />
        <meta name="twitter:image" content="/ortho-keycaps.png" />
        <meta property="og:type" content="website"/ >
      </Head>

      <Navigation />

      <div className="bg-secondary text-white section-container">
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
                  keyboards or have a ortholinear keycap option. This list will
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

      <div className="bg-primary">
        <div className="container">
          <Nav defaultActiveKey="/home" as="ul" className="py-2">
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
              <Nav.Link className="text-white" href="#amazon">
                Amazon
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>

      <div className="container-fluid">
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
                  <h3>NIU40 / NIU Mini</h3>
                  <img
                    className="img-fluid"
                    src="/niu40.webp"
                    alt="NIU 40 NIU Mini"
                  />
                  <p>
                    The NIU 40 / NIU Mini is a 40% keyboard similar to the
                    Planck ortholinear keyboard. You purchase them a DIY kit at{" "}
                    <a href="https://kbdfans.com/r?id=eft22v">KBDFans</a>. A bit
                    cheaper than the OLKB offerings, it offers similar
                    functionality and features.
                  </p>
                  <a href="/niu40" className="btn btn-secondary mt-3">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-8">
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
                          Drop offers keyboards, keycaps, audio peripherals on
                          Amazon and group buys on their websites.
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
                              <td>Planck Acute Keycaps</td>
                              <td>OEM</td>
                              <td>
                                <a
                                  href="https://www.amazon.com/Drop-Planck-Acute-Keycaps-Dye-subliminated/dp/B08LXB13L4?dchild=1&keywords=ortholinear+keycaps&link_code=qs&qid=1630610919&sr=8-8&linkCode=li2&tag=tryorthokey06-20&linkId=ace8a07328ec11bb4c16d4d24644d5cb&language=en_US&ref_=as_li_ss_il"
                                  target="_blank"
                                >
                                  <img
                                    border="0"
                                    src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08LXB13L4&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                                  />
                                </a>
                                <img
                                  src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li2&o=1&a=B08LXB13L4"
                                  width="1"
                                  height="1"
                                  border="0"
                                  alt=""
                                />
                              </td>
                              <td>
                                <a href="https://amzn.to/3yFMqWP">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>Preonic Acute Keycaps</td>
                              <td>OEM</td>
                              <td>
                                <a
                                  href="https://www.amazon.com/Drop-OLKB-Preonic-Acute-Keycaps/dp/B08L3X6MDM?dchild=1&keywords=ortholinear+keycaps&link_code=qs&qid=1630610919&sr=8-9&linkCode=li2&tag=tryorthokey06-20&linkId=bc2227bc2882f61b82ae7c9fa98d7a81&language=en_US&ref_=as_li_ss_il"
                                  target="_blank"
                                >
                                  <img
                                    border="0"
                                    src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08L3X6MDM&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                                  />
                                </a>
                                <img
                                  src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li2&o=1&a=B08L3X6MDM"
                                  width="1"
                                  height="1"
                                  border="0"
                                  alt=""
                                />
                              </td>
                              <td>
                                <a href="https://amzn.to/3jCLKx5">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>Black-on-White Keycap Set</td>
                              <td>MT3</td>
                              <td>
                                <a
                                  href="https://www.amazon.com/DROP-Hi-Profile-Doubleshot-Tenkeyless-Winkeyless/dp/B0961VB8LR?dchild=1&keywords=drop%2Bkeycaps&qid=1630602928&sr=8-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExQ0dBRTFPWEwxQUdEJmVuY3J5cHRlZElkPUEwMDI3NTcxMTE0RzQzRTBORjZXJmVuY3J5cHRlZEFkSWQ9QTA3NTgxNjYxRjA0T0c1NE1QRUpQJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1&linkCode=li2&tag=tryorthokey06-20&linkId=9c9b3574fa55add08b502d4336abf634&language=en_US&ref_=as_li_ss_il"
                                  target="_blank"
                                >
                                  <img
                                    border="0"
                                    src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0961VB8LR&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                                  />
                                </a>
                                <img
                                  src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li2&o=1&a=B0961VB8LR"
                                  width="1"
                                  height="1"
                                  border="0"
                                  alt=""
                                />
                              </td>
                              <td>
                                <a href="https://amzn.to/3zKJ6Lu">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>White-on-Black Keycap Set</td>
                              <td>MT3</td>
                              <td>
                                <a
                                  href="https://www.amazon.com/dp/B09624QSZF?_encoding=UTF8&th=1&linkCode=li2&tag=tryorthokey06-20&linkId=786ddda6e66836e6b8435c817a26a875&language=en_US&ref_=as_li_ss_il"
                                  target="_blank"
                                >
                                  <img
                                    border="0"
                                    src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09624QSZF&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                                  />
                                </a>
                                <img
                                  src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li2&o=1&a=B09624QSZF"
                                  width="1"
                                  height="1"
                                  border="0"
                                  alt=""
                                />
                              </td>
                              <td>
                                <a href="https://amzn.to/3BzUg69">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>Dasher Keycap Set</td>
                              <td>MT3</td>
                              <td>
                                <a
                                  href="https://www.amazon.com/DROP-Hi-Profile-Doubleshot-Ortholinear-Keyboards/dp/B08W2B1N8V?dchild=1&keywords=dasher+keycaps&qid=1630605241&sr=8-3&linkCode=li2&tag=tryorthokey06-20&linkId=c49eb0df9aad5c2f71a0ae9ef5f9767d&language=en_US&ref_=as_li_ss_il"
                                  target="_blank"
                                >
                                  <img
                                    border="0"
                                    src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08W2B1N8V&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                                  />
                                </a>
                                <img
                                  src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li2&o=1&a=B08W2B1N8V"
                                  width="1"
                                  height="1"
                                  border="0"
                                  alt=""
                                />
                              </td>
                              <td>
                                <a href="https://amzn.to/38AcCaN">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>MiTo Canvas Keycap Set</td>
                              <td>XDA</td>
                              <td>
                                <a
                                  href="https://www.amazon.com/DROP-Canvas-Keycap-Tenkeyless-Keyboards/dp/B081DDX77T?th=1&linkCode=li2&tag=tryorthokey06-20&linkId=b69e80572907fdaddfeace8aa097a9fe&language=en_US&ref_=as_li_ss_il"
                                  target="_blank"
                                >
                                  <img
                                    border="0"
                                    src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B081DDX77T&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                                  />
                                </a>
                                <img
                                  src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li2&o=1&a=B081DDX77T"
                                  width="1"
                                  height="1"
                                  border="0"
                                  alt=""
                                />
                              </td>
                              <td>
                                <a href="https://amzn.to/3t7UMoY">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>Matt3o /dev/tty Keycap Set</td>
                              <td>MT3</td>
                              <td>
                                <a
                                  href="https://www.amazon.com/Drop-Matt3o-Keycap-Full-Size-Keyboards/dp/B081DD7W11?dchild=1&keywords=drop%2Bkeycaps&qid=1630602928&sr=8-3&th=1&linkCode=li2&tag=tryorthokey06-20&linkId=c1cd433d5d5d52b6fc034f1f6d126cf5&language=en_US&ref_=as_li_ss_il"
                                  target="_blank"
                                >
                                  <img
                                    border="0"
                                    src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B081DD7W11&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                                  />
                                </a>
                                <img
                                  src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li2&o=1&a=B081DD7W11"
                                  width="1"
                                  height="1"
                                  border="0"
                                  alt=""
                                />
                              </td>
                              <td>
                                <a href="https://amzn.to/3jCBsgw">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>Matt3o Susuwatari Custom Keycap Set</td>
                              <td>MT3</td>
                              <td>
                                <a
                                  href="https://www.amazon.com/Susuwatari-Hi-Profile-Doubleshot-Ortholinear-MDX-33813-5/dp/B08HPLS7R8?dchild=1&keywords=ortho+keycaps&qid=1630602950&sr=8-3&linkCode=li2&tag=tryorthokey06-20&linkId=da13015602e1eb1e22ac9f51dcffbf08&language=en_US&ref_=as_li_ss_il"
                                  target="_blank"
                                >
                                  <img
                                    border="0"
                                    src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08HPLS7R8&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                                  />
                                </a>
                                <img
                                  src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li2&o=1&a=B08HPLS7R8"
                                  width="1"
                                  height="1"
                                  border="0"
                                  alt=""
                                />
                              </td>
                              <td>
                                <a href="https://amzn.to/38FBs96">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>Camillo Keycap Set</td>
                              <td>MT3</td>
                              <td>
                                <a
                                  href="https://www.amazon.com/dp/B08VKM4H1N?_encoding=UTF8&psc=1&linkCode=li2&tag=tryorthokey06-20&linkId=3d0a03c5256ddd8ef0b8824b5a2a60a8&language=en_US&ref_=as_li_ss_il"
                                  target="_blank"
                                >
                                  <img
                                    border="0"
                                    src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08VKM4H1N&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                                  />
                                </a>
                                <img
                                  src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li2&o=1&a=B08VKM4H1N"
                                  width="1"
                                  height="1"
                                  border="0"
                                  alt=""
                                />
                              </td>
                              <td>
                                <a href="https://amzn.to/3zEMeII">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>Jukebox Keycap Set</td>
                              <td>MT3</td>
                              <td>
                                <a
                                  href="https://www.amazon.com/DROP-Hi-Profile-Doubleshot-Ortholinear-Keyboards/dp/B08VL2S4LL?dchild=1&keywords=ortholinear+keycaps&link_code=qs&qid=1630610919&sr=8-15&linkCode=li2&tag=tryorthokey06-20&linkId=55208fe6257872e90904fdf1f454c190&language=en_US&ref_=as_li_ss_il"
                                  target="_blank"
                                >
                                  <img
                                    border="0"
                                    src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08VL2S4LL&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                                  />
                                </a>
                                <img
                                  src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li2&o=1&a=B08VL2S4LL"
                                  width="1"
                                  height="1"
                                  border="0"
                                  alt=""
                                />
                              </td>
                              <td>
                                <a href="https://amzn.to/3kLJL9m">Amazon</a>
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
                                    style={{ maxWidth: "160px;" }}
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
                                    style={{ maxWidth: "160px;" }}
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
                              <td>1u Blank Keycaps - 10pc</td>
                              <td>DSA</td>
                              <td>
                                <a href="https://kbdfans.com/r?id=84sm0h">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="https://cdn.shopify.com/s/files/1/1473/3902/products/23_bf5a5cb2-e25d-44e2-99d4-1b27ee84ec15_360x.jpg?v=1605064620"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://kbdfans.com/r?id=84sm0h">
                                  View Now
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>DSA 40% Dye-sub Keycaps Set</td>
                              <td>DSA</td>
                              <td>
                                <a href="https://kbdfans.com/r?id=pu6bri">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="https://cdn.shopify.com/s/files/1/1473/3902/products/1_ff791cf2-068e-43f1-b80f-44c8f0f3ad07_360x.jpg?v=1584436726"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://kbdfans.com/r?id=pu6bri">
                                  View Now
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>EPBT PBT Blank Ortholinaer Keycaps</td>
                              <td>Cherry</td>
                              <td>
                                <a href="https://kbdfans.com/r?id=2ea9io">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="https://cdn.shopify.com/s/files/1/1473/3902/products/819c3e31ba5f4d67d590ab80ffda528b_360x.jpg?v=1584437013"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://kbdfans.com/r?id=2ea9io">
                                  View now
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>Dye Subbed DSA Keycap Set</td>
                              <td>DSA</td>
                              <td>
                                <a href="https://kbdfans.com/r?id=ikcq6d">
                                  <img
                                    style={{ maxWidth: "160px" }}
                                    src="https://cdn.shopify.com/s/files/1/1473/3902/products/kit2_d6482b06-22d8-4b28-b31b-5abe002ab7ed_1080x.jpg?v=1584436696"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                <a href="https://kbdfans.com/r?id=ikcq6d">
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
                              <td>YMDK XDA Blanck PBT Keycaps</td>
                              <td>XDA</td>
                              <td>
                                <a
                                  href="https://www.amazon.com/Keycaps-Suitable-Ortholinear-Keyboard-Preonic/dp/B07TKX26HV?dchild=1&keywords=ortholinear+keycaps&link_code=qs&qid=1630609901&sr=8-5&linkCode=li2&tag=tryorthokey06-20&linkId=4f021261d0d7146d0df2f127c2c4af67&language=en_US&ref_=as_li_ss_il"
                                  target="_blank"
                                >
                                  <img
                                    border="0"
                                    src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07TKX26HV&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                                  />
                                </a>
                                <img
                                  src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li2&o=1&a=B07TKX26HV"
                                  width="1"
                                  height="1"
                                  border="0"
                                  alt=""
                                />
                              </td>
                              <td>
                                <a href="https://amzn.to/3DLbdwG">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>YMDK DSA Blank PBT Keycaps</td>
                              <td>DSA</td>
                              <td>
                                <a
                                  href="https://www.amazon.com/Keycaps-Suitable-Ortholinear-Keyboard-Preonic/dp/B07TLWX3TX?dchild=1&keywords=ortholinear%2Bkeycaps&link_code=qs&qid=1630609901&sr=8-5&th=1&linkCode=li2&tag=tryorthokey06-20&linkId=5a6c5c26aac0c76fed2e84896d46ee81&language=en_US&ref_=as_li_ss_il"
                                  target="_blank"
                                >
                                  <img
                                    border="0"
                                    src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07TLWX3TX&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                                  />
                                </a>
                                <img
                                  src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li2&o=1&a=B07TLWX3TX"
                                  width="1"
                                  height="1"
                                  border="0"
                                  alt=""
                                />
                              </td>
                              <td>
                                <a href="https://amzn.to/3jKH2xH">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>YMDK 75 Keys DSA PBT Keycaps</td>
                              <td>DSA</td>
                              <td>
                                <a
                                  href="https://www.amazon.com/Keycaps-Suitable-Ortholinear-Keyboard-Preonic/dp/B07QHRNRGR?ac_md=2-1-QmV0d2VlbiAkMzAgYW5kICQ1MA%3D%3D-ac_d_pm_pm_pm&cv_ct_cx=ortholinear+keycaps&dchild=1&keywords=ortholinear+keycaps&link_code=qs&pd_rd_i=B07QHRNRGR&pd_rd_r=1d433dc1-6a4c-43a3-b367-7cc9b5eb520d&pd_rd_w=sNF3C&pd_rd_wg=2uqjy&pf_rd_p=e7796530-105c-494b-a53a-3b9963e9350b&pf_rd_r=86NX29MMGMR2J9YPMPJ7&psc=1&qid=1630610350&sr=1-2-22d05c05-1231-4126-b7c4-3e7a9c0027d0&linkCode=li2&tag=tryorthokey06-20&linkId=116c8fe898ec38a19f172143757dc4fc&language=en_US&ref_=as_li_ss_il"
                                  target="_blank"
                                >
                                  <img
                                    border="0"
                                    src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07QHRNRGR&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                                  />
                                </a>
                                <img
                                  src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li2&o=1&a=B07QHRNRGR"
                                  width="1"
                                  height="1"
                                  border="0"
                                  alt=""
                                />
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
                                <a
                                  href="https://www.amazon.com/YMDK-Laser-Etched-Switches-Preonic-Keyboard/dp/B07JKTQJQ7?dchild=1&keywords=ortholinear%2Bkeycaps&link_code=qs&qid=1630610350&sr=8-11&th=1&linkCode=li2&tag=tryorthokey06-20&linkId=94c134335c25a04284dc79290943e13b&language=en_US&ref_=as_li_ss_il"
                                  target="_blank"
                                >
                                  <img
                                    border="0"
                                    src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07JKTQJQ7&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                                  />
                                </a>
                                <img
                                  src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li2&o=1&a=B07JKTQJQ7"
                                  width="1"
                                  height="1"
                                  border="0"
                                  alt=""
                                />
                              </td>
                              <td>
                                <a href="https://amzn.to/3DEKmCd">Amazon</a>
                              </td>
                            </tr>
                            <tr>
                              <td>NPKC Dye-Sub Top Print PBT Keycap</td>
                              <td>DSA</td>
                              <td>
                                <a
                                  href="https://www.amazon.com/Dye-Sub-Profile-Suitable-Switches-Keyboard/dp/B07RKFZM7H?dchild=1&keywords=ortholinear+keycaps&link_code=qs&qid=1630610350&sr=8-18&linkCode=li2&tag=tryorthokey06-20&linkId=8d2324e63f7862fe082e65370e2d3c33&language=en_US&ref_=as_li_ss_il"
                                  target="_blank"
                                >
                                  <img
                                    border="0"
                                    src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07RKFZM7H&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                                  />
                                </a>
                                <img
                                  src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li2&o=1&a=B07RKFZM7H"
                                  width="1"
                                  height="1"
                                  border="0"
                                  alt=""
                                />
                              </td>
                              <td>
                                <a href="https://amzn.to/3yFMqWP">Amazon</a>
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
