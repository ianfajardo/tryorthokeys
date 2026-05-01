import SEOhead from "../components/SEOhead";
import { defaultMeta } from "../lib/pageMeta";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { getUrl } from "../lib/affiliates";

const lastUpdated = "2026-05-01";

const types = [
  {
    type: "Linear",
    feel: "Smooth top to bottom",
    sound: "Quiet to medium",
    bestFor: "Gaming, fast typing, ortho 40% boards",
    examples: "Gateron Yellow, Cherry MX Red, EPOMAKER Creamy Jade",
  },
  {
    type: "Tactile",
    feel: "Bump partway through travel",
    sound: "Medium",
    bestFor: "Long typing sessions, programming",
    examples: "Holy Panda, Boba U4T, Cherry MX Brown",
  },
  {
    type: "Clicky",
    feel: "Sharp tactile bump + audible click",
    sound: "Loud",
    bestFor: "Solo desks, typewriter feel",
    examples: "Cherry MX Blue, Kailh Box Jade",
  },
  {
    type: "Silent Linear",
    feel: "Smooth with dampened bottom-out",
    sound: "Very quiet",
    bestFor: "Shared offices, late-night typing",
    examples: "Akko V3 Fairy, Outemu Honey Peach",
  },
  {
    type: "Silent Tactile",
    feel: "Tactile bump + dampened bottom-out",
    sound: "Quiet",
    bestFor: "Office typing with feedback",
    examples: "Akko V3 Penguin",
  },
  {
    type: "Magnetic / Hall Effect",
    feel: "Smooth, no contact wear",
    sound: "Medium",
    bestFor: "Competitive gaming, adjustable actuation",
    examples: "Gateron Magnetic Jade, SteelSeries OmniPoint",
  },
];

const recommended = [
  {
    name: "Gateron Yellow",
    type: "Linear",
    image: "/akko-switch-review.jpg",
    summary: "The most-recommended budget linear. Smooth, factory-lubed, fits any MX-compatible ortho keyboard.",
    buyNow: getUrl("gateron-yellow-switches"),
  },
  {
    name: "Glorious Panda",
    type: "Tactile",
    image: "/glorious-panda.webp",
    summary: "Pre-tuned tactile with sharp bump and deep sound. The most accessible 'enthusiast tactile' on the market.",
    buyNow: getUrl("glorious-panda-switches"),
  },
  {
    name: "Akko V3 Fairy Silent",
    type: "Silent linear",
    image: "/V3-Pro-Fairy-Silent.jpg",
    summary: "Best silent linear for offices and shared spaces. Drops into any MX hot-swap ortho board.",
    buyNow: getUrl("akko-v3-fairy-linear-silent-switch"),
  },
  {
    name: "EPOMAKER Creamy Jade",
    type: "Creamy linear",
    image: "/images/affiliates/1774975614489-51ZFirv0TwL._SL1500_.jpg",
    summary: "Soft nylon housing and factory lube produce the deeper 'creamy' sound enthusiasts associate with premium builds.",
    buyNow: getUrl("epomaker-creamy-jade"),
  },
];

