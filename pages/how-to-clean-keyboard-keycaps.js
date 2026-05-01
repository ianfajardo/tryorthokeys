import SEOhead from "../components/SEOhead";
import { defaultMeta } from "../lib/pageMeta";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { getUrl } from "../lib/affiliates";

const lastUpdated = "2026-05-01";

const supplies = [
  {
    name: "Keycap Puller and Brushes",
    image: "/keycap-puller.jpg",
    bestFor: "Removing keycaps without damage",
    summary:
      "Wire keycap puller plus a fine brush. Wire pullers don't scratch the sides of keycaps the way ring pullers do.",
    buyNow: getUrl("keycap-puller-and-brushes"),
  },
  {
    name: "Hagibis Cleaning Brush",
    image: "/hagibis-cleaning-brush.jpg",
    bestFor: "Soft-bristle brushing between rows",
    summary:
      "A multi-tool with a soft brush, vacuum, and a small scraper for crud between switches. Most useful for boards you don't want to fully disassemble.",
    buyNow: getUrl("hagibis-cleaning-soft-brush-keyboard-cleaner"),
  },
  {
    name: "Falcon Dust Compressed Air",
    image: "/falcon.jpg",
    bestFor: "Removing dust from PCB and switch housings",
    summary:
      "Standard canned air. Use short bursts at a 45-degree angle, not directly into switch housings, to avoid pushing dust deeper.",
    buyNow: getUrl("falcon-dust-compressed-air"),
  },
  {
    name: "Dust Cleaning Gel",
    image: "/dust-cleaning-gel.jpg",
    bestFor: "Picking up dust between caps in place",
    summary:
      "Sticky cleaning putty that lifts dust from areas a brush misses. The right tool when you want a quick clean without removing keycaps.",
    buyNow: getUrl("dust-cleaning-gel"),
  },
  {
    name: "Microfiber Cleaning Cloths",
    image: "/microfiber.jpg",
    bestFor: "Wiping keycaps after washing",
    summary:
      "Soft microfiber cloths for drying keycaps after a soap-and-water bath. Don't use paper towels — they leave fibers.",
    buyNow: getUrl("microfiber-cleaning-cloths"),
  },
];

const faqItems = [
  {
    question: "How do you clean keyboard keycaps?",
    answer:
      "Pull the keycaps with a wire keycap puller, soak them in warm water with a few drops of dish soap for 30–60 minutes, agitate gently, rinse, and air-dry on a microfiber cloth for 4–6 hours. Don't put them back wet — water trapped in stems can corrode the switches.",
  },
  {
    question: "Can you wash keycaps in the dishwasher?",
    answer:
      "Technically yes for PBT keycaps with no rubber legends, but not recommended. Heat can warp keycaps and the high-pressure spray can damage legends. Hand-wash with mild dish soap is safer.",
  },
  {
    question: "How often should you clean your mechanical keyboard?",
    answer:
      "Light surface clean every 2 weeks (compressed air + brush), full keycap removal and wash every 3–6 months depending on use. Deep clean (open the case, dust the PCB) once or twice a year.",
  },
  {
    question: "What should you NOT use to clean keycaps?",
    answer:
      "Avoid alcohol on ABS keycaps — it can dissolve legends. Don't use bleach or strong solvents. Don't put keycaps with rubber feet, padding, or screen-printed legends through any prolonged soak. And never put switches or the PCB in water.",
  },
  {
    question: "How do you clean keycaps without removing them?",
    answer:
      "Compressed air at 45 degrees, soft brush between rows, then dust cleaning gel pressed gently into the gaps. For oils and shine on the tops, a microfiber cloth lightly damped with water (no soap) works well. Full removal is still recommended every few months for a real clean.",
  },
];

const steps = [
  {
    n: 1,
    title: "Take a photo of your layout",
    body: "Before pulling any keycaps, photograph your keyboard. It's the fastest way to put everything back in the right spot — especially on ortho boards with custom layers.",
  },
  {
    n: 2,
    title: "Pull keycaps with a wire puller",
    body: "Wire pullers grip the underside of the keycap and don't scratch the sides. Pull straight up. For stabilized keys (spacebar, longer modifiers), pull both ends evenly.",
  },
  {
    n: 3,
    title: "Soak in warm soapy water",
    body: "Drop the keycaps in warm water with a few drops of dish soap. Soak 30–60 minutes. Agitate the bowl gently a few times to dislodge anything stuck.",
  },
  {
    n: 4,
    title: "Rinse and air-dry",
    body: "Rinse with clean warm water, lay caps face-down on a microfiber cloth, and air-dry at least 4–6 hours. Make sure no water is sitting inside the stems before reattaching.",
  },
  {
    n: 5,
    title: "Clean the board itself",
    body: "While caps dry, brush the exposed switches and PCB with a soft brush. Use compressed air at 45 degrees, not directly into switch housings. Dust gel can lift anything the brush misses.",
  },
  {
    n: 6,
    title: "Reattach and test every key",
    body: "Press each keycap straight down until you feel it click into place. Then type through the layout to confirm every key registers — especially on ortho boards where missed keys are easier to overlook.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "How to Clean Keyboard Keycaps",
      description: "Step-by-step guide to safely cleaning mechanical keyboard keycaps without damaging legends or stems.",
      datePublished: lastUpdated,
      step: steps.map((s) => ({
        "@type": "HowToStep",
        position: s.n,
        name: s.title,
        text: s.body,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function HowToCleanKeyboardKeycaps() {
  return (
    <div>
      <SEOhead
        meta={{
          title: "How to Clean Keyboard Keycaps",
          description:
            "Step-by-step guide to safely cleaning mechanical keyboard keycaps. What to use, what to avoid, and the supplies you actually need.",
          image: `${defaultMeta.url}/keycap-puller.jpg`,
          slug: "/how-to-clean-keyboard-keycaps",
        }}
        keywords="how to clean keyboard keycaps, clean keycaps, keycap cleaning, mechanical keyboard cleaning"
        structuredData={structuredData}
      />

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <p className="keyboard-kicker">Updated {lastUpdated}</p>
              <h1 className="display-4 font-weight-bolder">
                How to Clean Keyboard Keycaps
              </h1>
              <p className="lead">
                <strong>Quick answer:</strong> pull keycaps with a wire puller, soak in
                warm soapy water for 30–60 minutes, rinse, and air-dry on a microfiber
                cloth for 4–6 hours before reattaching. Don't use alcohol on ABS keycaps,
                and never put switches or PCB in water.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="container-lg">
          <h2>Step-by-step keycap cleaning guide</h2>
          <ol>
            {steps.map((s) => (
              <li key={s.n} className="mb-3">
                <strong>{s.title}</strong>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="section-container bg-light">
        <div className="container-lg">
          <h2>Supplies you'll actually use</h2>
          <div className="row">
            {supplies.map((s) => (
              <div className="col-lg-4 col-md-6" key={s.name}>
                <div className="card mb-4 h-100">
                  <div className="card-body">
                    <p className="text-uppercase text-primary mb-2"><strong>{s.bestFor}</strong></p>
                    <h3 className="card-title">{s.name}</h3>
                    <p>{s.summary}</p>
                    <a className="btn btn-primary" href={s.buyNow}>Buy</a>
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
            <li><a href="/posts/5-tips-keep-your-mechanical-keyboard-clean-happy">Maintenance tips</a></li>
            <li><a href="/posts/how-to-remove-keyboard-switches">How to remove keyboard switches</a></li>
            <li><a href="/keycaps">Ortholinear keycap sets</a></li>
            <li><a href="/keyboards">All ortholinear keyboards</a></li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
