import SEOhead from "../components/SEOhead";
import { defaultMeta } from "../lib/pageMeta";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { getUrl } from "../lib/affiliates";

const lastUpdated = "2026-05-01";

const boards = [
  {
    name: "Kinesis Advantage2",
    image: "/kinesis-advantage2.jpg",
    bestFor: "Best fully split ergonomic ortho",
    summary:
      "Deep-key-well split ergonomic with orthogonal columns, integrated palm rest, and a layout designed for long writing sessions. The most-recommended split ortholinear-style keyboard for serious writers and coders.",
    features: ["Fully split design", "Concave key wells", "Orthogonal columns", "Cherry MX switches"],
    buyNow: getUrl("kinesis-advantage2"),
    learnMore: "/kinesis",
  },
  {
    name: "ErgoDox EZ",
    image: "/ergodox.png",
    bestFor: "Best fully programmable split ortho",
    summary:
      "Two physical halves with full QMK support. The reference split ortho — every key is reprogrammable, the halves move independently, and the community has built thousands of layouts you can copy.",
    features: ["Two physical halves", "Full QMK support", "Tenting kit available", "Hot-swap option"],
    buyNow: getUrl("ergodox-ez"),
  },
  {
    name: "Work Louder XYZ Work Board r2",
    image: "/work-louder-xyz-work-board-r2.png",
    bestFor: "Best Alice-style split 40% ortho",
    summary:
      "Alice-inspired split 40% with magnetic tenting. A one-piece board (not fully separated halves) that delivers most of the wrist-angle benefit without the cabling between halves.",
    features: ["Alice split layout", "40% form factor", "Magnetic tenting", "Single-piece"],
    buyNow: getUrl("work-louder-xyz-work-board-r2"),
    learnMore: "/worklouder",
  },
  {
    name: "Akko ACR Pro Alice Plus",
    image: "/alice-acr-pro-alice.png",
    bestFor: "Best budget Alice-style ortho",
    summary:
      "Alice-style split ortho prebuilt with hot-swap, gasket mount, and Akko CS switches. The cheapest path into an angled split layout that still feels enthusiast-grade.",
    features: ["Alice split layout", "Hot-swap PCB", "Gasket mount", "Prebuilt"],
    buyNow: getUrl("akko-acr-pro-alice-plus-full-kit"),
  },
  {
    name: "Kinesis Freestyle Pro",
    image: "/kinesis-advantage2.jpg",
    bestFor: "Best entry split ergonomic",
    summary:
      "Two halves connected by a flexible cable, lower learning curve than the Advantage2, and Cherry MX switches. The right pick if you want a split keyboard without committing to deep key wells.",
    features: ["Two-half split", "Flexible cable", "Cherry MX switches", "On-board remap"],
    buyNow: getUrl("kinesis-freestyle-pro"),
  },
  {
    name: "Montsinger Rebound",
    image: "/montsinger.webp",
    bestFor: "Best low-profile split ortho",
    summary:
      "Compact split ortho with low-profile switches. Niche pick for travelers and minimalist desks who want full split ergonomics in a smaller footprint.",
    features: ["Split ortho", "Low-profile", "Travel-friendly", "Custom layout"],
    buyNow: getUrl("montsinger-rebound"),
  },
];

