import SEOhead from "../components/SEOhead";
import { defaultMeta } from "../lib/pageMeta";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { getUrl } from "../lib/affiliates";

const lastUpdated = "2026-05-01";

const boards = [
  {
    name: "KBDcraft Israfel",
    image: "/kbdcraft-israfel.webp",
    price: "$64.99",
    bestFor: "Best budget pick overall",
    summary:
      "50% ortho with included switches and keycaps, low-profile design, and a price that beats almost every starter custom kit. The easiest first ortho keyboard purchase under $70.",
    features: ["50% layout", "Includes switches & keycaps", "Low-profile", "LEGO-compatible case"],
    buyNow: getUrl("kbdcraft-israfel"),
    learnMore: "/kbdcraft",
  },
  {
    name: "KPrepublic CSTC40",
    image: "/cstc40.jpg",
    price: "$48.90",
    bestFor: "Cheapest 40% ortho",
    summary:
      "Planck-style 40% layout with hot-swap support, RGB, and VIA-based remapping at under $50. The most affordable way into a real custom 40% experience.",
    features: ["40% layout", "Hot-swap PCB", "VIA support", "RGB"],
    buyNow: getUrl("kprepublic-cstc40"),
    learnMore: "/kprepublic-cstc40",
  },
  {
    name: "KPrepublic DNA59",
    image: "/dna59.jpg",
    price: "$64.80",
    bestFor: "Best budget 50% ortho",
    summary:
      "50-key Preonic-style footprint with hot-swap and RGB. Software is proprietary rather than QMK/VIA, so this is the right pick if you don't plan to remap heavily.",
    features: ["50% layout", "Hot-swap", "RGB", "Acrylic case"],
    buyNow: getUrl("kprepublic-dna59"),
    learnMore: "/kprepublic-dna59",
  },
  {
    name: "KPrepublic BM40",
    image: "/bm40.jpg",
    price: "$81.30",
    bestFor: "Best $80 40% with full QMK/VIA",
    summary:
      "If you want full QMK/VIA support but want to stay under $90, the BM40 is the move. Hot-swap, RGB, and easy case sourcing make it a solid second-build candidate too.",
    features: ["40% layout", "Hot-swap", "QMK + VIA", "RGB"],
    buyNow: getUrl("kprepublic-bm40"),
    learnMore: "/kprepublic-bm40",
  },
  {
    name: "KPrepublic JJ40",
    image: "/jj40.jpg",
    price: "Sub-$70",
    bestFor: "Soldered budget 40%",
    summary:
      "Soldered Planck-style 40% from KPrepublic. Cheaper than the BM40 if you don't need hot-swap and are comfortable picking your switches once.",
    features: ["40% layout", "Soldered (no hot-swap)", "QMK", "Compact"],
    buyNow: getUrl("kprepublic-jj40"),
    learnMore: "/jj40",
  },
  {
    name: "Inland 47",
    image: "/inland-47.jpg",
    price: "$49.99",
    bestFor: "Best Micro Center walk-in pick",
    summary:
      "Available at Micro Center for $49.99. Hot-swap and RGB at one of the cheapest prices for any ortho keyboard. The right pick if you want a board this weekend.",
    features: ["40% layout", "Hot-swap", "RGB", "In-store availability"],
    buyNow: getUrl("inland-47-keyboard"),
  },
];

const faqItems = [
  {
    question: "What is the best budget mechanical keyboard under $50?",
    answer:
      "The KPrepublic CSTC40 at $48.90 and the Inland 47 at $49.99 are the two strongest sub-$50 picks. Both are 40% ortholinear with hot-swap PCBs, so you can change switches later without buying a new board.",
  },
  {
    question: "What is the cheapest ortholinear keyboard?",
    answer:
      "The KPrepublic CSTC40 at $48.90 is the cheapest hot-swap ortholinear keyboard we recommend. The Inland 47 is similarly priced but only available through Micro Center.",
  },
  {
    question: "Are budget mechanical keyboards worth it?",
    answer:
      "Yes — especially if you're new to mechanical or new to ortholinear. The CSTC40 and KBDcraft Israfel both deliver hot-swap, RGB, and decent build quality at a price low enough to experiment without committing.",
  },
  {
    question: "What should I look for in a budget mechanical keyboard?",
    answer:
      "Three things: hot-swap support (so you can upgrade switches later), QMK or VIA firmware (for free remapping software), and a layout you'll actually use day-to-day. All three are present on the CSTC40, BM40, and Israfel.",
  },
  {
    question: "Is a 40% keyboard hard to use?",
    answer:
      "There's a learning curve — numbers, symbols, and arrows live on a Fn layer instead of dedicated keys. Most people are comfortable after 1–2 weeks. If you want to skip the learning curve, a 50% board like the DNA59 or Israfel adds a number row.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Best Budget Mechanical Keyboard",
      url: `${defaultMeta.url}/best-budget-mechanical-keyboard`,
      description:
        "The best budget ortholinear and mechanical keyboards under $100, with hot-swap support and full programmability.",
      dateModified: lastUpdated,
    },
    {
      "@type": "ItemList",
      name: "Best Budget Mechanical Keyboards",
      itemListElement: boards.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
      })),
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

