import SEOhead from "../components/SEOhead";
import { defaultMeta } from "../lib/pageMeta";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { getUrl } from "../lib/affiliates";

const lastUpdated = "2026-05-01";

const switches = [
  {
    name: "EPOMAKER Creamy Jade",
    image: "/images/affiliates/1774975614489-51ZFirv0TwL._SL1500_.jpg",
    bestFor: "Best creamy linear overall",
    summary:
      "Smooth linear with the signature 'creamy' nylon-based housing sound — deeper and softer than POM-based switches. Factory-lubed, MX-compatible, perfect for ortho hot-swap boards.",
    pros: ["Deep creamy sound", "Factory-lubed", "MX-compatible"],
    cons: ["Slightly heavier than Gateron Yellow"],
    buyNow: getUrl("epomaker-creamy-jade"),
  },
  {
    name: "Akko V3 Creamy Yellow Pro",
    image: "/images/affiliates/1774975676998-51TJPE0E64L._AC_SL1500_.jpg",
    bestFor: "Best budget creamy switch",
    summary:
      "Akko's take on a creamy linear — lighter spring than the Creamy Jade, with the same softer nylon housing acoustics. The cheapest path into a creamy ortho build.",
    pros: ["Lower price than Creamy Jade", "Light linear feel", "Factory-lubed"],
    cons: ["Slightly less refined than Creamy Jade"],
    buyNow: getUrl("akko-v3-creamy-yellow-pro"),
  },
  {
    name: "Gateron Milky Yellow Pro V2",
    image: "/images/affiliates/1774975761941-51AnyA1ci5L._AC_SL1500_.jpg",
    bestFor: "Best classic milky linear",
    summary:
      "The original 'milky' linear that started the trend — milky-translucent housing, smooth travel, and a deeper sound than the standard yellow. Drops into any MX-compatible ortho keyboard.",
    pros: ["Reference milky linear", "Smooth travel", "Affordable"],
    cons: ["Less factory lube than newer creamy options"],
    buyNow: getUrl("gateron-milky-yellow-pro-v2"),
  },
  {
    name: "Akko V3 Fairy Linear Silent",
    image: "/V3-Pro-Fairy-Silent.jpg",
    bestFor: "Best creamy silent linear",
    summary:
      "Bridges creamy and silent — a creamy nylon housing with full bottom-out dampening. The right pick if you want creamy acoustics in a shared office.",
    pros: ["Creamy + silent in one switch", "Factory-lubed", "MX-compatible"],
    cons: ["Slightly heavier than Fairy non-silent"],
    buyNow: getUrl("akko-v3-fairy-linear-silent-switch"),
  },
];

