import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function Olkb() {
  return (
    <div>
      <Head>
        <title>KBDcraft - Highly popular ortholinear keyboards</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="KBDcraft Keyboards – Modular LEGO-Inspired Mechanical Keys"
        />
        <meta
          name="description"
          content="Explore KBDcraft’s unique brick-built mechanical keyboards. Modular, customizable, and fully programmable with QMK/VIAL for ortholinear and ergonomic layouts."
        />
        <meta
          property="og:image"
          content="https://www.tryorthokeys.com/kbdcraft-israfel.webp"
        />
      </Head>

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">KBDcraft</h1>
                <p style={{ fontSize: "20px" }}>
                  Founded by designer Boyu, KBDcraft merges playful modularity
                  with functional craftsmanship. Each keyboard is not just
                  built—it’s assembled, inspired by both the tactile joy of LEGO
                  and the symbolic power of the “18 Angels” from Neon Genesis
                  Evangelion, blending art with cutting-edge design.
                </p>

                <a
                  href="https://kbdcraft.store/collections/keyboard?source_type=sales_plugin_af&slt=sales_plugin_af&referral_code=KFGP7S8BBX4B"
                  className="mt-3 mr-3 btn btn-primary"
                >
                  View KBDcraft Keyboards
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>{/* ad space */}</div>

      <div className="section-container ">
        <div className="container">
          <div className="card ele-2">
            <div className="px-5 py-5 py-lg-5">
              <div className="row">
                <div className="col-lg-8">
                  <h2 className="font-weight-bold text-primary">
                    Israfel – #7 Ergo-Split 50% Keyboard
                  </h2>
                  <a href="https://kbdcraft.store/products/israfel?source_type=sales_plugin_af&slt=sales_plugin_af&referral_code=KFGP7S8BBX4B">
                    <img
                      className="img-fluid mb-2"
                      src="/kbdcraft-israfel.webp"
                      alt="Planck Keyboard"
                    />
                  </a>
                  <p>
                    Israfel introduces a low-profile, 50% ortholinear split
                    layout wrapped in KBDcraft’s signature brick-built modular
                    design. This model features a hinged split structure,
                    adaptive gasket mount, and multi-angle ergonomic
                    adjustments—delivering an immersive blend of form, function,
                    and customization.
                  </p>
                  <p>
                    Drawing inspiration from Neon Genesis Evangelion’s Seventh
                    Angel, Israfel symbolizes duality and unity—folded into its
                    contrasting black-and-white colorways and independently
                    adjustable halves that operate in perfect synchrony.
                  </p>
                  <a
                    href="https://kbdcraft.store/products/israfel?source_type=sales_plugin_af&slt=sales_plugin_af&referral_code=KFGP7S8BBX4B"
                    className="btn btn-primary mr-2 mb-2"
                  >
                    Buy Now
                  </a>
                </div>
                <div className="col-lg-4">
                  <h3 className="font-weight-regular text-secondary">
                    Other Keyboards by KBDcraft
                  </h3>
                  <a
                    style={{ textDecoration: "underline" }}
                    href="https://kbdcraft.store/products/adam2.0?source_type=sales_plugin_af&slt=sales_plugin_af&referral_code=KFGP7S8BBX4B"
                  >
                    Adam X
                  </a>
                  <p>
                    KBDcraft’s inaugural 60% mechanical keyboard, featuring a
                    brick-built Lego-compatible case, gasket mount, and QMK/VIAL
                    support.
                  </p>
                  <hr />
                  <a
                    style={{ textDecoration: "underline" }}
                    href="https://kbdcraft.store/products/sachiel?source_type=sales_plugin_af&slt=sales_plugin_af&referral_code=KFGP7S8BBX4B"
                  >
                    Sachiel
                  </a>
                  <p>
                    This 85% TKL model features advanced modular brick
                    technology and oversized DSS keycaps (1.25×) for a dramatic
                    look and feel.
                  </p>
                  <hr />
                  <a
                    style={{ textDecoration: "underline" }}
                    href="https://kbdcraft.store/products/lilith?source_type=sales_plugin_af&slt=sales_plugin_af&referral_code=KFGP7S8BBX4B"
                  >
                    Kit Lilith Q
                  </a>
                  <p>
                    A transforming ergo 60% layout that can switch between 65%
                    and 75% formats, with embedded physical emoji keycaps.
                  </p>
                  <hr />
                  <a
                    href="https://kbdcraft.store/collections/keyboard?source_type=sales_plugin_af&slt=sales_plugin_af&referral_code=KFGP7S8BBX4B"
                    className="btn btn-primary"
                  >
                    View More Keyboards
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container" id="videos">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Videos</h2>
              <div className="usa-embed-container">
                <iframe
                  src="https://www.youtube.com/embed/foxQ05_b5i0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="usa-embed-container">
                <iframe
                  src="https://www.youtube.com/embed/gcpK5wprOGo"
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
