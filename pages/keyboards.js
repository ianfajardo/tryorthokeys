import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

var keyboards = [
  {
    name: "OLKB Planck",
    price: "$89 - $110",
    description:
      "The latest version of the Planck keyboard supports hot swappable switches, LEDs, a small speaker and even rotary encoders. There are several offerings for baseplates: EOTW (easy on the wallet), hi-pro and low-pro. These keyboards usually come in as a kit with some light assembly required.",
    image: "https://www.tryorthokeys.com/planck-2.jpg",
    buyNow:
      "https://drop.com/buy/planck-mechanical-keyboard?utm_source=linkshare&referer=T93XGG",
    learnMore: "/olkb",
  },
  {
    name: "OLKB Preonic",
    price: "$110 - $155",
    description:
      "The Preonic keyboard is the Planck's big brother with an extra row of keys for those really missing the number row or want more keys to customize. The newest version of the Preonic is almost identical the Planck in terms of features.",
    image: "https://www.tryorthokeys.com/preonic-1.jpg",
    buyNow: "https://amzn.to/3rhGRg0",
    learnMore: "/olkb",
  },
  {
    name: "Idobao x YMDK ID75",
    price: "$105",
    description:
      "The ID75 has a hotswappable PCB and connects via USB Type C with 75 keys. In addition, the case is CNC milled anodized aluminum with several color options including an acrylic bottom to allow the underglow led to shine through.",
    image: "https://www.tryorthokeys.com/id75.jpg",
    buyNow:
      "https://ymdkey.com/products/idobo-75-keys-ortholinear-layout-qmk-anodized-aluminum-case-plate-hot-swappable-hot-swap-type-c-pcb-mechanical-keyboard-kit?sca_ref=3163375.1C4wKHXQtf",
    learnMore: "/id75",
  },
  {
    name: "KPrepublic CSTC40",
    price: "$48.90",
    description:
      "The KPrepublic CSTC40 a 40% ortholinear layout similar to the Planck keyboard. It has a hot-swap pcb, rgb lighting, and more. A great budget Planck alternative. Configurable through VIA software.",
    image: "/cstc40.jpg",
    buyNow: "https://collabs.shop/f9rpy8",
    learnMore: "/kprepublic-cstc40",
  },
  {
    name: "KPrepublic DNA59",
    price: "$64.80",
    description:
      "The DNA59 is designed with a 2u spacebar and 58 1u keys referencing the Preonic layout. It has an acrylic case, hot-swap pcb, rgb lighting and more. A great budget Preonic alternative. It does not support VIA or QMK and uses their own software.",
    image: "/dna59.jpg",
    buyNow: "https://collabs.shop/ajjcnp",
    learnMore: "/kprepublic-dna59",
  },
  {
    name: "MechDIY 59",
    price: "$175",
    description:
      "The MechDIY 59-Key ortholinear keyboard has an acrylic case, hotswap PCB, RGB backlit, and is fully customizable through VIA software.",
    image: "https://www.tryorthokeys.com/mechdiy-59.jpg",
    buyNow:
      "https://mechdiy.com/products/59-key-rgb-backlit-hot-swappable-mechanical-keyboard-customized-planck-kit?ref=MvdrdiAA",
    learnMore: "/mechdiy-59",
  },
  {
    name: "Work Louder: Creator Board",
    price: "$249",
    description:
      "The Work Louder: Creator Board is geared towards creatives. The board features a original and unique modular design to attach different key layouts or knobs. It also comes with low-profile custom choc keycaps. The PCB is not hotswap, however.",
    image: "https://www.tryorthokeys.com/work-louder-creator-board.jpg",
    buyNow: "https://worklouder.cc/shop/",
    learnMore: "/worklouder",
  },
  {
    name: "KBDFans Solar Keyboard",
    price: "TBD",
    description:
      "KBDFans discontinued their NIU 40 but has created an interest page for a new ortholinear kit called the Solar. From the specs, it will have 50 keys, hotswap PCB, aluminium case, gasket mount, replaceable OLED and RGB modules, and 4 knobs.",
    image:
      "https://www.tryorthokeys.com/kbdfans-solar-keyboard-kit-ortholinear.png",
    buyNow: "https://kbdfans.com/r?id=be1aik",
    learnMore: "/posts/kbdfans-solar-keyboard-kit-ortholinear",
  },
  {
    name: "Gizmo Engineering GK6",
    price: "$329",
    description:
      "The Gizmo Engineering GK6 is a 50% keyboard editable with QMK firmware, hot-swap PCB, multiple bottom-row layouts, and aluminum case with ceramic coating.",
    image: "https://www.tryorthokeys.com/gk6.webp",
    buyNow: "https://sovrn.co/1iddf86",
    learnMore: "/gizmo-engineering-gk6",
  },
  {
    name: "Kinesis Advantage2",
    price: "$339",
    description:
      "The Kenesis Advantage 2 is a an ergonomic split keyboard with orthogonal layout, Cherry MX Brown switches, 20 degrees of tenting, integrated palm supports, and more.",
    image: "/kinesis-advantage2.jpg",
    buyNow: "https://amzn.to/3CsZySE",
    learnMore: "/kinesis",
  },
];

