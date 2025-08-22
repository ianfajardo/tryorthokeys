import Navigation from "../components/navigation";
import Footer from "../components/footer";
import SEOhead from "../components/SEOhead";

export const meta = {
  title: "KPrepublic BM40: Budget 40% ortholinear keyboard from KPrepublic",
  metatitle:
    "KPrepublic BM40: Budget 40% ortholinear keyboard from KPrepublic | 40 percent keyboard ortho keyboard ortholinear keyboard hot swap",
  description:
    "The BM40 a 40% ortholinear layout similar to the Planck keyboard. It has a hot-swap pcb, rgb lighting, and more. A great budget Planck alternative. Configurable through VIA software.",
  image: "/BM40.jpg",
  slug: "/kprepublic-BM40",
};

export default function BM40() {
  return (
    <div> 
      <SEOhead meta={meta} />

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">
                  KPrepublic BM40
                </h1>
                <p style={{ fontSize: "20px" }}>
                  The KPrepublic BM40 is a 40% ortholinear layout with VIA/QMK compatability, hot-swap sockets, full RGB LED switches, and a type-c port. You can also purchase a <a href="https://kprepublic.com/products/anodized-aluminium-jj40-bm40-flat-case-metal-feet-black-sliver-grey-for-40-mini?dt_id=94852&_pos=2&_sid=42b505c2f&_ss=r">case</a> and <a href="https://kprepublic.com/products/carbon-fiber-plate-for-jj40-bm40-40-custom-keyboard-mechanical-keyboard-plate-support-mx-edition?dt_id=94852&_pos=3&_sid=42b505c2f&_ss=r">plate</a> seperately.
                </p>
                <a
                  href="https://kprepublic.com/search?q=bm40&dt_id=94852"
                  className="mt-3 btn btn-primary"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>{/* ad space */}</div>

      <div className="section-container ">
        <div className="container">
          <div className="card ele-2">
            <div className="px-5 py-5 py-lg-5">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <h2 className="font-weight-bold text-primary">
                    KPrepublic BM40
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    The BM40 is an 40% ortholinear hotswap keyboard offered by
                    KPRepublic that is a similar ortho keyboard to the{" "}
                    <a href="/olkb">OLKB Planck</a>. Compared to the{" "}
                    <a href="/jj40">JJ40</a> keyboard also offered, the BM40 is
                    compatible with QMK and hotswappable. KPRepublic offers
                    different options for cases and the site mentions the pcb is
                    compatible with Planck cases as well.
                  </p>
                  <a
                    href="https://kprepublic.com/search?q=bm40&dt_id=94852"
                    className="btn btn-primary mr-2"
                  >
                    Buy Now
                  </a>
                  <a href="https://caniusevia.com/" className="btn btn-link">
                    VIA Download
                  </a>
                </div>
                <div className="col-lg-7">
                  <img
                    src="/BM40.jpg"
                    alt="KPrepublic BM40"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Videos</h2>
              <div className="usa-embed-container">
                <iframe
                  src="https://www.youtube.com/embed/o9-FDgUPa_Y"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
