import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import SEOhead from "../components/SEOhead";

export const meta = {
  title:
    "KPrepublic DNA59 Designed with a 2u spacebar and 58 1u keys referencing the Preonic layout",
  metatitle:
    "KPrepublic DNA59: Designed with a 2u spacebar and 58 1u keys referencing the Preonic layout",
  description:
    "The KPrepublic DNA59 a 40% ortholinear layout similar to the Planck keyboard. It has a hot-swap pcb, rgb lighting, and more. A great budget Planck alternative. Configurable through VIA software.",
  image: "/dna59.jpg",
  slug: "/kprepublic-dna59",
};

export default function Dna59() {
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
                  KPrepublic DNA59
                </h1>
                <p style={{ fontSize: "20px" }}>
                  The DNA59 is designed with a 2u spacebar and 58 1u keys
                  referencing the Preonic layout.
                </p>
                <a
                  href="https://collabs.shop/ajjcnp"
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
                    KPrepublic DNA59
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    The DNA59 is designed with a 2u spacebar and 58 1u keys
                    referencing the Preonic layout. It has an acrylic case,
                    hot-swap pcb, rgb lighting and more. A great budget Preonic
                    alternative. It does not support VIA or QMK and uses their
                    own software.
                  </p>
                  <a
                    href="https://collabs.shop/ajjcnp"
                    className="btn btn-primary mr-2"
                  >
                    Buy Now
                  </a>
                </div>
                <div className="col-lg-7">
                  <img
                    src="/dna59.jpg"
                    alt="KPrepublic DNA59"
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
                  src="https://www.youtube.com/embed/PHxV4UUZN5M"
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
