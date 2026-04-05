import { useState } from "react";
import Table from "react-bootstrap/Table";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import SEOhead from "../components/SEOhead";
import SpecialDeals from "../components/specialdeals";
import { defaultMeta } from "../lib/pageMeta";
import { getUrl } from "../lib/affiliates";

const meta = {
  title: "Keyboard Deals and Discounts | Mechanical Keyboard Coupons",
  metatitle:
    "Keyboard Deals and Discounts | Mechanical Keyboard Coupons | Ortholinear Keyboard Deals",
  description:
    "Browse mechanical keyboard deals, coupon codes, and discount links for ortholinear boards, keycaps, and keyboard gear. Filter deals by category and offer type.",
  image: "/tryorthokeys.jpg",
  slug: "/deals",
};

const deals = [
  {
    slug: "kbdcraft",
    name: "KBDcraft",
    category: "Keyboards",
    offerType: "Sale",
    savings: "Buy 1 5% off, Buy 2 10% off, Buy 3+ 15% off",
    code: null,
    link: getUrl('kbdcraft-store'),
    badge: "Best starter ortho deal",
    description:
      "KBDcraft Easter sale with tiered discounts. The more you buy, the more you save on their brick-built keyboard kits.",
    status: "Active",
  },
  {
    slug: "kprepublic",
    name: "KPrepublic",
    category: "Keyboards",
    offerType: "Coupon code",
    savings: "$5 off orders over $15",
    code: "TRY_ORTHO_KEYS",
    link: getUrl('kprepublic-store-try-ortho-keys'),
    badge: "Best budget parts deal",
    description:
      "Useful for lower-cost ortho parts, switches, plates, and budget-friendly boards like the BM40 and CSTC40.",
    status: "Active",
  },
  {
    slug: "drop",
    name: "Drop",
    category: "Keyboards",
    offerType: "Referral offer",
    savings: "$10 off your first order",
    code: null,
    link: getUrl("https://drop.com/?referer=T93XGG"),
    badge: "Good for first-time buyers",
    description:
      "Best if you are eyeing a Planck, Preonic, or keycap set and have not ordered from Drop before.",
    status: "Active",
  },
  {
    slug: "work-louder",
    name: "Work Louder",
    category: "Keyboards",
    offerType: "Affiliate link",
    savings: "XYZ Work Board r2 pre-order",
    code: null,
    link: getUrl('work-louder-xyz-work-board-r2'),
    badge: "Best creative workflow board",
    description:
      "Work Louder's current keyboard is the XYZ Work Board r2, an Alice-inspired split 40% board listed as in production for April 2026.",
    status: "Pre-order",
  },
  {
    slug: "akko",
    name: "Akko",
    category: "Accessories",
    offerType: "Coupon code",
    savings: "Free delivery",
    code: "USFREE",
    link: getUrl('akko-deals-page'),
    badge: "Free shipping savings",
    description:
      "Get free delivery on your Akko order with code USFREE. A good deal if you are pairing a new board with switches, caps, or other keyboard accessories.",
    status: "Active",
  },
  {
    slug: "fkcaps",
    name: "FKcaps",
    category: "Keycaps",
    offerType: "Affiliate discount",
    savings: "10% off custom keycaps",
    code: "Use our link",
    link: getUrl('fkcaps-custom-keycaps'),
    badge: "Best custom keycap deal",
    description:
      "Strong option if you want a set that matches an ortholinear layout without settling for a generic kit.",
    status: "Active",
  },
  {
    slug: "kbdfans",
    name: "KBDFans",
    category: "Keyboards",
    offerType: "Shipping discount",
    savings: "$6 off shipping on orders over $65",
    code: "Wafflebetter",
    link: getUrl('kbdfans-weekin-y-40-diy-kit'),
    badge: "Useful for larger orders",
    description:
      "Best when you are picking up a kit, switches, and accessories together and shipping costs start to climb.",
    status: "Active",
  },
];