export default function BestBudgetMechanicalKeyboard() {
  return (
    <div>
      <SEOhead
        meta={{
          title: "Best Budget Mechanical Keyboard (Under $100)",
          description:
            "The best budget mechanical keyboards for ortho and mainstream builds under $100, including the CSTC40, BM40, KBDcraft Israfel, DNA59, and Inland 47.",
          image: `${defaultMeta.url}/cstc40.jpg`,
          slug: "/best-budget-mechanical-keyboard",
        }}
        keywords="best budget mechanical keyboard, cheap mechanical keyboard, budget ortholinear keyboard, mechanical keyboard under 100"
        structuredData={structuredData}
      />

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <p className="keyboard-kicker">Updated {lastUpdated}</p>
              <h1 className="display-4 font-weight-bolder">
                Best Budget Mechanical Keyboard
              </h1>
              <p className="lead">
                <strong>Best overall budget pick: KBDcraft Israfel ($64.99)</strong> — 50%
                ortho with switches and keycaps included, low-profile, and one of the
                friendliest first-keyboard purchases under $70.
              </p>
              <p>
                A great budget mechanical keyboard isn't the cheapest one — it's the
                cheapest one with hot-swap, programmable firmware, and a layout you'll
                actually keep. Below are the strongest budget picks across 40%, 50%, and
                ortholinear sizes, all under $100.
              </p>
              <div className="button-cluster mt-3">
                <a className="btn btn-light" href="#picks">Compare Picks</a>
                <a className="btn btn-outline-light" href="#how-to-choose">How to Choose</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="keyboard-hero-panel">
                <p className="keyboard-hero-panel-label">Quick decision matrix</p>
                <ul>
                  <li><strong>Cheapest hot-swap:</strong> CSTC40 ($48.90)</li>
                  <li><strong>Best starter:</strong> KBDcraft Israfel ($64.99)</li>
                  <li><strong>Most programmable:</strong> BM40 ($81.30)</li>
                  <li><strong>Walk-in pick:</strong> Inland 47 (Micro Center)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container" id="picks">
        <div className="container-lg">
          <h2>Best budget mechanical keyboards to compare first</h2>

          <table className="table">
            <thead>
              <tr>
                <th>Keyboard</th>
                <th>Price</th>
                <th>Layout</th>
                <th>Hot-swap</th>
                <th>Firmware</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>KPrepublic CSTC40</strong></td><td>$48.90</td><td>40%</td><td>Yes</td><td>VIA</td></tr>
              <tr><td><strong>Inland 47</strong></td><td>$49.99</td><td>40%</td><td>Yes</td><td>QMK</td></tr>
              <tr><td><strong>KPrepublic JJ40</strong></td><td>~$70</td><td>40%</td><td>No (soldered)</td><td>QMK</td></tr>
              <tr><td><strong>KBDcraft Israfel</strong></td><td>$64.99</td><td>50%</td><td>Soldered</td><td>QMK</td></tr>
              <tr><td><strong>KPrepublic DNA59</strong></td><td>$64.80</td><td>50%</td><td>Yes</td><td>Proprietary</td></tr>
              <tr><td><strong>KPrepublic BM40</strong></td><td>$81.30</td><td>40%</td><td>Yes</td><td>QMK + VIA</td></tr>
            </tbody>
          </table>

          <div className="row">
            {boards.map((b) => (
              <div className="col-lg-4 col-md-6" key={b.name}>
                <div className="card mb-4 h-100">
                  <img className="card-img-top" src={b.image} alt={b.name} />
                  <div className="card-body">
                    <p className="text-uppercase text-primary mb-2"><strong>{b.bestFor} · {b.price}</strong></p>
                    <h3 className="card-title">{b.name}</h3>
                    <p>{b.summary}</p>
                    <ul>
                      {b.features.map((f) => <li key={f}>{f}</li>)}
                    </ul>
                    <a className="btn btn-primary mr-2" href={b.buyNow}>Buy Now</a>
                    {b.learnMore ? <a className="btn btn-secondary" href={b.learnMore}>Learn More</a> : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container bg-light" id="how-to-choose">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-6">
              <h2>How to choose a budget mechanical keyboard</h2>
              <p>
                The cheapest mechanical keyboard isn't always the best value. Three
                things matter more than price when shopping under $100:
              </p>
              <ol>
                <li><strong>Hot-swap support</strong> — lets you change switches without soldering or buying a new board.</li>
                <li><strong>QMK or VIA firmware</strong> — free remapping software so you can adapt the layout to your hands.</li>
                <li><strong>A layout you'll actually use</strong> — a 40% saves desk space; a 50% adds a number row.</li>
              </ol>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h3>Skip if</h3>
                  <ul>
                    <li>The PCB is soldered AND the switches feel wrong — you'll outgrow it fast.</li>
                    <li>The firmware is proprietary AND there's no remapping app.</li>
                    <li>The layout is unusual without QMK/VIA support.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="container-lg">
          <div className="card">
            <div className="card-body">
              <h2>Frequently asked questions</h2>
              {faqItems.map((item) => (
                <div className="mb-4" key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="container-lg">
          <h2>Read next</h2>
          <ul>
            <li><a href="/keyboards">All ortholinear keyboards</a></li>
            <li><a href="/silent-mechanical-keyboard">Silent mechanical keyboard guide</a></li>
            <li><a href="/types-of-keyboard-switches">Types of keyboard switches</a></li>
            <li><a href="/keycaps">Ortholinear keycap sets</a></li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
