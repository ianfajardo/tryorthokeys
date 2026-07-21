import SEOhead from "../components/SEOhead";
import { defaultMeta } from "../lib/pageMeta";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import { getUrl } from "../lib/affiliates";

const splitKeyboards = [
  {
    slug: "zsa-voyager",
    name: "ZSA Voyager",
    price: "$365",
    layout: "Low-profile ortho split",
    keys: 52,
    firmware: "Oryx / ZSA Configurator",
    wireless: false,
    hotSwap: false,
    bestFor: "Travel + low-profile typing",
  },
  {
    slug: "zsa-moonlander",
    name: "ZSA Moonlander Mark I",
    price: "$365",
    layout: "Ergonomic split",
    keys: 72,
    firmware: "Oryx / QMK",
    wireless: false,
    hotSwap: true,
    bestFor: "Adjustable thumb cluster + tenting",
  },
  {
    slug: "moergo-glove80",
    name: "MoErgo Glove80",
    price: "$399+",
    layout: "Concave split (Dactyl-style)",
    keys: 80,
    firmware: "ZMK / QMK",
    wireless: true,
    hotSwap: true,
    bestFor: "Deep concave ergo + wireless",
  },
  {
    slug: "dygma-defy",
    name: "Dygma Defy",
    price: "$369+",
    layout: "Compact ortho split",
    keys: 60,
    firmware: "Bazecor",
    wireless: true,
    hotSwap: true,
    bestFor: "Premium build + wireless + hot-swap",
  },
  {
    slug: "kinesis-advantage360",
    name: "Kinesis Advantage 360",
    price: "$449",
    layout: "Contoured ergo split",
    keys: 76,
    firmware: "SmartSet / ZMK",
    wireless: false,
    hotSwap: false,
    bestFor: "Long-session ergonomics, Kinesis loyalists",
  },
  {
    slug: "kinesis-advantage2",
    name: "Kinesis Advantage 2",
    price: "$339",
    layout: "Contoured ergo (fixed split)",
    keys: 73,
    firmware: "On-board remap",
    wireless: false,
    hotSwap: false,
    bestFor: "Budget-friendly contoured ergo",
  },
  {
    slug: "keychron-q11",
    name: "Keychron Q11",
    price: "$219+",
    layout: "Alice-style split",
    keys: 81,
    firmware: "QMK / VIA",
    wireless: false,
    hotSwap: true,
    bestFor: "Affordable aluminum split with QMK",
  },
  {
    slug: "keychron-q15-max",
    name: "Keychron Q15 Max",
    price: "$199–$229",
    layout: "Alice-style split (wireless)",
    keys: 80,
    firmware: "QMK / Launcher",
    wireless: true,
    hotSwap: true,
    bestFor: "Wireless Alice-style with knobs",
  },
  {
    slug: "worklouder-xyz-r2",
    name: "Work Louder XYZ Work Board r2",
    price: "Pre-order",
    layout: "Alice split ortho 40%",
    keys: 50,
    firmware: "Proprietary",
    wireless: false,
    hotSwap: false,
    bestFor: "Creators + compact split",
  },
  {
    slug: "corne",
    name: "Corne (CRKBD)",
    price: "$80–$200 (DIY)",
    layout: "Low-profile ortho split",
    keys: 42,
    firmware: "QMK / VIA / ZMK",
    wireless: true,
    hotSwap: true,
    bestFor: "DIY enthusiasts, minimalists",
  },
  {
    slug: "sofle",
    name: "Sofle v2",
    price: "$120–$200 (DIY)",
    layout: "Ortho split with rotary",
    keys: 58,
    firmware: "QMK / VIA",
    wireless: false,
    hotSwap: true,
    bestFor: "DIY with encoders + OLEDs",
  },
  {
    slug: "lily58",
    name: "Lily58",
    price: "$100–$180 (DIY)",
    layout: "Ortho split",
    keys: 58,
    firmware: "QMK / VIA",
    wireless: false,
    hotSwap: true,
    bestFor: "DIY beginners, low cost",
  },
  {
    slug: "ergodox",
    name: "ErgoDox EZ",
    price: "$295+",
    layout: "Ergonomic split",
    keys: 76,
    firmware: "Oryx / QMK",
    wireless: false,
    hotSwap: false,
    bestFor: "Mature ergo split with deep thumb cluster",
  },
  {
    slug: "montsinger-rebound",
    name: "Montsinger Rebound",
    price: "Parts only",
    layout: "50% split ortho",
    keys: 50,
    firmware: "QMK",
    wireless: false,
    hotSwap: false,
    bestFor: "Niche 50% split for 60% cases",
  },
];

