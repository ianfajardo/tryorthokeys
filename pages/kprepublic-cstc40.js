import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function Cstc40() {
  return (
    <div>
      <Head>
        <title>
          The CSTC40 a 40% ortholinear layout similar to the Planck keyboard. It
          has a hot-swap pcb, rgb lighting, and more. A great budget Planck
          alternative. Configurable through VIA software.
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="KPrepublic CSTC40 - 40% Ortholinear Keyboard | Ortho Keyboard"
        />
        <meta
          name="description"
          content="The KPrepublic CSTC40 a 40% ortholinear layout similar to the Planck keyboard. It has a hot-swap pcb, rgb lighting, and more. A great budget Planck alternative. Configurable through VIA software."
        />
        <meta
          property="og:image"
          content="https://www.tryorthokeys.com/cstc40.jpg"
        />
      </Head>

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">
                  KPrepublic CSTC40
                </h1>
                <p style={{ fontSize: "20px" }}>
                  The KPrepublic CSTC40 a 40% ortholinear layout similar to the
                  Planck keyboard.
                </p>
                <a
                  href="https://collabs.shop/f9rpy8"
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
                    KPrepublic CSTC40
                  </h2>
                  <p style={{ fontSize: "20px" }}>
                    The KPrepublic CSTC40 a 40% ortholinear layout similar to
                    the Planck keyboard. It has a hot-swap pcb, rgb lighting,
                    and more. A great budget Planck alternative. Configurable
                    through VIA software.
                  </p>
                  <a
                    href="https://collabs.shop/f9rpy8"
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
                    src="/cstc40.jpg"
                    alt="KPrepublic CSTC40"
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
                  src="https://www.youtube.com/embed/0lgxoMhYrcE"
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