const faqItems = [
  {
    question: "What is an ortholinear split keyboard?",
    answer:
      "A split keyboard separates the alpha cluster into two halves so each hand can rest at a more natural angle. An ortholinear split keyboard adds a grid (column-aligned) layout instead of staggered keys, which most ergonomic typists find more comfortable for long sessions.",
  },
  {
    question: "What is the best split ortholinear keyboard?",
    answer:
      "The Kinesis Advantage2 is the most-recommended split ortholinear keyboard for serious typists, with concave key wells and integrated palm support. The ErgoDox EZ is the best fully programmable split ortho if QMK customization matters more than the curved key wells.",
  },
  {
    question: "Is an Alice keyboard the same as a split ortholinear?",
    answer:
      "Not quite. An Alice keyboard angles the alpha cluster outward but stays as a single physical piece, and most Alice boards use a row-staggered layout, not ortholinear. Boards like the Work Louder XYZ Work Board r2 combine the Alice angle with an ortholinear column-aligned layout.",
  },
  {
    question: "Are split keyboards worth the learning curve?",
    answer:
      "If you type for hours daily and feel wrist strain, yes — most users adapt within 1–2 weeks. If you're an occasional typist or share your desk, the learning curve usually isn't worth it.",
  },
  {
    question: "Do split ortholinear keyboards use standard keycaps?",
    answer:
      "Most do, but check the spacebar layout — many split ortho boards use a 1u or 2u thumb cluster instead of the long 6.25u spacebar that comes with standard sets. You may need an ortho-friendly set or a separate spacebar.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Ortholinear Split Keyboards",
      url: `${defaultMeta.url}/ortholinear-split-keyboard`,
      description:
        "The best ortholinear split keyboards for ergonomic typing, including the Kinesis Advantage2, ErgoDox EZ, Work Louder XYZ, and Akko ACR Pro Alice Plus.",
      dateModified: lastUpdated,
    },
    {
      "@type": "ItemList",
      name: "Best Ortholinear Split Keyboards",
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

export default function OrtholinearSplitKeyboard() {
  return (
    <div>
      <SEOhead
        meta={{
          title: "Ortholinear Split Keyboards",
          description:
            "Compare the best ortholinear split keyboards for ergonomic typing, including the Kinesis Advantage2, ErgoDox EZ, Akko ACR Pro Alice Plus, and Work Louder XYZ.",
          image: `${defaultMeta.url}/kinesis-advantage2.jpg`,
          slug: "/ortholinear-split-keyboard",
        }}
        keywords="ortholinear split keyboard, split ortholinear keyboard, ergonomic ortho keyboard, Kinesis Advantage, ErgoDox"
        structuredData={structuredData}
      />

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <p className="keyboard-kicker">Updated {lastUpdated}</p>
              <h1 className="display-4 font-weight-bolder">
                Ortholinear Split Keyboards
              </h1>
              <p className="lead">
                <strong>Best overall: Kinesis Advantage2</strong> — the most-recommended split
                ortholinear keyboard for serious writers and coders, with concave key wells
                and integrated palm support.
              </p>
              <p>
                A split ortholinear keyboard combines two ergonomic ideas: separating the
                alpha cluster so each hand sits at a natural angle, and using a grid
                (column-aligned) layout instead of the standard staggered rows. The result
                is a keyboard built for long typing sessions without wrist strain.
              </p>
              <div className="button-cluster mt-3">
                <a className="btn btn-light" href="#picks">Compare Picks</a>
                <a className="btn btn-outline-light" href="#which-is-right">Which is Right?</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="keyboard-hero-panel">
                <p className="keyboard-hero-panel-label">Quick advice</p>
                <ul>
                  <li><strong>Best for writers:</strong> Kinesis Advantage2</li>
                  <li><strong>Best for tinkerers:</strong> ErgoDox EZ</li>
                  <li><strong>Best one-piece angled:</strong> Work Louder XYZ r2</li>
                  <li><strong>Best budget:</strong> Akko ACR Pro Alice Plus</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container" id="picks">
        <div className="container-lg">
          <h2>Best ortholinear split keyboards to compare</h2>

          <table className="table">
            <thead>
              <tr>
                <th>Keyboard</th>
                <th>Style</th>
                <th>Layout</th>
                <th>Programmable</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Kinesis Advantage2</strong></td><td>Fully split, concave</td><td>Ergo split ortho</td><td>On-board remap</td></tr>
              <tr><td><strong>ErgoDox EZ</strong></td><td>Fully split, flat</td><td>Split ortho</td><td>Full QMK</td></tr>
              <tr><td><strong>Work Louder XYZ r2</strong></td><td>One-piece angled</td><td>Alice ortho 40%</td><td>Proprietary</td></tr>
              <tr><td><strong>Akko ACR Pro Alice Plus</strong></td><td>One-piece angled</td><td>Alice split</td><td>VIA</td></tr>
              <tr><td><strong>Kinesis Freestyle Pro</strong></td><td>Two halves, cabled</td><td>Standard split</td><td>On-board remap</td></tr>
              <tr><td><strong>Montsinger Rebound</strong></td><td>Fully split, low-profile</td><td>Compact split ortho</td><td>QMK</td></tr>
            </tbody>
          </table>

          <div className="row">
            {boards.map((b) => (
              <div className="col-lg-4 col-md-6" key={b.name}>
                <div className="card mb-4 h-100">
                  <img className="card-img-top" src={b.image} alt={b.name} />
                  <div className="card-body">
                    <p className="text-uppercase text-primary mb-2"><strong>{b.bestFor}</strong></p>
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

      <div className="section-container bg-light" id="which-is-right">
        <div className="container-lg">
          <h2>Which split ortholinear keyboard is right for you?</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h3>You write or code all day</h3>
                  <p>Get the Kinesis Advantage2. Concave key wells reduce finger travel, and integrated palm support keeps your wrists straight for hours.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h3>You want to customize everything</h3>
                  <p>Get the ErgoDox EZ. Full QMK support means every key is reprogrammable, and the community has thousands of layouts to copy.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h3>You don't want fully separated halves</h3>
                  <p>Get the Work Louder XYZ r2 or Akko ACR Pro Alice Plus. Both deliver the wrist-angle benefit in a single physical board.</p>
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
            <li><a href="/kinesis">Kinesis brand hub</a></li>
            <li><a href="/worklouder">Work Louder brand hub</a></li>
            <li><a href="/best-budget-mechanical-keyboard">Best budget mechanical keyboard</a></li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
