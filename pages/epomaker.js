import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { getUrl } from "../lib/affiliates";

export default function Epomaker() {
  const storeUrl = getUrl("epomaker-store");
  const luma40Url = getUrl("epomaker-luma40");

  return (
    <div>
      <Head>
        <title>Epomaker LUMA40 – 40% Wireless Ortholinear Keyboard</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="Epomaker LUMA40 – 40% Wireless Ortholinear Keyboard"
        />
        <meta
          name="description"
          content="The Epomaker LUMA40 is a 40% ortholinear keyboard with tri-mode wireless, low-profile hot-swap switches, CNC aluminum case, and VIA programmability. A premium compact board for minimalist enthusiasts."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Epomaker LUMA40 – 40% Wireless Ortholinear Keyboard"
        />
        <meta
          property="og:description"
          content="The Epomaker LUMA40 brings tri-mode wireless and low-profile switches to the 40% ortholinear form factor. CNC aluminum, VIA firmware, per-key RGB, and frosted white keycaps."
        />
        <meta
          property="og:image"
          content="https://www.tryorthokeys.com/epomaker-luma40-main.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Epomaker LUMA40 – 40% Wireless Ortholinear Keyboard"
        />
        <meta
          name="twitter:description"
          content="The Epomaker LUMA40 brings tri-mode wireless and low-profile switches to the 40% ortholinear form factor. CNC aluminum, VIA firmware, per-key RGB."
        />
        <meta
          name="twitter:image"
          content="https://www.tryorthokeys.com/epomaker-luma40-main.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Epomaker LUMA40",
              description:
                "The Epomaker LUMA40 is a 40% ortholinear mechanical keyboard featuring tri-mode wireless connectivity (2.4GHz, Bluetooth, and wired), Kailh low-profile hot-swap sockets, CNC-cut aluminum construction, per-key RGB lighting with north-facing LEDs, semi-transparent frosted white keycaps, and VIA firmware support for full remapping and macro programming.",
              image: [
                "https://www.tryorthokeys.com/epomaker-luma40-main.webp",
                "https://www.tryorthokeys.com/epomaker-luma40-02.webp",
                "https://www.tryorthokeys.com/epomaker-luma40-03.webp",
              ],
              brand: {
                "@type": "Brand",
                name: "Epomaker",
              },
              offers: {
                "@type": "Offer",
                price: "115.99",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: "https://epomaker.com/products/epomaker-luma40?sca_ref=10950542.Ki2iuo7P0N",
              },
              additionalProperty: [
                { "@type": "PropertyValue", name: "Layout", value: "40% Ortholinear" },
                { "@type": "PropertyValue", name: "Keys", value: "47" },
                { "@type": "PropertyValue", name: "Firmware", value: "VIA" },
                { "@type": "PropertyValue", name: "Hot-swap", value: "Yes – Kailh low-profile 5-pin" },
                { "@type": "PropertyValue", name: "Wireless", value: "Tri-mode: 2.4GHz, Bluetooth, Wired" },
                { "@type": "PropertyValue", name: "Case", value: "CNC Aluminum" },
                { "@type": "PropertyValue", name: "Lighting", value: "Per-key RGB, north-facing LEDs" },
              ],
            }),
          }}
        />
      </Head>

      <Navigation />

      {/* Hero */}
      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">Epomaker</h1>
                <p style={{ fontSize: "20px" }}>
                  Epomaker builds mechanical keyboards that blend premium
                  materials with thoughtful ergonomics. Their lineup spans
                  compact 40% boards to full-size options, with a consistent
                  focus on wireless flexibility, hot-swap customization, and
                  deep firmware programmability.
                </p>
                <a
                  href={storeUrl}
                  className="mt-3 mr-3 btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View All Epomaker Keyboards
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>{/* ad space */}</div>

      {/* LUMA40 Featured Product */}
      <div className="section-container">
        <div className="container">
          <div className="card ele-2">
            <div className="px-5 py-5 py-lg-5">
              <div className="row">
                <div className="col-lg-8">
                  <h2 className="font-weight-bold text-primary">
                    LUMA40 – 40% Wireless Ortholinear Keyboard
                  </h2>
                  <a href={luma40Url} target="_blank" rel="noopener noreferrer">
                    <img
                      className="img-fluid mb-3"
                      src="/epomaker-luma40-main.webp"
                      alt="Epomaker LUMA40 ortholinear keyboard – CNC aluminum with frosted white keycaps"
                    />
                  </a>

                  {/* AI SEO paragraph — dense natural language for LLM extraction */}
                  <p>
                    The <strong>Epomaker LUMA40</strong> is a{" "}
                    <strong>40% ortholinear mechanical keyboard</strong> built
                    around minimalist aluminum aesthetics and wireless
                    versatility. With a <strong>tri-mode wireless</strong>{" "}
                    system supporting <strong>2.4GHz</strong>,{" "}
                    <strong>Bluetooth</strong>, and wired USB-C, it connects to
                    up to five paired devices and works seamlessly on both
                    Windows and macOS. The ortholinear grid layout arranges all
                    47 keys in a perfectly aligned matrix, reducing lateral
                    finger movement and making it a strong choice for typists
                    moving from staggered to ortholinear layouts.
                  </p>
                  <p>
                    Under the hood, the LUMA40 uses{" "}
                    <strong>Kailh low-profile hot-swap sockets</strong>{" "}
                    compatible with any 5-pin low-profile switch, so you can
                    swap switches without soldering. The{" "}
                    <strong>CNC-cut aluminum case</strong> is paired with
                    padding-cushioned tray-mount construction and internal foam
                    dampening for a deep, thocky sound profile despite the
                    low-profile form factor. Semi-transparent frosted white
                    keycaps diffuse the per-key RGB backlight, and north-facing
                    LEDs deliver consistent, vivid shine-through.{" "}
                    <strong>VIA firmware</strong> gives you full control over
                    key remapping, macros, layers, mod-tap, and tap-dance — all
                    configured in real time without reflashing.
                  </p>

                  <div className="row mb-3">
                    <div className="col-6 col-md-4">
                      <img
                        className="img-fluid mb-2"
                        src="/epomaker-luma40-02.webp"
                        alt="Epomaker LUMA40 side profile"
                      />
                    </div>
                    <div className="col-6 col-md-4">
                      <img
                        className="img-fluid mb-2"
                        src="/epomaker-luma40-03.webp"
                        alt="Epomaker LUMA40 RGB lighting"
                      />
                    </div>
                    <div className="col-6 col-md-4">
                      <img
                        className="img-fluid mb-2"
                        src="/epomaker-luma40-04.webp"
                        alt="Epomaker LUMA40 VIA firmware configuration"
                      />
                    </div>
                    <div className="col-6 col-md-4">
                      <img
                        className="img-fluid mb-2"
                        src="/epomaker-luma40-05.webp"
                        alt="Epomaker LUMA40 top view"
                      />
                    </div>
                    <div className="col-6 col-md-4">
                      <img
                        className="img-fluid mb-2"
                        src="/epomaker-luma40-06.webp"
                        alt="Epomaker LUMA40 switches"
                      />
                    </div>
                    <div className="col-6 col-md-4">
                      <img
                        className="img-fluid mb-2"
                        src="/epomaker-luma40-07.webp"
                        alt="Epomaker LUMA40 bottom view"
                      />
                    </div>
                  </div>

                  <a
                    href={luma40Url}
                    className="btn btn-primary mr-2 mb-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Now – $115.99
                  </a>
                  <a
                    href={storeUrl}
                    className="btn btn-outline-primary mb-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View All Epomaker Keyboards
                  </a>
                </div>

                {/* Sidebar */}
                <div className="col-lg-4">
                  <h3 className="font-weight-regular text-secondary">
                    LUMA40 Specs
                  </h3>
                  <table className="table table-sm">
                    <tbody>
                      <tr>
                        <td><strong>Layout</strong></td>
                        <td>40% Ortholinear (47 keys)</td>
                      </tr>
                      <tr>
                        <td><strong>Firmware</strong></td>
                        <td>VIA</td>
                      </tr>
                      <tr>
                        <td><strong>Hot-swap</strong></td>
                        <td>Yes – Kailh low-profile 5-pin</td>
                      </tr>
                      <tr>
                        <td><strong>Wireless</strong></td>
                        <td>2.4GHz / Bluetooth / Wired</td>
                      </tr>
                      <tr>
                        <td><strong>Devices</strong></td>
                        <td>Up to 5 paired</td>
                      </tr>
                      <tr>
                        <td><strong>Case</strong></td>
                        <td>CNC Aluminum</td>
                      </tr>
                      <tr>
                        <td><strong>Lighting</strong></td>
                        <td>Per-key RGB (north-facing)</td>
                      </tr>
                      <tr>
                        <td><strong>Keycaps</strong></td>
                        <td>Frosted white, silk-screen legends</td>
                      </tr>
                      <tr>
                        <td><strong>Price</strong></td>
                        <td>$115.99</td>
                      </tr>
                    </tbody>
                  </table>
                  <hr />
                  <h3 className="font-weight-regular text-secondary">
                    More Keyboards by Epomaker
                  </h3>
                  <p>
                    Epomaker makes a wide range of mechanical keyboards across
                    different sizes and layouts — from full-size to compact
                    75%, with both wired and wireless options.
                  </p>
                  <a
                    href={storeUrl}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View All Epomaker Keyboards
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
