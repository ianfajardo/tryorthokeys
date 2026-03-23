import { useState } from "react";
import SEOhead from "../components/SEOhead";
import { defaultMeta } from "../lib/pageMeta";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const keyboards = [
  {
    slug: "ymdk-air40",
    name: "YMDK Air40",
    price: "$102.90",
    priceValue: 102.9,
    size: "40%",
    layout: "Compact ortho",
    firmware: ["QMK", "VIA"],
    hotSwap: true,
    wireless: false,
    status: "available",
    bestFor: "Tinkerers who want a compact daily driver",
    beginnerScore: 4,
    portabilityScore: 5,
    customizationScore: 5,
    recommendedRank: 2,
    highlights: ["40% layout", "Hot-swap", "USB-C", "Case options"],
    description:
      "Available with aluminum and wood cases, the YMDK Air40 gives you a compact 40% board with RGB, hot-swap support, USB-C, and full VIA/QMK programmability.",
    image: "/Air40.jpg",
    buyNow:
      "https://ymdkey.com/products/air40-rgb-hot-swap-cute-40-mechanical-keyboard-assembled-qmk-via-type-c-pcb-cnc-case-plate-kit?variant=39442979586109&sca_ref=3163375.1C4wKHXQtf",
    learnMore: "/ymdk-air40",
  },
  {
    slug: "kbdcraft-israfel",
    name: "KBDcraft Israfel",
    price: "$64.99",
    priceValue: 64.99,
    size: "50%",
    layout: "Compact ortho",
    firmware: ["QMK"],
    hotSwap: false,
    wireless: false,
    status: "available",
    bestFor: "Beginners who want an affordable full ortho kit",
    beginnerScore: 5,
    portabilityScore: 3,
    customizationScore: 3,
    recommendedRank: 1,
    highlights: ["50% layout", "Starter kit", "Low-profile", "LEGO-compatible"],
    description:
      "The Israfel is a distinctive 50% ortholinear kit with included switches and keycaps. Its low-profile design and approachable price make it one of the easiest entry points into full ortho.",
    image: "https://www.tryorthokeys.com/kbdcraft-israfel.webp",
    buyNow:
      "https://kbdcraft.store/products/israfel?_pos=1&_sid=afc7d5709&_ss=r&ref=TRYORTHOKEYS",
    learnMore: "/kbdcraft",
  },
  {
    slug: "work-louder-xyz-work-board-r2",
    name: "Work Louder XYZ Work Board r2",
    price: "Pre-order",
    priceValue: null,
    size: "40%",
    layout: "Alice split ortho",
    firmware: ["Proprietary"],
    hotSwap: false,
    wireless: false,
    status: "available",
    bestFor: "Creators who want a distinct split 40% board",
    beginnerScore: 2,
    portabilityScore: 4,
    customizationScore: 4,
    recommendedRank: 11,
    highlights: [
      "Pre-order now",
      "Alice-inspired",
      "Split 40%",
      "Magnetic tenting",
    ],
    description:
      "The XYZ Work Board r2 is Work Louder's new Alice-inspired split 40% keyboard kit. It is currently in production for April 2026 and open for pre-order.",
    image: "https://www.tryorthokeys.com/work-louder-xyz-work-board-r2.png",
    buyNow: "https://collabs.shop/d8agoj",
    learnMore: "/worklouder",
  },
  {
    slug: "keychron-q15-max",
    name: "Keychron Q15 Max",
    price: "$199.99 - $229.99",
    priceValue: 199.99,
    size: "60%+",
    layout: "Alice-style ortho",
    firmware: ["QMK", "Launcher"],
    hotSwap: true,
    wireless: true,
    status: "available",
    bestFor: "Wireless users who still want deep customization",
    beginnerScore: 4,
    portabilityScore: 4,
    customizationScore: 5,
    recommendedRank: 5,
    highlights: ["Wireless", "Knobs", "Aluminum case", "QMK support"],
    description:
      "Keychron's Q15 Max blends an ortholinear-inspired Alice layout with a premium aluminum build, 2.4G wireless, Bluetooth, hot-swap sockets, and QMK support.",
    image:
      "https://cdn.shopify.com/s/files/1/0059/0630/1017/files/Keychron-Q15-Max-QMK-Ortholinear-Wireless-Custom-Mechanical-Keyboard-Aluminum-Black-Fully-Assembled-Knob-for-Mac-Windows-Linux-Gateron-Jupiter-Red.jpg?v=1719303271",
    buyNow:
      "https://www.keychron.com/products/keychron-q15-max-qmk-wireless-custom-mechanical-keyboard?ref=tryorthokeys",
  },
  {
    slug: "kprepublic-cstc40",
    name: "KPrepublic CSTC40",
    price: "$48.90",
    priceValue: 48.9,
    size: "40%",
    layout: "Compact ortho",
    firmware: ["VIA"],
    hotSwap: true,
    wireless: false,
    status: "available",
    bestFor: "Budget shoppers who want a Planck-style board",
    beginnerScore: 4,
    portabilityScore: 4,
    customizationScore: 4,
    recommendedRank: 3,
    highlights: ["40% layout", "Budget pick", "Hot-swap", "RGB"],
    description:
      "The CSTC40 is a budget-friendly 40% ortholinear board similar to the Planck. It supports hot-swap switches, RGB lighting, and VIA-based remapping.",
    image: "/cstc40.jpg",
    buyNow: "https://collabs.shop/f9rpy8",
    learnMore: "/kprepublic-cstc40",
  },
  {
    slug: "olkb-planck",
    name: "OLKB Planck",
    price: "$89 - $110",
    priceValue: 89,
    size: "40%",
    layout: "Compact ortho",
    firmware: ["QMK"],
    hotSwap: true,
    wireless: false,
    status: "available",
    bestFor: "Purists who want the classic 40% ortho experience",
    beginnerScore: 3,
    portabilityScore: 5,
    customizationScore: 5,
    recommendedRank: 4,
    highlights: ["Classic Planck", "40% layout", "Hot-swap", "Encoders"],
    description:
      "The Planck remains the benchmark 40% ortholinear board. Recent versions add hot-swap support, LEDs, encoder support, and multiple case options.",
    image: "https://www.tryorthokeys.com/planck-2.jpg",
    buyNow:
      "https://drop.com/buy/planck-mechanical-keyboard?utm_source=linkshare&referer=T93XGG",
    learnMore: "/olkb",
  },
  {
    slug: "olkb-preonic",
    name: "OLKB Preonic",
    price: "$110 - $155",
    priceValue: 110,
    size: "50%",
    layout: "Compact ortho",
    firmware: ["QMK"],
    hotSwap: true,
    wireless: false,
    status: "available",
    bestFor: "People who want ortholinear without giving up the number row",
    beginnerScore: 4,
    portabilityScore: 3,
    customizationScore: 5,
    recommendedRank: 6,
    highlights: ["50% layout", "Number row", "Hot-swap", "QMK"],
    description:
      "The Preonic adds an extra row over the Planck, making it a strong choice for anyone who wants more dedicated keys without leaving the ortholinear layout behind.",
    image: "https://www.tryorthokeys.com/olkb-preonic.jpg",
    buyNow: "https://amzn.to/3rhGRg0",
    learnMore: "/olkb",
  },
  {
    slug: "id75",
    name: "Idobao x YMDK ID75",
    price: "$105",
    priceValue: 105,
    size: "60%+",
    layout: "Grid ortho",
    firmware: ["QMK"],
    hotSwap: true,
    wireless: false,
    status: "available",
    bestFor: "Users who want a dense grid with more keys",
    beginnerScore: 3,
    portabilityScore: 2,
    customizationScore: 4,
    recommendedRank: 8,
    highlights: ["75 keys", "Hot-swap", "Aluminum", "Underglow"],
    description:
      "The ID75 packs 75 keys into a full grid layout with a hot-swappable PCB, CNC aluminum case, and underglow-friendly acrylic bottom options.",
    image: "https://www.tryorthokeys.com/id75.jpg",
    buyNow:
      "https://ymdkey.com/products/idobo-75-keys-ortholinear-layout-qmk-anodized-aluminum-case-plate-hot-swappable-hot-swap-type-c-pcb-mechanical-keyboard-kit?sca_ref=3163375.1C4wKHXQtf",
    learnMore: "/id75",
  },
  {
    slug: "kprepublic-bm40",
    name: "KPrepublic BM40",
    price: "$81.30",
    priceValue: 81.3,
    size: "40%",
    layout: "Compact ortho",
    firmware: ["QMK", "VIA"],
    hotSwap: true,
    wireless: false,
    status: "available",
    bestFor: "People who want an easy-to-source 40% with room to tinker",
    beginnerScore: 4,
    portabilityScore: 4,
    customizationScore: 5,
    recommendedRank: 7,
    highlights: ["40% layout", "Hot-swap", "VIA", "RGB"],
    description:
      "The BM40 is a solid 40% ortholinear option with hot-swap sockets, QMK/VIA support, RGB lighting, and easy case-and-plate availability.",
    image: "/bm40.jpg",
    buyNow: "https://kprepublic.com/search?q=bm40&dt_id=94852",
    learnMore: "/kprepublic-bm40",
  },
  {
    slug: "kprepublic-dna59",
    name: "KPrepublic DNA59",
    price: "$64.80",
    priceValue: 64.8,
    size: "50%",
    layout: "Compact ortho",
    firmware: ["Proprietary"],
    hotSwap: true,
    wireless: false,
    status: "available",
    bestFor: "Buyers who want Preonic-like size on a lower budget",
    beginnerScore: 3,
    portabilityScore: 3,
    customizationScore: 2,
    recommendedRank: 12,
    highlights: ["50% layout", "Budget", "Hot-swap", "Acrylic case"],
    description:
      "The DNA59 gives you a Preonic-style footprint with hot-swap support and RGB, but it relies on proprietary software instead of QMK or VIA.",
    image: "/dna59.jpg",
    buyNow: "https://collabs.shop/ajjcnp",
    learnMore: "/kprepublic-dna59",
  },
  {
    slug: "inland-47",
    name: "Inland 47",
    price: "$49.99",
    priceValue: 49.99,
    size: "40%",
    layout: "Compact ortho",
    firmware: ["QMK"],
    hotSwap: true,
    wireless: false,
    status: "available",
    bestFor: "Micro Center shoppers who want a cheap starter board",
    beginnerScore: 4,
    portabilityScore: 4,
    customizationScore: 3,
    recommendedRank: 9,
    highlights: ["40% layout", "Budget", "Hot-swap", "RGB"],
    description:
      "The Inland 47 is a simple budget ortholinear option with hot-swappable switches and RGB lighting, making it a straightforward first board for experimentation.",
    image: "https://www.tryorthokeys.com/inland-47.jpg",
    buyNow: "https://sovrn.co/1p0itng",
  },
  {
    slug: "mechdiy-59",
    name: "MechDIY 59",
    price: "$175",
    priceValue: 175,
    size: "50%",
    layout: "Compact ortho",
    firmware: ["VIA"],
    hotSwap: true,
    wireless: false,
    status: "available",
    bestFor: "People who want an acrylic ortho board with cleaner software support",
    beginnerScore: 3,
    portabilityScore: 3,
    customizationScore: 4,
    recommendedRank: 10,
    highlights: ["59 keys", "Hot-swap", "Acrylic case", "VIA"],
    description:
      "The MechDIY 59 pairs a 59-key ortholinear layout with a hot-swappable PCB, RGB backlighting, and VIA-based customization in an acrylic shell.",
    image: "https://www.tryorthokeys.com/mechdiy-59.jpg",
    buyNow: "https://shrsl.com/45sgz",
    learnMore: "/mechdiy-59",
  },
  {
    slug: "kbdfans-solar",
    name: "KBDFans Solar Keyboard",
    price: "TBD",
    priceValue: null,
    size: "50%",
    layout: "Compact ortho",
    firmware: ["QMK"],
    hotSwap: true,
    wireless: false,
    status: "watchlist",
    bestFor: "Enthusiasts tracking upcoming ortho kits",
    beginnerScore: 2,
    portabilityScore: 3,
    customizationScore: 5,
    recommendedRank: 13,
    highlights: ["Watch list", "OLED module", "Knobs", "Hot-swap"],
    description:
      "KBDFans retired the NIU40 and replaced it with an interest-page concept called the Solar, a feature-heavy ortholinear kit with knobs, modular add-ons, and a hot-swap PCB.",
    image:
      "https://www.tryorthokeys.com/kbdfans-solar-keyboard-kit-ortholinear.png",
    buyNow: "https://kbdfans.com/r?id=be1aik",
    learnMore: "/posts/kbdfans-solar-keyboard-kit-ortholinear",
  },
  {
    slug: "gizmo-gk6",
    name: "Gizmo Engineering GK6",
    price: "$329",
    priceValue: 329,
    size: "50%",
    layout: "Compact ortho",
    firmware: ["QMK"],
    hotSwap: true,
    wireless: false,
    status: "available",
    bestFor: "Premium buyers who want a high-end 50% ortho",
    beginnerScore: 2,
    portabilityScore: 3,
    customizationScore: 5,
    recommendedRank: 14,
    highlights: ["Premium build", "Ceramic coating", "Hot-swap", "QMK"],
    description:
      "The GK6 is a premium 50% ortholinear keyboard with QMK support, multiple bottom-row layouts, a hot-swap PCB, and a coated aluminum case.",
    image: "https://www.tryorthokeys.com/gk6.webp",
    buyNow: "https://sovrn.co/1iddf86",
    learnMore: "/gizmo-engineering-gk6",
  },
  {
    slug: "kinesis-advantage2",
    name: "Kinesis Advantage2",
    price: "$339",
    priceValue: 339,
    size: "Ergo split",
    layout: "Ergonomic split",
    firmware: ["On-board remap"],
    hotSwap: false,
    wireless: false,
    status: "available",
    bestFor: "Writers and coders chasing long-session ergonomics",
    beginnerScore: 3,
    portabilityScore: 1,
    customizationScore: 3,
    recommendedRank: 15,
    highlights: ["Ergo split", "Palm support", "Tented", "Cherry MX"],
    description:
      "The Kinesis Advantage2 uses a deep ergonomic split design with orthogonal key columns, integrated palm support, and a shape built for comfort over long work sessions.",
    image: "/kinesis-advantage2.jpg",
    buyNow: "https://amzn.to/3CsZySE",
    learnMore: "/kinesis",
  },
];