const faqItems = [
  {
    question: "What are the main types of keyboard switches?",
    answer:
      "Three main families: linear (smooth, no bump), tactile (bump partway through travel), and clicky (tactile + audible click). Within each, you'll find variations like silent, creamy, magnetic, and low-profile. Linear is the most popular in modern ortho builds.",
  },
  {
    question: "What's the difference between linear, tactile, and clicky switches?",
    answer:
      "Linear switches travel smoothly from top to bottom without a bump or click — best for gaming and fast typing. Tactile switches have a bump partway through the press that signals registration — best for typing accuracy. Clicky switches add an audible click on top of the tactile bump.",
  },
  {
    question: "Which switch type is best for ortholinear keyboards?",
    answer:
      "Linear switches are the most common pairing with ortholinear boards because they're smooth and forgiving for fast layer transitions. Tactile switches work well too if you want more typing feedback. Clicky switches are usable but uncommon on ortho boards because the rapid layer-key combinations can sound chaotic.",
  },
  {
    question: "Are silent switches worth it?",
    answer:
      "Yes if you share your space. Silent switches use internal dampeners to reduce both the bottom-out sound and the return ping. The trade-off is a slightly mushier feel — most users adapt within a day.",
  },
  {
    question: "What are creamy or milky switches?",
    answer:
      "Switches with a softer nylon-based housing instead of standard POM. The nylon dampens the strike and produces a deeper, softer sound — what enthusiasts call 'creamy' or 'thocky'.",
  },
  {
    question: "What are magnetic or hall-effect switches?",
    answer:
      "Switches that use magnets and Hall sensors instead of physical contact. They allow adjustable actuation depth and rapid trigger features used in competitive gaming. Most ortho keyboards don't currently use them, but availability is growing.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Types of Keyboard Switches Explained",
      author: { "@type": "Organization", name: "Try Ortho Keys" },
      datePublished: lastUpdated,
      dateModified: lastUpdated,
      url: `${defaultMeta.url}/types-of-keyboard-switches`,
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

export default function TypesOfKeyboardSwitches() {
  return (
    <div>
      <SEOhead
        meta={{
          title: "Types of Keyboard Switches Explained",
          description:
            "Linear, tactile, clicky, silent, creamy, and magnetic keyboard switch types explained — feel, sound, best uses, and which fit ortholinear builds.",
          image: `${defaultMeta.url}/akko-switch-review.jpg`,
          slug: "/types-of-keyboard-switches",
        }}
        keywords="types of keyboard switches, keyboard switch types, linear switches, tactile switches, clicky switches, silent switches, magnetic switches"
        structuredData={structuredData}
      />

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <p className="keyboard-kicker">Updated {lastUpdated}</p>
              <h1 className="display-4 font-weight-bolder">
                Types of Keyboard Switches Explained
              </h1>
              <p className="lead">
                <strong>Quick answer:</strong> three main families — linear (smooth),
                tactile (bump), clicky (bump + click). Variations include silent, creamy
                (deeper sound), and magnetic (gaming). Linear is the most popular pairing
                with ortholinear keyboards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="container-lg">
          <h2>Comparison: every keyboard switch type</h2>
          <table className="table">
            <thead>
              <tr><th>Type</th><th>Feel</th><th>Sound</th><th>Best For</th><th>Examples</th></tr>
            </thead>
            <tbody>
              {types.map((t) => (
                <tr key={t.type}>
                  <td><strong>{t.type}</strong></td>
                  <td>{t.feel}</td>
                  <td>{t.sound}</td>
                  <td>{t.bestFor}</td>
                  <td>{t.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-container bg-light">
        <div className="container-lg">
          <h2>How each switch type feels in detail</h2>

          <h3>Linear switches</h3>
          <p>
            Linear switches travel smoothly from the top of the press to the bottom
            without any bump or click. The most popular type for modern mechanical
            builds, especially ortho boards where fast layer-key transitions reward a
            consistent travel. Examples include Gateron Yellow, Cherry MX Red, and the
            growing 'creamy' family like the EPOMAKER Creamy Jade.
          </p>

          <h3>Tactile switches</h3>
          <p>
            Tactile switches add a noticeable bump partway through the press. The
            bump signals that the keypress has registered, which makes typing feel more
            deliberate. Tactile is the right pick for long writing or coding sessions.
            Holy Panda, Boba U4T, and Cherry MX Brown are common examples.
          </p>

          <h3>Clicky switches</h3>
          <p>
            Clicky switches are tactile switches with an audible click added — usually
            from a click bar or click jacket inside the housing. The most expressive
            switch family but loud enough that they're better for solo desks than
            shared spaces. Cherry MX Blue and Kailh Box Jade are classic clicky picks.
          </p>

          <h3>Silent switches</h3>
          <p>
            Silent switches use rubber dampeners inside the housing to absorb the
            bottom-out sound and the return ping. The trade-off is a slightly softer,
            mushier feel — most typists adapt quickly. Akko V3 Fairy (linear) and Akko V3
            Penguin (tactile) are the best modern silent options.
          </p>

          <h3>Creamy / milky switches</h3>
          <p>
            Creamy switches use a softer nylon-based housing instead of harder POM.
            The nylon dampens the strike and produces the deeper, softer sound enthusiasts
            associate with premium builds. The Gateron Milky Yellow started the trend; the
            EPOMAKER Creamy Jade and Akko V3 Creamy Yellow are the modern picks.
          </p>

          <h3>Magnetic / hall-effect switches</h3>
          <p>
            Magnetic switches use magnets and Hall sensors instead of mechanical contact.
            That means adjustable actuation depth — you can set how far the key needs to
            travel to register — and features like rapid trigger for competitive gaming.
            Adoption in ortho boards is still small but growing.
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="container-lg">
          <h2>One safe pick from each major switch type</h2>
          <div className="row">
            {recommended.map((r) => (
              <div className="col-lg-3 col-md-6" key={r.name}>
                <div className="card mb-4 h-100">
                  <img className="card-img-top" src={r.image} alt={r.name} />
                  <div className="card-body">
                    <p className="text-uppercase text-primary mb-2"><strong>{r.type}</strong></p>
                    <h3 className="card-title" style={{ fontSize: "1.2rem" }}>{r.name}</h3>
                    <p>{r.summary}</p>
                    <a className="btn btn-primary" href={r.buyNow}>Buy Switches</a>
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
            <li><a href="/posts/best-linear-switches-for-your-mechanical-keyboard">Best linear switches</a></li>
            <li><a href="/creamy-keyboard-switches">Creamy keyboard switches</a></li>
            <li><a href="/silent-mechanical-keyboard">Silent mechanical keyboard guide</a></li>
            <li><a href="/keyboards">All ortholinear keyboards</a></li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