const quickDealPicks = [
  {
    label: "Best Ortho Starter Deal",
    dealSlug: "kbdcraft",
    reason: "It is the easiest discount to recommend to someone getting into ortholinear boards without overspending.",
  },
  {
    label: "Best Budget Parts Deal",
    dealSlug: "kprepublic",
    reason: "Good fit if you are piecing together a board or trying ortho without committing to premium pricing.",
  },
  {
    label: "Best Customization Deal",
    dealSlug: "fkcaps",
    reason: "Ortholinear layouts benefit from better-fitting keycap sets, and this is one of the cleaner discounts on that front.",
  },
];

const relatedGuides = [
  {
    title: "What to do after getting your first ortholinear keyboard",
    href: "/posts/what-to-do-after-getting-an-ortholinear-keyboard",
    image: "/first-ortholinear-board.png",
  },
  {
    title: "Best budget keycaps for your ortho keyboard",
    href: "/posts/budget-keycaps-for-your-ortho-keyboard",
    image: "/best-budget-keycaps-ortho-keyboard.png",
  },
  {
    title: "Ortholinear keyboards worth considering",
    href: "/keyboards",
    image: "/plank-preonic.jpg",
  },
];

const faqItems = [
  {
    question: "What is the best mechanical keyboard deal on this page?",
    answer:
      "If you want the most useful ortho-specific starting point, the KBDcraft discount is the easiest one to recommend. If you are piecing together a budget build, KPrepublic is usually the better fit.",
  },
  {
    question: "Do these keyboard deals change often?",
    answer:
      "Yes. Some are stable affiliate discounts, while others depend on store promotions, membership perks, or shipping thresholds. The page is organized so you can scan active offers quickly.",
  },
  {
    question: "Are these affiliate links?",
    answer:
      "Some of them are. Try Ortho Keys may earn a commission when you purchase through qualifying links, which helps support the site.",
  },
];

const dealTypeClass = {
  "Coupon code": "is-accent",
  "Affiliate discount": "is-accent",
  "Affiliate link": "is-warning",
  "Referral offer": "is-success",
  "Membership savings": "is-warning",
  "Shipping discount": "is-muted",
  "Sale": "is-success",
};