const quickPicks = [
  {
    label: "Best Starter",
    keyboardSlug: "kbdcraft-israfel",
    reason: "Affordable, approachable, and easier to recommend to first-time ortho users.",
  },
  {
    label: "Best 40%",
    keyboardSlug: "olkb-planck",
    reason: "Still the reference point for a compact, highly customizable ortholinear board.",
  },
  {
    label: "Best Wireless",
    keyboardSlug: "keychron-q15-max",
    reason: "One of the most practical options if you want cable-free use without giving up programmability.",
  },
];

const faqItems = [
  {
    question: "What is the best ortholinear keyboard for beginners?",
    answer:
      "For most beginners, a board like the KBDcraft Israfel, KPrepublic CSTC40, or BM40 is easier to recommend because pricing is friendlier and the layouts are easier to live with while you adjust.",
  },
  {
    question: "What is the best 40% ortholinear keyboard?",
    answer:
      "If you want the classic compact ortho experience, the OLKB Planck is still the most recognizable 40% benchmark. Budget shoppers can look at the CSTC40 or BM40 instead.",
  },
  {
    question: "Which ortholinear keyboards support QMK or VIA?",
    answer:
      "Many of the strongest options on this page support QMK, VIA, or both. The filters above let you narrow the list specifically to boards with the firmware support you want.",
  },
];

