import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function Configuring() {
  return (
    <div>
      <Head>
        <title>Configuring your Planck or Preonic</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="Configuring your Planck or Preonic | QMK toolbox OLKB ortholinear keyboard ortho keyboard 40% keyboard kit Drop keycaps ortholinear keycaps qmk keyboard preonic keyboard qmk configurator"
        />
        <meta
          name="description"
          content="This guide will show you how to configure your OLKB Planck or Preonic Keyboard such as the QMK configurator and toolbox. "
        />
      </Head>

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">
                  {" "}
                  Configuring your Planck or Preonic
                </h1>
                <p style={{ fontSize: "20px" }}>
                  The QMK firmware makes it a lot easier to flash your keyboard
                  than ever before. Follow the steps below to change your
                  keymappings on your Planck or Preonic!
                </p>

                <a
                  href="https://drop.com/buy/planck-mechanical-keyboard?utm_source=linkshare&referer=T93XGG"
                  className="mt-3 mr-3 btn btn-primary"
                >
                  Buy on Drop
                </a>
                <a
                  className="mt-3 mr-3 btn btn-primary"
                  href="https://amzn.to/333pMu0"
                >
                  Buy on Amazon
                </a>
                <a
                  href="https://olkb.com/"
                  className="mt-3 mr-3 btn btn-outline-primary"
                >
                  Visit Website
                </a>
                <a href="/keycaps" className="mt-3 btn btn-outline-primary">
                  Ortho Keycaps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container ">
        <div className="container-fluid">
          <div className="row">
            <div className="d-none d-lg-block d-xl-block col-lg-2">
              <h3 className="font-weight-bold text-primary">Keyboards</h3>
              <div className="mt-3">
                <div className="card">
                  <div className="card-body">
                    <h3>Keyboard List</h3>
                    <img
                      className="img-fluid"
                      src="/niu40.webp"
                      alt="ortholinear keyboard"
                    />
                    <p>
                      See all the options of ortholinear keyboards that you can
                      purchase today.
                    </p>
                    <a href="/keyboards" className="btn btn-secondary mt-3">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-3">
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
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="card ele-2">
                <div className="px-5 py-5 py-lg-5">
                  <h2 className="font-weight-bold text-primary">
                    QMK Configurator & Toolbox
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    For a beginner, the easiest way to change your keymappings
                    for your Planck or Preonic is through the QMK configurator
                    and QMK Toolbox. You can use the interface in the
                    configurator to easily adjust the keymappings on either
                    keyboard. In addition, the toolbox will allow you to flash
                    your config to your keyboard or restore the original
                    keymappings if needed.
                  </p>

                  <h3>1. Create your Keymap File</h3>
                  <p>
                    You can set up your keymap file using the QMK Configuator
                    for either the <a href="">planck</a> or{" "}
                    <a href="">preonic</a>. Using the keyboard and layout
                    dropdowns you can choose the correct version matching your
                    keyboard. Adjust your keymapping by clicking on a key on the
                    visual representation of your keyboard and then on any of
                    the options below. When you're ready click{" "}
                    <strong>compile</strong>, wait a couple seconds, and click{" "}
                    <strong>firmware</strong> to download the .bin file that
                    you're going to flash to your keyboard.
                  </p>

                  <div className="my-3">
                    <a
                      href="https://config.qmk.fm/#/planck/rev6/LAYOUT_ortho_4x12"
                      className="btn btn-primary mr-2 mb-2"
                    >
                      Planck Rev6
                    </a>
                    <a
                      href="https://config.qmk.fm/#/preonic/rev3/LAYOUT_ortho_5x12"
                      className="btn btn-primary mb-2"
                    >
                      Preonic Rev3
                    </a>
                  </div>

                  <img
                    className="img-fluid py-3"
                    src="/qmk-configurator.png"
                    alt="QMK Configurator"
                  />

                  <h3>2. Download QMK Toolbox</h3>
                  <p>
                    Download the{" "}
                    <a href="https://github.com/qmk/qmk_toolbox/releases">
                      QMK Toolbox
                    </a>{" "}
                    application. This application with recognize your keyboard
                    once yout put it in DFU mode and you will use it to upload
                    the new keymap onto the keyboard.
                  </p>

                  <h3>3. Put Your Keyboard into DFU (Bootloader) Mode</h3>
                  <p>
                    Plug your keyboard into your computer and at press the RESET
                    button on the bottom of they keyboard. Your computer should
                    recognize the keyboard and should be ready for you to flash
                    the new keymap onto it.
                  </p>

                  <h3>4. Flash your keyboard</h3>
                  <p>
                    Open up{" "}
                    <a href="https://github.com/qmk/qmk_toolbox/releases">
                      QMK Toolbox
                    </a>{" "}
                    and your keyboard should be recognized by the application.
                    Under the local file dropdown, locate and click on the .bin
                    file you created in QMK Configuator. Click the{" "}
                    <strong>flash</strong> button to flash the file to your
                    keyboard. When the process is done, unplug your keyboard,
                    plug it back in, and enjoy your new keymapping!
                  </p>

                  <div className="mt-5">
                    <a
                      href="https://drop.com/buy/planck-mechanical-keyboard?utm_source=linkshare&referer=T93XGG"
                      className="btn btn-secondary mr-2 mb-2"
                    >
                      Buy Planck on Drop
                    </a>

                    <a
                      className="btn btn-secondary mr-2 mb-2"
                      href="https://amzn.to/333pMu0"
                    >
                      Buy Planck on Amazon
                    </a>

                    <br />
                    <br />

                    <a
                      href="https://drop.com/buy/preonic-mechanical-keyboard?utm_source=linkshare&referer=T93XGG"
                      className="btn btn-secondary mr-2 mb-2"
                    >
                      Buy Preonic on Drop
                    </a>

                    <a
                      className="btn btn-secondary mr-2 mb-2"
                      href="https://amzn.to/3xzTDbF"
                    >
                      Buy Preonic on Amazon
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <h3 className="font-weight-bold text-primary">Blog</h3>
              <div className="mt-3">
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
      </div>

      <div className="section-container ">
        <div className="container">
          <div className="card ele-2">
            <div className="px-5 py-5 py-lg-5">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <h2 className="font-weight-bold text-primary">Planck</h2>
                  <p style={{ fontSize: "20px" }}>
                    The latest version of the Planck keyboard supports hot
                    swappable switches, LEDs, a small speaker and even rotary
                    encoders. There are several offerings for baseplates: EOTW
                    (easy on the wallet), hi-pro and low-pro. These keyboards
                    usually come in as a kit with some light assembly required.
                  </p>
                  <a
                    href="https://olkb.com/collections/planck"
                    className="btn btn-primary mr-2 mb-2"
                  >
                    View on OLKB
                  </a>
                  <a
                    href="https://drop.com/buy/planck-mechanical-keyboard?utm_source=linkshare&referer=T93XGG"
                    className="btn btn-secondary mr-2 mb-2"
                  >
                    Buy on Drop
                  </a>

                  <a
                    className="btn btn-secondary mr-2 mb-2"
                    href="https://amzn.to/333pMu0"
                  >
                    Buy on Amazon
                  </a>

                  <a
                    href="https://qmk.fm/keyboards/planck/"
                    className="btn btn-link mb-2"
                  >
                    QMK Firmware
                  </a>
                </div>
                <div className="col-lg-7">
                  <img
                    className="img-fluid mb-2"
                    src="/planck-2.jpg"
                    alt="Planck Keyboard"
                  />
                </div>
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
                <div className="col-lg-7">
                  <img
                    className="img-fluid mb-2 mb-2"
                    src="/preonic-1.jpg"
                    alt="Preonic Keyboard"
                  />
                </div>
                <div className="col-lg-5">
                  <h2 className="font-weight-bold text-primary">Preonic</h2>
                  <p style={{ fontSize: "20px" }}>
                    The Preonic keyboard is the Planck's big brother with an
                    extra row of keys for those really missing the number row or
                    want more keys to customize. The newest version of the
                    Preonic is almost identical the Planck in terms of features.
                  </p>
                  <a
                    href="https://olkb.com/collections/planck"
                    className="btn btn-primary mr-2 mb-2"
                  >
                    View on OLKB
                  </a>
                  <a
                    href="https://drop.com/buy/preonic-mechanical-keyboard?utm_source=linkshare&referer=T93XGG"
                    className="btn btn-secondary mr-2 mb-2"
                  >
                    Buy on Drop
                  </a>
                  <a
                    className="btn btn-secondary mr-2 mb-2"
                    href="https://amzn.to/3xzTDbF"
                  >
                    Buy on Amazon
                  </a>
                  <a
                    href="https://github.com/qmk/qmk_firmware/tree/master/keyboards/preonic"
                    className="btn btn-link"
                  >
                    QMK Firmware
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