export default function Deals() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [offerTypeFilter, setOfferTypeFilter] = useState("all");

  const filteredDeals = deals.filter((deal) => {
    const matchesSearch =
      searchTerm.trim() === "" ||
      [deal.name, deal.description, deal.savings, deal.badge, deal.category]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase());

    const matchesCategory =
      categoryFilter === "all" || deal.category === categoryFilter;
    const matchesOfferType =
      offerTypeFilter === "all" || deal.offerType === offerTypeFilter;

    return matchesSearch && matchesCategory && matchesOfferType;
  });

  const quickPicks = quickDealPicks
    .map((pick) => ({
      ...pick,
      deal: deals.find((deal) => deal.slug === pick.dealSlug),
    }))
    .filter((pick) => pick.deal);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Keyboard Deals and Discounts",
        url: `${defaultMeta.url}/deals`,
        description:
          "Browse mechanical keyboard discounts, coupon codes, and deal links for ortholinear keyboards, keycaps, and accessories.",
        dateModified: "2026-04-04",
        mainEntity: {
          "@type": "ItemList",
          itemListElement: deals.map((deal, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: deal.name,
            url: `${defaultMeta.url}/deals#${deal.slug}`,
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
      <SEOhead meta={meta} structuredData={structuredData} />

      <Navigation />

      <div className="section-container text-white deals-jumbo">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="py-3 deals-hero-copy">
                <p className="keyboard-kicker">Updated April 4, 2026</p>
                <h1 className="display-5 font-weight-bolder">
                  Keyboard deals worth checking first
                </h1>
                <p className="lead">
                  This page is built for fast scanning. Filter the offers by
                  category or deal type, jump into the strongest discounts, and
                  use the summary table below if you only want the codes and
                  links.
                </p>
                <div className="button-cluster mt-4">
                  <a className="btn btn-light" href="#deal-finder">
                    Browse Deals
                  </a>
                  <a className="btn btn-outline-light" href="/keyboards">
                    Compare Keyboards
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="deals-hero-panel">
                <p className="keyboard-hero-panel-label">Quick advice</p>
                <h2>Buy the board first, then optimize the extras.</h2>
                <p>
                  If you are just starting, prioritize discounts on the keyboard
                  itself. Accessories and custom keycaps matter more after you
                  know the layout you actually want to keep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="deals-section" id="deal-finder">
        <div className="row">
          <div className="col-12">
            <div className="keyboard-help-card deals-intro-card mb-4">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <p className="keyboard-kicker text-primary mb-2">
                    How to use this page
                  </p>
                  <h2>Start with the offers that match what you are buying.</h2>
                  <p className="mb-0">
                    If you are buying your first ortholinear board, focus on
                    keyboard deals first. If you already own a board, keycap,
                    switch, and accessory discounts usually become more useful.
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="button-cluster justify-content-lg-end mt-3 mt-lg-0">
                    <a className="btn btn-primary" href="/posts">
                      Read Buying Guides
                    </a>
                    <a className="btn btn-secondary" href="/configure">
                      Learn QMK and VIA
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row deals-quick-picks">
          {quickPicks.map((pick) => (
            <div className="col-lg-4 col-md-6" key={pick.label}>
              <div className="deals-pick-card">
                <p className="keyboard-pick-label">{pick.label}</p>
                <h2>{pick.deal.name}</h2>
                <p>{pick.reason}</p>
                <div className="keyboard-badge-row">
                  <span className="keyboard-badge is-accent">
                    {pick.deal.category}
                  </span>
                  <span className="keyboard-badge">
                    {pick.deal.offerType}
                  </span>
                </div>
                <a className="btn btn-sm btn-primary mt-3" href={`#${pick.deal.slug}`}>
                  Jump to deal
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="deals-highlight-block mb-4">
          <SpecialDeals col="col-lg-6 col-md-6" />
        </div>

        <div className="deals-controls mb-4">
          <div className="deals-controls-grid">
            <div className="form-group mb-0">
              <label className="keyboard-filter-label" htmlFor="deal-search">
                Search
              </label>
              <input
                id="deal-search"
                className="form-control"
                type="search"
                placeholder="KBDcraft, keycaps, coupon..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>

            <div className="form-group mb-0">
              <label className="keyboard-filter-label" htmlFor="deal-category">
                Category
              </label>
              <select
                id="deal-category"
                className="form-control"
                value={categoryFilter}
                onChange={(event) => setCategoryFilter(event.target.value)}
              >
                <option value="all">All categories</option>
                <option value="Keyboards">Keyboards</option>
                <option value="Keycaps">Keycaps</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            <div className="form-group mb-0">
              <label className="keyboard-filter-label" htmlFor="deal-type">
                Offer type
              </label>
              <select
                id="deal-type"
                className="form-control"
                value={offerTypeFilter}
                onChange={(event) => setOfferTypeFilter(event.target.value)}
              >
                <option value="all">All deal types</option>
                <option value="Coupon code">Coupon code</option>
                <option value="Affiliate discount">Affiliate discount</option>
                <option value="Affiliate link">Affiliate link</option>
                <option value="Referral offer">Referral offer</option>
                <option value="Sale">Sale</option>
                <option value="Shipping discount">Shipping discount</option>
              </select>
            </div>
          </div>

          <div className="deals-toolbar-meta">
            <p className="mb-0">
              Showing <strong>{filteredDeals.length}</strong>{" "}
              {filteredDeals.length === 1 ? "deal" : "deals"}.
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
                  setCategoryFilter("all");
                  setOfferTypeFilter("all");
                }}
              >
                Reset filters
              </button>
            </div>
          </div>
        </div>

        {filteredDeals.length === 0 ? (
          <div className="deals-empty-state card">
            <div className="card-body">
              <h2>No deals matched that combination.</h2>
              <p className="mb-0">
                Clear one of the filters to bring the full list back.
              </p>
            </div>
          </div>
        ) : (
          <div className="row deals-results-grid">
            {filteredDeals.map((deal) => (
              <div id={deal.slug} className="col-lg-4 col-md-6" key={deal.slug}>
                <div className="deals-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="keyboard-card-top">
                        <span className="keyboard-badge is-accent">
                          {deal.badge}
                        </span>
                        <span
                          className={`keyboard-badge ${
                            dealTypeClass[deal.offerType] || ""
                          }`}
                        >
                          {deal.offerType}
                        </span>
                      </div>
                      <h2 className="card-title">{deal.name}</h2>
                      <div className="keyboard-badge-row">
                        <span className="keyboard-badge">{deal.category}</span>
                        <span className="keyboard-badge is-success">
                          {deal.status}
                        </span>
                        {deal.code ? (
                          <span className="keyboard-badge is-muted">
                            Code: {deal.code}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <p className="card-text">{deal.description}</p>
                      <div className="deals-savings">
                        <span className="deals-savings-label">Offer</span>
                        <strong>{deal.savings}</strong>
                      </div>
                      <div className="keyboard-card-actions">
                        <a href={deal.link} className="btn btn-primary">
                          Get Deal
                        </a>
                      </div>
                    </div>
                    <div className="card-footer text-muted">
                      {deal.code ? (
                        <>
                          <strong>Code:</strong> {deal.code}
                        </>
                      ) : (
                        <>
                          <strong>Offer:</strong> No code needed
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="card ele-2 deals-table-card mt-4">
          <div className="px-4 px-lg-5 py-4 py-lg-5">
            <div className="row">
              <div className="col-lg-12">
                <p className="keyboard-kicker text-primary mb-2">At a glance</p>
                <h2 className="font-weight-bold text-primary">Deal summary table</h2>
                <p className="mb-4">
                  If you already know what store you want, use this table as the
                  fast version.
                </p>

                <Table responsive hover className="deals-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Savings</th>
                      <th>Code</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deals.map((deal) => (
                      <tr key={deal.slug}>
                        <td>{deal.name}</td>
                        <td>{deal.category}</td>
                        <td>{deal.savings}</td>
                        <td>{deal.code || "No code needed"}</td>
                        <td>
                          <a href={deal.link}>Open deal</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

                <p className="mb-0">
                  <small>
                    Try Ortho Keys is reader-supported. When you buy through
                    links on our site, we may earn an affiliate commission.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-container deals-guide-band">
          <div className="container-lg px-0">
            <div className="row deals-guide-grid">
              <div className="col-lg-4 col-md-6">
                <div className="keyboard-help-card">
                  <p className="keyboard-kicker text-primary mb-2">
                    Best use case
                  </p>
                  <h2>Keyboard deals matter most at the start.</h2>
                  <p>
                    If this is your first ortho board, a discount on the board
                    itself usually beats a small savings on accessories.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="keyboard-help-card">
                  <p className="keyboard-kicker text-primary mb-2">
                    Watch the real total
                  </p>
                  <h2>Shipping and extras change the math.</h2>
                  <p>
                    A cheaper keyboard is not always cheaper once you add caps,
                    switches, and shipping. Use the deal page as a shortlist,
                    not the only decision point.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="keyboard-help-card">
                  <p className="keyboard-kicker text-primary mb-2">
                    Custom layouts
                  </p>
                  <h2>Keycap deals get more valuable later.</h2>
                  <p>
                    Once you settle on a layout, discounts on ortholinear-ready
                    keycap sets become much more useful than they are on day
                    one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row card-link-grid deals-related-grid">
          {relatedGuides.map((guide) => (
            <div className="col-lg-4 col-md-6" key={guide.href}>
              <div className="card">
                <div className="card-img-top">
                  <a href={guide.href}>
                    <img className="img-fluid" src={guide.image} alt={guide.title} />
                  </a>
                </div>
                <div className="card-body">
                  <a href={guide.href}>{guide.title}</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card deals-faq mt-4">
          <div className="card-body">
            <p className="keyboard-kicker text-primary mb-2">FAQ</p>
            <h2>Common keyboard deal questions</h2>
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

      <Footer />
    </div>
  );
}