const formatPrice = (keyboard) => keyboard.priceValue ?? Number.MAX_SAFE_INTEGER;

const statusMeta = {
  available: {
    label: "Available now",
    className: "is-success",
  },
  watchlist: {
    label: "Watch list",
    className: "is-warning",
  },
};

export default function Keyboards() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sizeFilter, setSizeFilter] = useState("all");
  const [firmwareFilter, setFirmwareFilter] = useState("all");
  const [featureFilter, setFeatureFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("available");
  const [sortBy, setSortBy] = useState("recommended");

  const availableKeyboards = keyboards.filter(
    (keyboard) => keyboard.status === "available"
  );
  const quickPickCards = quickPicks
    .map((pick) => ({
      ...pick,
      keyboard: keyboards.find((keyboard) => keyboard.slug === pick.keyboardSlug),
    }))
    .filter((pick) => pick.keyboard);

  const filteredKeyboards = keyboards
    .filter((keyboard) => {
      const matchesSearch =
        searchTerm.trim() === "" ||
        [
          keyboard.name,
          keyboard.description,
          keyboard.bestFor,
          keyboard.size,
          keyboard.layout,
          keyboard.firmware.join(" "),
          keyboard.highlights.join(" "),
        ]
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase());

      const matchesSize = sizeFilter === "all" || keyboard.size === sizeFilter;
      const matchesFirmware =
        firmwareFilter === "all" || keyboard.firmware.includes(firmwareFilter);
      const matchesStatus =
        statusFilter === "all" || keyboard.status === statusFilter;

      const matchesFeature =
        featureFilter === "all" ||
        (featureFilter === "hot-swap" && keyboard.hotSwap) ||
        (featureFilter === "wireless" && keyboard.wireless) ||
        (featureFilter === "split" && keyboard.layout === "Ergonomic split") ||
        (featureFilter === "budget" &&
          keyboard.priceValue !== null &&
          keyboard.priceValue <= 100);

      return (
        matchesSearch &&
        matchesSize &&
        matchesFirmware &&
        matchesStatus &&
        matchesFeature
      );
    })
    .sort((left, right) => {
      if (sortBy === "price-low") {
        return formatPrice(left) - formatPrice(right);
      }

      if (sortBy === "price-high") {
        return formatPrice(right) - formatPrice(left);
      }

      if (sortBy === "beginner") {
        return (
          right.beginnerScore - left.beginnerScore ||
          formatPrice(left) - formatPrice(right)
        );
      }

      if (sortBy === "portable") {
        return (
          right.portabilityScore - left.portabilityScore ||
          formatPrice(left) - formatPrice(right)
        );
      }

      if (sortBy === "customization") {
        return (
          right.customizationScore - left.customizationScore ||
          formatPrice(left) - formatPrice(right)
        );
      }

      return (
        left.recommendedRank - right.recommendedRank ||
        formatPrice(left) - formatPrice(right)
      );
    });

  const keyboardStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Ortholinear Keyboards",
        url: `${defaultMeta.url}/keyboards`,
        description:
          "Compare ortholinear keyboards by size, firmware, hot-swap support, wireless support, and price.",
        dateModified: "2026-03-19",
        mainEntity: {
          "@type": "ItemList",
          itemListElement: availableKeyboards.map((keyboard, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${defaultMeta.url}/keyboards#${keyboard.slug}`,
            name: keyboard.name,
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <div>
      <SEOhead
        meta={{
          title: "Ortholinear Keyboards",
          description:
            "Compare ortholinear keyboards by size, firmware, price, hot-swap support, and layout. Browse 40% boards, 50% boards, split ergonomic boards, and beginner-friendly picks.",
          image: `${defaultMeta.url}/plank-preonic.jpg`,
          slug: "/keyboards",
        }}
        keywords="ortholinear keyboards, ortho keyboard, Planck, Preonic, OLKB, 40% keyboard, programmable keyboard, QMK, VIA"
        structuredData={keyboardStructuredData}
      />

      <Navigation />

      <div className="section-container text-white keyboards-jumbo">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="py-3 keyboard-hero-copy">
                <p className="keyboard-kicker">Updated March 19, 2026</p>
                <h1 className="display-4 font-weight-bolder">
                  Ortholinear keyboards worth considering
                </h1>
                <p className="lead">
                  This page is built to help you narrow the list fast. Filter by
                  size, firmware, hot-swap support, or price, then compare the
                  boards that actually fit how you work. New to ortho keyboards?
                  Start with our{" "}
                  <a
                    href="/ultimate-guide-to-ortholinear-keyboards"
                    className="text-white font-weight-bold"
                  >
                    <u>ultimate guide to ortholinear keyboards</u>
                  </a>
                  .
                </p>
                <div className="button-cluster mt-4">
                  <a className="btn btn-light" href="#keyboard-picker">
                    Browse Keyboards
                  </a>
                  <a className="btn btn-outline-light" href="/configure">
                    Learn QMK and VIA
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="keyboard-hero-panel">
                <p className="keyboard-hero-panel-label">Quick advice</p>
                <h2>Start with layout, then firmware.</h2>
                <p>
                  If you want the shortest learning curve, lean toward a 50%
                  board. If customization matters most, stick to boards that
                  support QMK or VIA. If comfort is the goal, look at split
                  ergonomic designs first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="keyboard-section" id="keyboard-picker">
        <div className="row">
          <div className="col-12">
            <div className="keyboard-help-card keyboard-section-intro mb-4">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <p className="keyboard-kicker text-primary mb-2">
                    How to use this page
                  </p>
                  <h2>Choose the right board instead of opening ten tabs.</h2>
                  <p className="mb-0">
                    Most people should decide in this order: layout size,
                    firmware support, then budget. A smaller 40% board saves the
                    most space, a 50% board is easier to adapt to, and a split
                    ergonomic board is the better starting point if comfort is
                    your main concern.
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="button-cluster justify-content-lg-end mt-3 mt-lg-0">
                    <a className="btn btn-primary" href="/posts">
                      Read Setup Guides
                    </a>
                    <a className="btn btn-secondary" href="/keycaps">
                      Shop Keycaps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row keyboard-quick-picks">
          {quickPickCards.map((pick) => (
            <div className="col-lg-4 col-md-6" key={pick.label}>
              <div className="keyboard-pick-card">
                <p className="keyboard-pick-label">{pick.label}</p>
                <h2>{pick.keyboard.name}</h2>
                <p>{pick.reason}</p>
                <div className="keyboard-badge-row">
                  <span className="keyboard-badge is-accent">
                    {pick.keyboard.size}
                  </span>
                  {pick.keyboard.firmware.map((firmware) => (
                    <span className="keyboard-badge" key={firmware}>
                      {firmware}
                    </span>
                  ))}
                </div>
                <a className="btn btn-sm btn-primary mt-3" href={`#${pick.keyboard.slug}`}>
                  Jump to board
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="keyboard-controls mb-4">
          <div className="keyboard-controls-grid">
            <div className="form-group mb-0">
              <label className="keyboard-filter-label" htmlFor="keyboard-search">
                Search
              </label>
              <input
                id="keyboard-search"
                className="form-control"
                type="search"
                placeholder="Planck, wireless, QMK, budget..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>

            <div className="form-group mb-0">
              <label className="keyboard-filter-label" htmlFor="keyboard-size">
                Size
              </label>
              <select
                id="keyboard-size"
                className="form-control"
                value={sizeFilter}
                onChange={(event) => setSizeFilter(event.target.value)}
              >
                <option value="all">All sizes</option>
                <option value="40%">40%</option>
                <option value="50%">50%</option>
                <option value="60%+">60%+</option>
                <option value="Ergo split">Ergo split</option>
              </select>
            </div>

            <div className="form-group mb-0">
              <label
                className="keyboard-filter-label"
                htmlFor="keyboard-firmware"
              >
                Firmware
              </label>
              <select
                id="keyboard-firmware"
                className="form-control"
                value={firmwareFilter}
                onChange={(event) => setFirmwareFilter(event.target.value)}
              >
                <option value="all">All firmware</option>
                <option value="QMK">QMK</option>
                <option value="VIA">VIA</option>
                <option value="Launcher">Launcher</option>
                <option value="Proprietary">Proprietary</option>
              </select>
            </div>

            <div className="form-group mb-0">
              <label className="keyboard-filter-label" htmlFor="keyboard-feature">
                Must-have
              </label>
              <select
                id="keyboard-feature"
                className="form-control"
                value={featureFilter}
                onChange={(event) => setFeatureFilter(event.target.value)}
              >
                <option value="all">Any feature</option>
                <option value="hot-swap">Hot-swap</option>
                <option value="wireless">Wireless</option>
                <option value="split">Split ergonomic</option>
                <option value="budget">Under $100</option>
              </select>
            </div>

            <div className="form-group mb-0">
              <label className="keyboard-filter-label" htmlFor="keyboard-status">
                Availability
              </label>
              <select
                id="keyboard-status"
                className="form-control"
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
              >
                <option value="available">Available now</option>
                <option value="watchlist">Watch list</option>
                <option value="all">Show all</option>
              </select>
            </div>

            <div className="form-group mb-0">
              <label className="keyboard-filter-label" htmlFor="keyboard-sort">
                Sort by
              </label>
              <select
                id="keyboard-sort"
                className="form-control"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
              >
                <option value="recommended">Recommended</option>
                <option value="beginner">Best for beginners</option>
                <option value="portable">Most portable</option>
                <option value="customization">Most customizable</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
              </select>
            </div>
          </div>

          <div className="keyboard-toolbar-meta">
            <p className="mb-0">
              Showing <strong>{filteredKeyboards.length}</strong>{" "}
              {filteredKeyboards.length === 1 ? "keyboard" : "keyboards"}.
            </p>
            <div className="button-cluster">
              <span className="keyboard-toolbar-note">
                Some outgoing links may be affiliate links.
              </span>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => {
                  setSearchTerm("");
                  setSizeFilter("all");
                  setFirmwareFilter("all");
                  setFeatureFilter("all");
                  setStatusFilter("available");
                  setSortBy("recommended");
                }}
              >
                Reset filters
              </button>
            </div>
          </div>
        </div>

        {filteredKeyboards.length === 0 ? (
          <div className="keyboard-empty-state card">
            <div className="card-body">
              <h2>No keyboards matched that combination.</h2>
              <p className="mb-0">
                Try clearing one of the filters, or switch the availability
                filter from Available now to Show all.
              </p>
            </div>
          </div>
        ) : (
          <div className="row">
            {filteredKeyboards.map((keyboard) => (
              <div
                id={keyboard.slug}
                className="col-lg-4 col-md-6"
                key={keyboard.slug}
              >
                <div className="keyboard-card">
                  <div className="card">
                    <a href={keyboard.buyNow}>
                      <img
                        className="card-img-top"
                        src={keyboard.image}
                        alt={keyboard.name}
                      />
                    </a>
                    <div className="card-body">
                      <div className="keyboard-card-top">
                        <span className="keyboard-badge is-accent">
                          {keyboard.bestFor}
                        </span>
                        <span
                          className={`keyboard-badge ${
                            statusMeta[keyboard.status].className
                          }`}
                        >
                          {statusMeta[keyboard.status].label}
                        </span>
                      </div>
                      <h2 className="card-title">{keyboard.name}</h2>
                      <div className="keyboard-badge-row">
                        <span className="keyboard-badge">{keyboard.size}</span>
                        <span className="keyboard-badge">{keyboard.layout}</span>
                        {keyboard.firmware.map((item) => (
                          <span className="keyboard-badge" key={item}>
                            {item}
                          </span>
                        ))}
                        {keyboard.hotSwap ? (
                          <span className="keyboard-badge">Hot-swap</span>
                        ) : (
                          ""
                        )}
                        {keyboard.wireless ? (
                          <span className="keyboard-badge">Wireless</span>
                        ) : (
                          ""
                        )}
                      </div>
                      <p className="card-text">{keyboard.description}</p>
                      <div className="keyboard-badge-row">
                        {keyboard.highlights.map((highlight) => (
                          <span className="keyboard-badge is-muted" key={highlight}>
                            {highlight}
                          </span>
                        ))}
                      </div>
                      <div className="keyboard-card-actions">
                        <a href={keyboard.buyNow} className="btn btn-primary">
                          Buy Now
                        </a>
                        {keyboard.learnMore ? (
                          <a
                            href={keyboard.learnMore}
                            className="btn btn-secondary"
                          >
                            Learn More
                          </a>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="card-footer text-muted">
                      <strong>Price:</strong> {keyboard.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="section-container keyboard-guide-band">
        <div className="container-lg">
          <div className="row keyboard-help-grid">
            <div className="col-lg-4 col-md-6">
              <div className="keyboard-help-card">
                <p className="keyboard-kicker text-primary mb-2">Picking a size</p>
                <h2>40% boards are the most compact.</h2>
                <p>
                  Choose a 40% board if desk space and portability matter most.
                  Expect a steeper learning curve because layers do more of the
                  heavy lifting.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="keyboard-help-card">
                <p className="keyboard-kicker text-primary mb-2">Firmware matters</p>
                <h2>QMK and VIA make ownership easier.</h2>
                <p>
                  If you want to remap keys, build layers, and experiment
                  without friction, prioritize boards with QMK or VIA support.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="keyboard-help-card">
                <p className="keyboard-kicker text-primary mb-2">Comfort first</p>
                <h2>Split designs are worth a look.</h2>
                <p>
                  If your main goal is wrist comfort rather than maximum desk
                  space, start with an ergonomic split design instead of forcing
                  a compact board to solve an ergonomics problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container" id="keycaps">
        <div className="container-lg">
          <div className="row card-link-grid">
            <div className="col-lg-12">
              <h2>Keycaps</h2>

              <p>
                Finally picked out your ortholinear keyboard? You will need
                keycaps that actually fit the layout. Read our articles on the
                best keycaps for ortholinear boards, or see our page on{" "}
                <a href="/keycaps">ortholinear keycap sets available now</a>.
              </p>
            </div>
          </div>
          <div className="card ele-2 mb-4 bg-primary">
            <div className="px-5 py-5">
              <div className="row align-items-center">
                <div className="col-lg-2">
                  <img className="img-fluid" src="fkcaps.jpg" alt="FKcaps custom keycaps" />
                </div>
                <div className="col-lg-8 text-light">
                  <h2>Design your own keycaps with FKcaps</h2>
                  <p>
                    Use our link to get a special <strong>10% off</strong>{" "}
                    affordable customizable keycaps at FKcaps. They offer
                    Cherry, DSA, MDA, choc-style caps, and much more. Choose
                    from different layouts to fit your needs, pick custom fonts,
                    and build a set around your board.
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
          <div className="row">
            <div className="col-lg">
              <div className="mb-5">
                <div className="card">
                  <div className="card-img-top">
                    <a href="/posts/the-best-budget-keycaps-for-mechanical-keyboard">
                      <img
                        className="img-fluid"
                        src="/the-best-budget-keycaps-for-mechanical-keyboard.png"
                        alt="The Best Budget Keycaps For Your Mechanical Keyboard"
                      />
                    </a>
                  </div>
                  <div className="card-body">
                    <a href="/posts/the-best-budget-keycaps-for-mechanical-keyboard">
                      The Best Budget Keycaps For Your Mechanical Keyboard
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
                        className="img-fluid"
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
                        className="img-fluid"
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
                        className="img-fluid"
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
                        className="img-fluid"
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
              <div className="button-cluster">
                <a className="btn btn-primary" href="/keycaps">
                  See Our Keycap List
                </a>
                <a className="btn btn-secondary" href="/posts">
                  Read Our Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-12">
              <div className="keyboard-faq card">
                <div className="card-body">
                  <p className="keyboard-kicker text-primary mb-2">FAQ</p>
                  <h2>Common ortholinear keyboard questions</h2>
                  <div className="row">
                    {faqItems.map((item) => (
                      <div className="col-lg-4" key={item.question}>
                        <div className="keyboard-faq-item">
                          <h3>{item.question}</h3>
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
