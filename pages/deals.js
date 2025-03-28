import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Table from "react-bootstrap/Table";
import SEOhead from "../components/SEOhead";

export const meta = {
  title: "Keyboard Deals and Discounts | mechanical keyboard coupons",
  metatitle:
    "Keyboard Deals and Discounts | mechanical keyboard coupons | ortholinear keyboard deals",
  description:
    "Here are a list of special mechanical keyboard discounts and coupons. This page is periodically updated with deals for mechanical and ortholinear keyboards.",
  image: "/tryorthokeys.jpg",
  slug: "/deals",
};

export default function Keycaps() {
  return (
    <div>
      <SEOhead meta={meta} />

      <Navigation />

      <div id="header" className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">Keyboard Deals</h1>
                <h2 className="text-primary font-weight-light">
                  Mechanical keyboard discounts and coupons
                </h2>
                <p style={{ fontSize: "20px" }}>
                  Our affiliates and partnerships have given us discounts on
                  products that you can take advantage of.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  <img className="img-fluid" src="/cstc40.jpg" alt="CSTC40" />
                  <p>
                    The KPrepublic CSTC40 a 40% ortholinear layout similar to
                    the Planck keyboard. It has a hot-swap pcb, rgb lighting,
                    and more. A great budget Planck alternative. Configurable
                    through VIA software.
                  </p>
                  <a
                    href="https://www.tryorthokeys.com/kprepublic-cstc40"
                    className="btn btn-secondary mt-3"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-8">
            <div id="FKcaps" className="section-container ">
              <div>
                <div className="card ele-2 mb-4 bg-primary">
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
                <div className="card ele-2">
                  <div className="px-5 py-5">
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <h2 className="font-weight-bold text-primary">
                          Discount Links
                        </h2>

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
                              <th>Discount</th>
                              <th>Link</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>KBDcraft</td>
                              <td>
                                <strong>5% off</strong> your entire order! Use code at checkout:{" "}
                                <strong>tryorthokeys</strong><br/><br/>
                                <strong>$20 off</strong> orders of over $99. Use code at checkout:{" "}
                                <strong>GROW20</strong><br/><br/>
                                <strong>$40 off</strong> orders of over $199. Use code at checkout:{" "}
                                <strong>GROW40</strong>
                              </td>
                              <td>
                                <a href="https://shln.top/ESlV1ACH">Link</a>
                              </td>
                            </tr>
                            <tr>
                              <td>KPrepublic</td>
                              <td>
                                $5 off, $15 minimum purchase. Once per customer.
                                Use code at checkout:{" "}
                                <strong>TRY_ORTHO_KEYS</strong>
                              </td>
                              <td>
                                <a href="https://kprepublic.com/try_ortho_keys">
                                  Link
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>Drop</td>
                              <td>
                                Get $10 off your first order on Drop by signing
                                up with our link
                              </td>
                              <td>
                                <a href="https://drop.com/?referer=T93XGG">
                                  Link
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>Akko Spring Coupon 15% Off</td>
                              <td>
                                Use coupon code <strong>spring</strong> at checkout to get 15% off.
                              </td>
                              <td>
                                <a href="https://en.akkogear.com?ref=29468">
                                  Link
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>DROP Keyboard Club</td>
                              <td>
                                Get monthly discounts that can save up to $100
                                on mechanical keyboards. Get $30 or more coupons
                                every month!
                              </td>
                              <td>
                                <a href="https://drop.com/keyboardclub/non-member?referer=T93XGG">
                                  Link
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>FKcaps</td>
                              <td>
                                Get 10% off off custom keycap sets that you can
                                design youself with custom fonts and icons.
                              </td>
                              <td>
                                <a href="https://fkcaps.com/custom?a=tryorthokeys">
                                  Link
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>KBDFans</td>
                              <td>
                                $5 off orders over $65 coupon code:{" "}
                                <strong>ILOVEKBDFANS</strong>
                              </td>
                              <td>
                                <a href="https://kbdfans.com/r?id=rq0n5d">
                                  Link
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </Table>

                        <p>
                          <small>
                            *Try Ortho Keys is reader-supported. When you buy
                            through links on our site, we may earn an affiliate
                            commission.
                          </small>
                        </p>

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