const splitFaqItems = [
  {
    question: "What is a split keyboard?",
    answer:
      "A split keyboard is divided into two separate halves connected by a cable or wireless link, allowing each hand to rest in a more natural position. This shoulder-width spacing reduces ulnar deviation and strain on the wrists during long typing sessions.",
  },
  {
    question: "What is the difference between a split keyboard and an ortholinear split keyboard?",
    answer:
      "All ortholinear split keyboards are split keyboards, but not all split keyboards are ortholinear. An ortholinear split keyboard combines two design ideas: the two halves of a split keyboard plus the grid (non-staggered) column layout of an ortholinear keyboard. Examples include the Corne, Sofle, Lily58, ZSA Voyager, and Dygma Defy.",
  },
  {
    question: "Are split keyboards better for your wrists?",
    answer:
      "For most people who type all day, yes. The two halves can be placed shoulder-width apart so your forearms point straight at the keyboard, which reduces ulnar deviation. Adding tenting (angling the inner edges up) further reduces forearm pronation. Studies and most ergonomic guidance recommend split designs for users with existing wrist or RSI concerns.",
  },
  {
    question: "What is the best split keyboard for beginners?",
    answer:
      "For a true beginner, the Keychron Q11 ($219) or Q15 Max are the easiest to recommend because they ship fully assembled, support QMK and VIA, and use a familiar Alice-style layout. If you want a true ortho split without DIY, the ZSA Voyager ($365) or Dygma Defy ($369) are the next step. DIY kits like the Corne and Lily58 are more affordable but require soldering or hot-swap socket installation.",
  },
  {
    question: "What is the best wireless split keyboard in 2026?",
    answer:
      "The MoErgo Glove80 (concave Dactyl-style, ZMK), Dygma Defy (compact ortho, Bazecor), and Keychron Q15 Max (Alice-style, QMK) are the strongest fully-assembled wireless options. For DIY, a Corne with ZMK firmware on nice!nano controllers gives you wireless on a budget.",
  },
  {
    question: "Are split keyboards hard to learn?",
    answer:
      "There's a learning curve of about 1–2 weeks for most typists. The biggest adjustment is column-staggered (ortho) layouts if you choose one; columns no longer offset row-to-row. Standard Alice-style splits like the Keychron Q11 keep the staggered layout and are much faster to adapt to. Most users return to their normal typing speed within a few weeks regardless of which split style they pick.",
  },
];

const splitStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Split Keyboards",
      url: `${defaultMeta.url}/split`,
      description:
        "Compare split keyboards and ortholinear split keyboards from Kinesis, ZSA, MoErgo, Dygma, Keychron, and the DIY community.",
      dateModified: "2026-05-11",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: splitKeyboards.map((kb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${defaultMeta.url}/split#${kb.slug}`,
          name: kb.name,
        })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: splitFaqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function Split() {
  return (
    <div>
      <SEOhead
        meta={{
          title: "Split Keyboards & Ortholinear Split Keyboards",
          description:
            "Compare the best split keyboards and ortholinear split keyboards in 2026: ZSA Voyager, Moonlander, MoErgo Glove80, Dygma Defy, Kinesis Advantage 360, Keychron Q11, Corne, Sofle, Lily58, and more.",
          image: `${defaultMeta.url}/montsinger.webp`,
          slug: "/split",
        }}
        keywords="split keyboards, ortholinear split keyboard, split ortholinear keyboard, ergonomic keyboard, Kinesis Advantage 360, ZSA Voyager, Moonlander, Glove80, Dygma Defy, Keychron Q11, Corne, Sofle, Lily58, ErgoDox"
        structuredData={splitStructuredData}
      />

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <p className="text-uppercase" style={{ letterSpacing: "0.1em", fontSize: "13px", opacity: 0.7 }}>
                  Updated May 11, 2026
                </p>
                <h1 className="display-4 font-weight-bolder">
                  Split Keyboards & Ortholinear Split Keyboards
                </h1>
                <p className="lead" style={{ fontSize: "20px" }}>
                  Split keyboards divide the typing surface into two halves so
                  each hand can rest in a natural shoulder-width position. The
                  best option for you depends on whether you want a true{" "}
                  <strong>ortholinear split keyboard</strong> (grid layout, no
                  staggered rows) or a more familiar Alice-style split. Below
                  is a comparison of the 14 most-recommended split keyboards in
                  2026, sorted from most popular to most niche.
                </p>
                <a href="#comparison" className="btn btn-light mt-3 mr-2">
                  Compare All Split Keyboards
                </a>
                <a href="#faq" className="btn btn-outline-light mt-3">
                  Split Keyboard FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary">
        <div className="container-lg">
          <Nav defaultActiveKey="/home" as="ul" className="py-2 flex-wrap">
            <Nav.Item as="li"><Nav.Link className="text-white" href="#comparison">Compare</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link className="text-white" href="#zsa-voyager">ZSA Voyager</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link className="text-white" href="#zsa-moonlander">Moonlander</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link className="text-white" href="#moergo-glove80">Glove80</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link className="text-white" href="#dygma-defy">Dygma Defy</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link className="text-white" href="#kinesis-advantage360">Kinesis 360</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link className="text-white" href="#keychron-q11">Keychron Q11</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link className="text-white" href="#corne">Corne</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link className="text-white" href="#sofle">Sofle / Lily58</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link className="text-white" href="#ergodox">ErgoDox</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link className="text-white" href="#faq">FAQ</Nav.Link></Nav.Item>
          </Nav>
        </div>
      </div>

      <div className="section-container" id="comparison">
        <div className="container-lg">
          <h2 className="font-weight-bold text-primary mb-3">
            Split Keyboard Comparison
          </h2>
          <p style={{ fontSize: "18px" }}>
            The table below is sorted by recommendation. Hot-swap and wireless
            columns reflect what ships standard (DIY boards depend on which
            kit version and controller you order).
          </p>
          <Table responsive striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>Keyboard</th>
                <th>Price</th>
                <th>Layout</th>
                <th>Keys</th>
                <th>Firmware</th>
                <th>Wireless</th>
                <th>Hot-swap</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              {splitKeyboards.map((kb) => (
                <tr key={kb.slug}>
                  <td>
                    <a href={`#${kb.slug}`}>
                      <strong>{kb.name}</strong>
                    </a>
                  </td>
                  <td>{kb.price}</td>
                  <td>{kb.layout}</td>
                  <td>{kb.keys}</td>
                  <td>{kb.firmware}</td>
                  <td>{kb.wireless ? "Yes" : "No"}</td>
                  <td>{kb.hotSwap ? "Yes" : "No"}</td>
                  <td>{kb.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p className="text-muted mt-2" style={{ fontSize: "14px" }}>
            Some outgoing product links may be affiliate links.
          </p>
        </div>
      </div>

      <div id="zsa-voyager" className="section-container">
        <div className="container-lg">
          <div className="card ele-2">
            <div className="px-5 py-5">
              <h2 className="font-weight-bold text-primary">ZSA Voyager</h2>
              <p style={{ fontSize: "18px" }}>
                ZSA's Voyager is a 52-key low-profile ortholinear split that
                strips the Moonlander down to its essentials. It uses Kailh
                Choc switches, has a magnetic carrying case, weighs under a
                pound, and is the closest thing to a purpose-built travel
                ortho split that exists today. Configured via the same Oryx
                tool that powers the Moonlander and ErgoDox EZ.
              </p>
              <a href="https://www.zsa.io/voyager" className="btn btn-primary mr-2">
                View on ZSA
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="zsa-moonlander" className="section-container">
        <div className="container-lg">
          <div className="card ele-2">
            <div className="px-5 py-5">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <h2 className="font-weight-bold text-primary">ZSA Moonlander Mark I</h2>
                  <p style={{ fontSize: "18px" }}>
                    The Moonlander is ZSA's flagship: a 72-key ortho split with
                    adjustable thumb clusters, integrated tenting legs, hot-swap
                    sockets, and a folding palm rest design. It's the spiritual
                    successor to the ErgoDox EZ and the most-recommended ortho
                    split for users who want serious adjustability without
                    going DIY.
                  </p>
                  <a href="https://www.zsa.io/moonlander" className="btn btn-primary mr-2">
                    View on ZSA
                  </a>
                  <a
                    href="https://configure.zsa.io/moonlander/layouts"
                    className="btn btn-link"
                  >
                    Oryx Configurator
                  </a>
                </div>
                <div className="col-lg-5">
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

      <div id="moergo-glove80" className="section-container">
        <div className="container-lg">
          <div className="card ele-2">
            <div className="px-5 py-5">
              <h2 className="font-weight-bold text-primary">MoErgo Glove80</h2>
              <p style={{ fontSize: "18px" }}>
                The Glove80 takes the Dactyl Manuform concept and turns it into
                a polished, fully-assembled product. Concave key wells follow
                the natural curl of the fingers, the case tents adjustably, and
                wireless connectivity is built in via ZMK firmware. At $399+,
                it's the most ergonomic split on this list — and most users
                say the learning curve is real, but worth it.
              </p>
              <a href="https://www.moergo.com/" className="btn btn-primary mr-2">
                View on MoErgo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="dygma-defy" className="section-container">
        <div className="container-lg">
          <div className="card ele-2">
            <div className="px-5 py-5">
              <h2 className="font-weight-bold text-primary">Dygma Defy</h2>
              <p style={{ fontSize: "18px" }}>
                The Defy is Dygma's compact 60-key ortho split with wireless,
                hot-swap, and a premium aluminum frame. It uses Bazecor (their
                in-house configurator) and has a clever thumb cluster layout
                with dedicated mod keys. Strong build quality and dedicated
                community support make it one of the cleanest premium splits
                you can buy fully assembled.
              </p>
              <a href="https://dygma.com/products/dygma-defy" className="btn btn-primary mr-2">
                View on Dygma
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="kinesis-advantage360" className="section-container">
        <div className="container-lg">
          <div className="card ele-2">
            <div className="px-5 py-5">
              <h2 className="font-weight-bold text-primary">Kinesis Advantage 360</h2>
              <p style={{ fontSize: "18px" }}>
                The 360 is Kinesis's modern split rework of their iconic
                Advantage line. Same deep concave key wells, integrated palm
                supports, and orthogonal columns — now with two physically
                separated halves connected by a cable (Pro version supports
                ZMK and wireless). Best long-session ergo on the market for
                people who already love the Advantage shape.
              </p>
              <a
                href="https://kinesis-ergo.com/keyboards/advantage360/"
                className="btn btn-primary mr-2"
              >
                View on Kinesis
              </a>
              <a href="/kinesis" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="kinesis" className="section-container">
        <div className="container-lg">
          <div className="card ele-2">
            <div className="px-5 py-5">
              <h2 className="font-weight-bold text-primary">Kinesis Advantage 2</h2>
              <p style={{ fontSize: "18px" }}>
                The Advantage 2 is the still-shipping predecessor to the 360.
                Same deep contoured key wells but in a single fixed-shape body
                instead of two separate halves. Cherry MX Brown switches by
                default, 20 degrees of tenting built in, and integrated palm
                supports. Great choice if you want the Kinesis shape at a
                lower price than the 360.
              </p>
              <a href={getUrl("kinesis-advantage2")} className="btn btn-primary mr-2">
                View on Amazon
              </a>
              <a href="/kinesis" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="keychron-q11" className="section-container">
        <div className="container-lg">
          <div className="card ele-2">
            <div className="px-5 py-5">
              <h2 className="font-weight-bold text-primary">Keychron Q11</h2>
              <p style={{ fontSize: "18px" }}>
                The Q11 is Keychron's wired Alice-style split with full QMK and
                VIA support, an aluminum case, hot-swap PCB, and an optional
                knob. At ~$220 fully assembled it's the most affordable way
                into a premium-feeling split keyboard.
              </p>
              <a
                href="https://www.keychron.com/products/keychron-q11-qmk-custom-mechanical-keyboard?ref=tryorthokeys"
                className="btn btn-primary mr-2"
              >
                View on Keychron
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="keychron-q15-max" className="section-container">
        <div className="container-lg">
          <div className="card ele-2">
            <div className="px-5 py-5">
              <h2 className="font-weight-bold text-primary">Keychron Q15 Max</h2>
              <p style={{ fontSize: "18px" }}>
                The wireless evolution of the Q11. Tri-mode connectivity, knobs,
                aluminum case, hot-swap, QMK support, and an Alice-inspired
                ortho-leaning layout. Currently the best price-to-feature
                wireless split if you don't need full ortho columns.
              </p>
              <a
                href="https://www.keychron.com/products/keychron-q15-max-qmk-wireless-custom-mechanical-keyboard?ref=tryorthokeys"
                className="btn btn-primary mr-2"
              >
                View on Keychron
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="worklouder-xyz-r2" className="section-container">
        <div className="container-lg">
          <div className="card ele-2">
            <div className="px-5 py-5">
              <h2 className="font-weight-bold text-primary">Work Louder XYZ Work Board r2</h2>
              <p style={{ fontSize: "18px" }}>
                Work Louder's compact 40% Alice-style split with magnetic
                tenting and a creator-focused layout. Currently listed as in
                production for April 2026 with pre-orders open.
              </p>
              <a href={getUrl("work-louder-xyz-work-board-r2")} className="btn btn-primary mr-2">
                Pre-order
              </a>
              <a href="/worklouder" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="corne" className="section-container">
        <div className="container-lg">
          <div className="card ele-2">
            <div className="px-5 py-5">
              <h2 className="font-weight-bold text-primary">Corne (CRKBD)</h2>
              <p style={{ fontSize: "18px" }}>
                The Corne is the reference 42-key low-profile ortholinear split
                in the DIY community. Open-source PCB, runs QMK or ZMK, and
                supports nice!nano controllers for wireless. You can build a
                Corne for under $100 with the right parts, or buy pre-built
                from boutique vendors for $150–$250. The most flexible split
                for anyone willing to learn DIY assembly.
              </p>
              <a
                href="https://github.com/foostan/crkbd"
                className="btn btn-primary mr-2"
              >
                Corne GitHub
              </a>
              <a
                href="https://typeractive.xyz/products/corne"
                className="btn btn-secondary"
              >
                Pre-built at Typeractive
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="sofle" className="section-container">
        <div className="container-lg">
          <div className="card ele-2">
            <div className="px-5 py-5">
              <h2 className="font-weight-bold text-primary">Sofle v2 & Lily58</h2>
              <p style={{ fontSize: "18px" }}>
                Sofle and Lily58 are two of the most popular 58-key
                ortholinear DIY split keyboards. Sofle ships with two rotary
                encoders and dual OLED displays; Lily58 is the simpler, easier
                first build. Both run QMK or VIA and have hot-swap variants.
                Kits typically run $120–$200 from KeebsForAll, Little Keyboards,
                or boutique vendors.
              </p>
              <a
                href="https://josefadamcik.github.io/SofleKeyboard/"
                className="btn btn-primary mr-2"
              >
                Sofle GitHub
              </a>
              <a
                href="https://github.com/kata0510/Lily58"
                className="btn btn-secondary"
              >
                Lily58 GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="ergodox" className="section-container">
        <div className="container-lg">
          <div className="card ele-2">
            <div className="px-5 py-5">
              <h2 className="font-weight-bold text-primary">ErgoDox EZ</h2>
              <p style={{ fontSize: "18px" }}>
                The ErgoDox EZ remains the longest-running pre-assembled ergo
                split. 76 keys, dedicated thumb clusters, two halves with full
                tenting support, and full QMK programmability through ZSA's
                Oryx tool. If the Moonlander feels too compact, the ErgoDox is
                the more spread-out option from the same company.
              </p>
              <a href="https://ergodox-ez.com/" className="btn btn-primary mr-2">
                View on ErgoDox
              </a>
              <a
                href="https://ergodox-ez.com/pages/our-firmware"
                className="btn btn-link"
              >
                QMK Firmware
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="rebound" className="section-container">
        <div className="container-lg">
          <div className="card ele-2">
            <div className="px-5 py-5">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <h2 className="font-weight-bold text-primary">Montsinger Rebound</h2>
                  <p style={{ fontSize: "18px" }}>
                    The Rebound is a 50% split ortholinear keyboard designed to
                    fit inside most 60% keyboard cases. Highly customizable,
                    supports a rotary encoder, and ships as a parts-only kit
                    (no pre-built option).
                  </p>
                  <a
                    href="https://store.montsinger.net/products/rebound"
                    className="btn btn-primary"
                  >
                    Buy the Rebound
                  </a>
                </div>
                <div className="col-lg-5">
                  <img
                    className="img-fluid"
                    src="/montsinger.webp"
                    alt="Montsinger Rebound 50% split ortholinear keyboard"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="faq" className="section-container">
        <div className="container-lg">
          <div className="card ele-2">
            <div className="px-5 py-5">
              <h2 className="font-weight-bold text-primary mb-4">
                Split Keyboard FAQ
              </h2>
              <div className="row">
                {splitFaqItems.map((item) => (
                  <div className="col-lg-6 mb-3" key={item.question}>
                    <h3 style={{ fontSize: "20px" }}>{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="container-lg">
          <div className="card ele-2 bg-light">
            <div className="px-5 py-4 text-center">
              <h2>Still narrowing it down?</h2>
              <p style={{ fontSize: "18px" }}>
                Compare the full ortholinear keyboard catalog or read our
                buyer's guide.
              </p>
              <a className="btn btn-primary mr-2" href="/keyboards">
                Compare All Ortho Keyboards
              </a>
              <a
                className="btn btn-secondary"
                href="/ultimate-guide-to-ortholinear-keyboards"
              >
                Read the Ultimate Guide
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
