import SEOhead from "../components/SEOhead";
import { defaultMeta } from "../lib/pageMeta";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { getUrl } from "../lib/affiliates";

const lastUpdated = "2026-05-01";

const switches = [
  {
    name: "Akko V3 Fairy Linear Silent",
    image: "/V3-Pro-Fairy-Silent.jpg",
    bestFor: "Best silent linear switch overall",
    summary:
      "Smooth linear feel with dampened bottom-out and return. Factory-lubed, fits any 3-pin or 5-pin MX hot-swap socket — including ortho boards like the Planck, Preonic, BM40, and ID75.",
    pros: ["Dampened linear feel", "Factory-lubed", "Wide MX compatibility"],
    cons: ["Slightly heavier than standard linears"],
    buyNow: getUrl("akko-v3-fairy-linear-silent-switch"),
  },
  {
    name: "Akko V3 Penguin Tactile Silent",
    image: "/V3-Pro-Penguin-Silent.jpg",
    bestFor: "Best silent tactile switch",
    summary:
      "Tactile bump with fully silenced bottom-out. The right pick if you want feedback while typing but cannot afford the click. Works in standard MX hot-swap ortho keyboards.",
    pros: ["Tactile feedback", "Silent bottom-out", "MX-compatible"],
    cons: ["Mild tactile bump (not as pronounced as Boba U4T)"],
    buyNow: getUrl("akko-v3-penguin-tactile-silent-switch"),
  },
  {
    name: "Outemu Honey Peach V3 Silent Linear",
    image: "/images/posts/silent-keyboard-switches/71DAW9MQoKL._AC_SL1500_.jpg",
    bestFor: "Best budget silent linear",
    summary:
      "Budget-friendly silent linear with dampened housing. The cheapest path to a quiet ortholinear build. Drop into any hot-swap MX board.",
    pros: ["Aggressive pricing", "Silent linear feel", "Good for first builds"],
    cons: ["Less refined than Akko V3 Fairy"],
    buyNow: getUrl("outemu-honey-peach-v3-silent-linear-switch"),
  },
];

const boards = [
  {
    name: "Epomaker LUMA40",
    image: "/epomaker-luma40-main.webp",
    summary:
      "Tri-mode wireless 40% ortho with low-profile hot-swap. Pair it with silent low-profile switches for one of the quietest ortho builds you can buy.",
    buyNow: getUrl("epomaker-luma40"),
    learnMore: "/epomaker",
  },
  {
    name: "OLKB Planck",
    image: "/planck-eotw-mito-rams.png",
    summary:
      "The classic 40% ortho. Fully hot-swap on current versions, so you can drop in silent switches and silence one of the most-recognized ortho boards on the planet.",
    buyNow: getUrl("olkb-planck-drop-listing"),
    learnMore: "/olkb",
  },
  {
    name: "KBDcraft Israfel",
    image: "/kbdcraft-israfel.webp",
    summary:
      "50% ortho with low-profile design. Soft typing acoustics already baked in — silent switches push it from 'office friendly' to 'genuinely silent'.",
    buyNow: getUrl("kbdcraft-israfel"),
    learnMore: "/kbdcraft",
  },
];