const faqItems = [
  {
    question: "What are creamy keyboard switches?",
    answer:
      "Creamy switches use a softer nylon-based housing instead of the harder POM or polycarbonate plastics in standard switches. The nylon dampens the bottom-out and produces a deeper, softer 'creamy' typing sound that enthusiasts associate with premium boards.",
  },
  {
    question: "What is the best creamy switch?",
    answer:
      "The EPOMAKER Creamy Jade is the most-recommended creamy linear for ortho builds. The Akko V3 Creamy Yellow Pro is the budget pick. The Gateron Milky Yellow Pro V2 is the reference 'milky' switch that started the trend.",
  },
  {
    question: "Are creamy switches the same as silent switches?",
    answer:
      "No. Creamy switches sound deeper and softer because of the housing material. Silent switches use internal dampeners to eliminate noise. The Akko V3 Fairy Linear Silent is one of the few switches that combines both.",
  },
  {
    question: "Do creamy switches work with ortholinear keyboards?",
    answer:
      "Yes — every switch on this page uses the standard MX 3-pin or 5-pin form factor, so they drop into hot-swap ortho keyboards like the Planck, Preonic, BM40, CSTC40, ID75, and most other modern ortho builds.",
  },
  {
    question: "Why do creamy switches sound deeper?",
    answer:
      "The nylon housing absorbs more high-frequency sound than POM or polycarbonate housings. Combined with factory lubrication, the result is a typing sound that sits lower in the spectrum — closer to a 'thock' than a 'click'.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Creamy Keyboard Switches",
      url: `${defaultMeta.url}/creamy-keyboard-switches`,
      description:
        "The best creamy mechanical keyboard switches for ortholinear and standard MX hot-swap builds.",
      dateModified: lastUpdated,
    },
    {
      "@type": "ItemList",
      name: "Best Creamy Mechanical Switches",
      itemListElement: switches.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.name,
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

export default function CreamyKeyboardSwitches() {
  return (
    <div>
      <SEOhead
        meta={{
          title: "Creamy Keyboard Switches",
          description:
            "Best creamy mechanical keyboard switches for ortholinear and MX hot-swap builds, including EPOMAKER Creamy Jade, Akko V3 Creamy Yellow Pro, and Gateron Milky Yellow Pro V2.",
          image: `${defaultMeta.url}/images/affiliates/1774975614489-51ZFirv0TwL._SL1500_.jpg`,
          slug: "/creamy-keyboard-switches",
        }}
        keywords="creamy keyboard switches, creamy switches, milky switches, creamy jade, creamy yellow"
        structuredData={structuredData}
      />

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <p className="keyboard-kicker">Updated {lastUpdated}</p>
              <h1 className="display-4 font-weight-bolder">
                Creamy Keyboard Switches
              </h1>
              <p className="lead">
                <strong>Best overall: EPOMAKER Creamy Jade</strong> — the most-recommended
                creamy linear for ortho hot-swap builds, with a deep nylon-housing sound
                and factory-lubed travel.
              </p>
              <p>
                Creamy switches use a softer nylon-based housing that produces a deeper,
                softer typing sound than standard POM-based switches. The result is the
                "creamy" or "thocky" acoustic profile enthusiasts associate with premium
                builds — and every switch on this page drops into a standard MX hot-swap
                ortho keyboard.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="keyboard-hero-panel">
                <p className="keyboard-hero-panel-label">Quick picks</p>
                <ul>
                  <li><strong>Best overall:</strong> EPOMAKER Creamy Jade</li>
                  <li><strong>Best budget:</strong> Akko V3 Creamy Yellow Pro</li>
                  <li><strong>Best classic:</strong> Gateron Milky Yellow Pro V2</li>
                  <li><strong>Best for offices:</strong> Akko V3 Fairy (silent)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="container-lg">
          <h2>Best creamy keyboard switches</h2>

          <table className="table">
            <thead>
              <tr><th>Switch</th><th>Type</th><th>Best For</th><th>Silent</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>EPOMAKER Creamy Jade</strong></td><td>Linear</td><td>Best overall</td><td>No</td></tr>
              <tr><td><strong>Akko V3 Creamy Yellow Pro</strong></td><td>Linear</td><td>Budget</td><td>No</td></tr>
              <tr><td><strong>Gateron Milky Yellow Pro V2</strong></td><td>Linear</td><td>Classic milky</td><td>No</td></tr>
              <tr><td><strong>Akko V3 Fairy Silent</strong></td><td>Linear</td><td>Office use</td><td>Yes</td></tr>
            </tbody>
          </table>

          <div className="row">
            {switches.map((s) => (
              <div className="col-lg-3 col-md-6" key={s.name}>
                <div className="card mb-4 h-100">
                  <img className="card-img-top" src={s.image} alt={s.name} />
                  <div className="card-body">
                    <p className="text-uppercase text-primary mb-2"><strong>{s.bestFor}</strong></p>
                    <h3 className="card-title" style={{ fontSize: "1.2rem" }}>{s.name}</h3>
                    <p>{s.summary}</p>
                    <p className="mb-1"><strong>Pros:</strong> {s.pros.join(", ")}</p>
                    <p><strong>Cons:</strong> {s.cons.join(", ")}</p>
                    <a className="btn btn-primary" href={s.buyNow}>Buy Switches</a>
                  </div>
                </div>
              </div>
            ))}
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
            <li><a href="/types-of-keyboard-switches">Types of keyboard switches explained</a></li>
            <li><a href="/silent-mechanical-keyboard">Silent mechanical keyboard guide</a></li>
            <li><a href="/posts/best-linear-switches-for-your-mechanical-keyboard">Best linear switches</a></li>
            <li><a href="/keyboards">All ortholinear keyboards</a></li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