export default function Keyboards() {
  return (
    <div>
      <Head>
        <title>
          Try Ortho Keys | Ortholinear Keyboards Ortho Keyboards OLKB Planck
          Preonic Ergodox NIU40 Split Ortholinear Keyboard
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="Try Ortho Keys | Ortholinear Keyboards Ortho Keyboards OLKB Planck Preonic Ergodox NIU40 Split Ortholinear Keyboard"
        />
        <meta
          name="description"
          content="There are several different companies that offer ortholinear keyboards.  OLKB, KBDFans and more sell keyboard such as the Preonic, Planck, NUI40 and Split."
        />
        <meta
          property="og:image"
          content="https://www.tryorthokeys.com/plank-preonic.jpg"
        />
      </Head>

      <Navigation />

      <div className="section-container text-white keyboards-jumbo">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">
                  Ortholinear keyboards{" "}
                </h1>
                <p className="lead">
                  There are a plethora of keyboards to choose from and below are
                  our recommendations on getting started. It can be a fun DIY
                  project to assemble your own ortho keyboard, add your own
                  switches, and program your own keymappings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="keyboard-section">
        <div className="row">
          {keyboards.map((keyboard, index) => (
            <div id={index} className="col-lg-3">
              <div className="keyboard-card">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={keyboard.image}
                    alt={keyboard.name}
                  />
                  <div className="card-body">
                    <h2 className="card-title">{keyboard.name}</h2>
                    <p className="card-text">{keyboard.description}</p>
                    <a href={keyboard.buyNow} className="btn btn-primary mr-3">
                      Buy Now
                    </a>
                    <a
                      href={keyboard.learnMore}
                      className="btn btn-secondary mr-3"
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="card-footer text-muted">
                    <strong>Price:</strong> {keyboard.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-container" id="keycaps">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-12">
              <h2>Keycaps</h2>
              <p>
                Finally picked out your ortholinear keyboard? You'll need some
                keycaps! Read our articles on the best keycaps you can get for
                your ortholienar or see our page on ortholinear specific keycap
                sets <a href="/keycaps">available now</a>.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg">
              <div className="mb-5">
                <div className="card">
                  <div className="card-img-top">
                    <a href="/posts/the-best-budget-keycaps-for-mechanical-keyboard">
                      <img
                        className="img-fluid mb-3"
                        src="/the-best-budget-keycaps-for-mechanical-keyboard.png"
                        alt="The Best Budget Keycaps For Your Mechanical Keyboard "
                      />
                    </a>
                  </div>
                  <div className="card-body">
                    <a href="/posts/the-best-budget-keycaps-for-mechanical-keyboard">
                      The Best Budget Keycaps For Your Mechanical Keyboard{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="mb-5">
                <div className="card">
                  <div className="card-img-top">
                    <a href="/posts/budget-ymdk-keycaps-ortholinear-keyboards">
                      <img
                        className="img-fluid mb-3"
                        src="/budget-ymdk-keycaps-amazon.jpg"
                        alt="Budget YMDK Keycaps for your Ortholinear Keyboards Available on Amazon"
                      />
                    </a>
                  </div>
                  <div className="card-body">
                    <a href="/posts/budget-ymdk-keycaps-ortholinear-keyboards">
                      Budget YMDK Keycaps for your Ortholinear Keyboards
                      Available on Amazon
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="mb-5">
                <div className="card">
                  <div className="card-img-top">
                    <a href="/posts/mt3-keycaps-for-ortholinear-keyboards">
                      <img
                        className="img-fluid mb-3"
                        src="/mt3-keycaps.jpg"
                        alt="MT3 Profile Keycaps for your Ortholinear Keyboard"
                      />
                    </a>
                  </div>
                  <div className="card-body">
                    <a href="/posts/mt3-keycaps-for-ortholinear-keyboards">
                      MT3 Profile Keycaps for your Ortholinear Keyboard
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="mb-5">
                <div className="card">
                  <div className="card-img-top">
                    <a href="/posts/best-keycaps-on-drop-for-planck-preonic">
                      <img
                        className="img-fluid mb-3"
                        src="/best-keycaps-blog.png"
                        alt="Best Keycaps on Drop for your Planck or Preonic"
                      />
                    </a>
                  </div>
                  <div className="card-body">
                    <a href="/posts/best-keycaps-on-drop-for-planck-preonic">
                      Best Keycaps on Drop for your Planck or Preonic
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="mb-5">
                <div className="card">
                  <div className="card-img-top">
                    <a href="/posts/budget-keycaps-for-your-ortho-keyboard">
                      <img
                        className="img-fluid mb-3"
                        src="/best-budget-keycaps-ortho-keyboard.png"
                        alt="Best Budget Keycaps for Your Ortho Keyboard"
                      />
                    </a>
                  </div>
                  <div className="card-body">
                    <a href="/posts/budget-keycaps-for-your-ortho-keyboard">
                      Best Budget Keycaps for Your Ortho Keyboard
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <a className="btn btn-primary mr-3" href="/keycaps">
                See Our Keycap List
              </a>
              <a className="btn btn-secondary" href="/posts">
                Read Our Blog
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
