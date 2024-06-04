import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function ymdkair40() {
  return (
    <div>
      <Head>
        <title>YMDK Air40: 40% Ortholinear Keyboard RGB VIA</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="YMDK Air40: 40% Ortholinear Keyboard RGB VIA  | Ortho Keyboard"
        />
        <meta
          name="description"
          content="
          Discover the YMD-40% Air40 Aluminum Kit, a compact and customizable keyboard kit featuring CNC anodized aluminum case, hotswap RGB PCB, and a variety of switch options. Perfect for enhancing your typing experience."
        />
        <meta
          property="og:image"
          content="https://www.tryorthokeys.com/air40.jpg"
        />
      </Head>

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">YMDK Air40</h1>
                <p style={{ fontSize: "20px" }}>
                  Build your own compact keyboard with the YMDK-40% Air40
                  Aluminum/Wood Kits. Includes CNC anodized aluminum case, RGB
                  backlit hotswap PCB, and multiple switch options like Gateron,
                  Kailh, and JWK. Customizable layout and easy assembly. Order
                  now!
                </p>
                <a
                  href="https://ymdkey.com/collections/40-mini-diy?sca_ref=3163375.1C4wKHXQtf"
                  className="mt-3 btn btn-primary"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container ">
        <div className="container">
          <div className="card ele-2">
            <div className="px-5 py-5 py-lg-5">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h2 className="font-weight-bold text-primary">YMDK Air40</h2>
                  <p style={{ fontSize: "20px" }}>
                    The YMDK Air40 offers a compact, orthogonal layout in a
                    235mm x 84mm CNC anodized aluminum case, providing a sleek
                    and durable build. The kit includes a north-facing RGB
                    backlit and underglow hotswap PCB, compatible with VIA for
                    easy keymapping. <br />
                    <br />
                    The anodized aluminum plate supports three layouts, and the
                    design eliminates the need for stabilizers, resulting in a
                    smooth tactile feel. The PCB supports multiple layouts for
                    customization, and users can choose from a wide range of
                    switches, including Gateron, Kailh, and JWK, to tailor the
                    keyboard to their preferences.
                  </p>
                  <a
                    href="https://ymdkey.com/collections/40-mini-diy?sca_ref=3163375.1C4wKHXQtf"
                    className="btn btn-primary mr-2"
                  >
                    Buy Now
                  </a>
                  <a href="https://caniusevia.com/" className="btn btn-link">
                    VIA Download
                  </a>
                </div>
                <div className="col-lg-6">
                  <img
                    src="/air40.jpg"
                    alt="YMDK Air40 Keyboard Ortho Orthlinear"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card ele-2 p-3 mt-5">
                <a href="https://ymdkey.com/products/ymd-walnut-wood-case-air40-rgb-hot-swap-cute-40-mechanical-keyboard-assembled-qmk-via-type-c-pcb-cnc-black-plate?variant=40612560502845&sca_ref=3163375.1C4wKHXQtf">
                  <h3 className="font-weight-bold text-primary">
                    YMDK Air40 Wood Case kit
                  </h3>
                  <img src="air40wood.webp" alt="" className="img-fluid" />
                  <button className="btn btn-primary mt-3">Buy Now</button>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card ele-2 p-3 mt-5">
                <a href="https://ymdkey.com/products/air40-rgb-hot-swap-cute-40-mechanical-keyboard-assembled-qmk-via-type-c-pcb-cnc-case-plate-kit?variant=39442979586109&sca_ref=3163375.1C4wKHXQtf">
                  <h3 className="font-weight-bold text-primary">
                    YMDK Air40 Aluminum Case kit
                  </h3>
                  <img src="air40.webp" alt="" className="img-fluid" />
                  <button className="btn btn-primary mt-3">Buy Now</button>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card ele-2 p-3 mt-5">
                <a href="https://ymdkey.com/products/air40-rgb-hot-swap-cute-40-mechanical-keyboard-assembled-qmk-via-type-c-pcb-cnc-case-plate-kit?variant=39442979586109&sca_ref=3163375.1C4wKHXQtf">
                  <h3 className="font-weight-bold text-primary">
                    YMDK Air40 Full Kit with keycaps
                  </h3>
                  <img src="air40kit.webp" alt="" className="img-fluid" />
                  <button className="btn btn-primary mt-3">Buy Now</button>
                </a>
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
                  src="https://www.youtube.com/embed/o2OmrkNeRVY"
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