const faqItems = [
  {
    question: "What makes a mechanical keyboard quiet?",
    answer:
      "Three things: silent switches with dampened housings, case dampening (foam, gasket mounting), and thicker PBT keycaps. Silent switches do the heavy lifting — they cut both the bottom-out clack and the return ping that standard switches make.",
  },
  {
    question: "Are silent mechanical switches worth it for an ortholinear keyboard?",
    answer:
      "Yes. Most ortho keyboards (Planck, Preonic, BM40, CSTC40, ID75) are hot-swappable, so you can drop in silent switches without buying a new board. The Akko V3 Fairy is the most-recommended starting point.",
  },
  {
    question: "Are silent switches the same as low-profile switches?",
    answer:
      "No. Silent switches reduce noise via internal dampeners but use the standard MX form factor. Low-profile switches are physically shorter and reduce noise mostly through shorter travel. You can have one, the other, or both.",
  },
  {
    question: "Which is the best silent switch for typing?",
    answer:
      "The Akko V3 Fairy Linear Silent for smooth typing or the Akko V3 Penguin Tactile Silent for tactile feedback with no click. Both work in MX-compatible ortho keyboards.",
  },
  {
    question: "Can I make my Planck silent without replacing switches?",
    answer:
      "Partially. Adding case foam, switch films, and lubed stabilizers will reduce noise meaningfully, but the loudest part of any mechanical keyboard is the switch itself. Silent switches are the real fix.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Silent Mechanical Keyboards",
      url: `${defaultMeta.url}/silent-mechanical-keyboard`,
      description:
        "The quietest mechanical keyboard switches and ortho-friendly boards for offices, shared spaces, and late-night typing.",
      dateModified: lastUpdated,
    },
    {
      "@type": "ItemList",
      name: "Best Silent Mechanical Switches",
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

export default function SilentMechanicalKeyboard() {
  return (
    <div>
      <SEOhead
        meta={{
          title: "Silent Mechanical Keyboards (and Switches) for Ortho Builds",
          description:
            "Best silent mechanical keyboard switches and ortho-friendly boards for offices, shared spaces, and late-night typing. Silent linears, silent tactiles, and quiet ortho prebuilts.",
          image: `${defaultMeta.url}/V3-Pro-Fairy-Silent.jpg`,
          slug: "/silent-mechanical-keyboard",
        }}
        keywords="silent mechanical keyboard, quiet mechanical keyboard, silent switches, silent linear switches, silent tactile switches, ortholinear silent keyboard"
        structuredData={structuredData}
      />

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <p className="keyboard-kicker">Updated {lastUpdated}</p>
              <h1 className="display-4 font-weight-bolder">
                Silent Mechanical Keyboards
              </h1>
              <p className="lead">
                <strong>Best overall pick: Akko V3 Fairy Linear Silent</strong> — dampened
                bottom-out, factory-lubed, and works in any MX-compatible ortho
                keyboard you already own.
              </p>
              <p>
                A truly silent mechanical keyboard is built three ways: silent
                switches do most of the work, case dampening absorbs vibration,
                and thicker PBT keycaps round off the strike. Below are the
                strongest silent switches we recommend, plus ortho boards that
                stay quiet once you drop them in.
              </p>
              <div className="button-cluster mt-3">
                <a className="btn btn-light" href="#switches">See Silent Switches</a>
                <a className="btn btn-outline-light" href="#boards">Quiet Ortho Boards</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="keyboard-hero-panel">
                <p className="keyboard-hero-panel-label">What makes a board quiet</p>
                <ul>
                  <li><strong>Silent switches</strong> — dampened housings cut the click and bottom-out.</li>
                  <li><strong>Case dampening</strong> — foam and gaskets absorb internal vibration.</li>
                  <li><strong>Thicker PBT keycaps</strong> — round off the strike sound.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container" id="switches">
        <div className="container-lg">
          <h2>Best silent mechanical switches</h2>
          <p className="lead">
            Most ortholinear keyboards are hot-swappable, so silent switches are the
            cheapest way to quiet a board you already own. These are the three we recommend most.
          </p>

          <div className="row">
            <div className="col-12">
              <table className="table">
                <thead>
                  <tr>
                    <th>Switch</th>
                    <th>Type</th>
                    <th>Best For</th>
                    <th>MX Compatible</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Akko V3 Fairy Linear Silent</strong></td>
                    <td>Linear</td>
                    <td>Smooth quiet typing</td>
                    <td>Yes (3/5-pin)</td>
                  </tr>
                  <tr>
                    <td><strong>Akko V3 Penguin Tactile Silent</strong></td>
                    <td>Tactile</td>
                    <td>Feedback without click</td>
                    <td>Yes (3/5-pin)</td>
                  </tr>
                  <tr>
                    <td><strong>Outemu Honey Peach V3</strong></td>
                    <td>Linear</td>
                    <td>Budget builds</td>
                    <td>Yes (3/5-pin)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row">
            {switches.map((sw) => (
              <div className="col-lg-4 col-md-6" key={sw.name}>
                <div className="card mb-4 h-100">
                  <img className="card-img-top" src={sw.image} alt={sw.name} />
                  <div className="card-body">
                    <p className="text-uppercase text-primary mb-2"><strong>{sw.bestFor}</strong></p>
                    <h3 className="card-title">{sw.name}</h3>
                    <p>{sw.summary}</p>
                    <p className="mb-1"><strong>Pros:</strong> {sw.pros.join(", ")}</p>
                    <p><strong>Cons:</strong> {sw.cons.join(", ")}</p>
                    <a className="btn btn-primary" href={sw.buyNow}>Buy Switches</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container bg-light" id="boards">
        <div className="container-lg">
          <h2>Quiet ortholinear keyboards to pair with silent switches</h2>
          <p className="lead">
            All three of these boards are hot-swappable — drop in any silent switch above
            and you have a genuinely quiet ortho keyboard.
          </p>

          <div className="row">
            {boards.map((b) => (
              <div className="col-lg-4 col-md-6" key={b.name}>
                <div className="card mb-4 h-100">
                  <img className="card-img-top" src={b.image} alt={b.name} />
                  <div className="card-body">
                    <h3 className="card-title">{b.name}</h3>
                    <p>{b.summary}</p>
                    <a className="btn btn-primary mr-2" href={b.buyNow}>Buy Now</a>
                    {b.learnMore ? (
                      <a className="btn btn-secondary" href={b.learnMore}>Learn More</a>
                    ) : null}
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
            <li><a href="/keyboards">All ortholinear keyboards</a></li>
            <li><a href="/types-of-keyboard-switches">Types of keyboard switches explained</a></li>
            <li><a href="/posts/best-linear-switches-for-your-mechanical-keyboard">Best linear switches</a></li>
            <li><a href="/keycaps">Ortholinear keycap sets</a></li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
