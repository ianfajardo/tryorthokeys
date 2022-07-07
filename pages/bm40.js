import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function JJ40() {
  return (
    <div>
      <Head>
        <title>
          The BM40 is an 40% ortholinear hotswap keyboard offered by KPRepublic
          that is a similar ortho keyboard to the OLKB Planck | OLKB NIU40 Try
          Ortho Keys Keycaps Mechnical Keyboard.
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="The BM40 is an 40% ortholinear hotswap keyboard offered by KPRepublic that is
          a similar ortho keyboard to the OLKB Planck | OLKB NIU40 Try Ortho
          Keys Keycaps Mechnical Keyboard."
        />
        <meta
          name="description"
          content="The BM40 is an 40% ortholinear hotswap keyboard offered by KPRepublic that is
          a similar ortho keyboard to the OLKB Planck | OLKB NIU40 Try Ortho
          Keys Keycaps Mechnical Keyboard."
        />
      </Head>

      <Navigation />

      <div className="bg-secondary text-white section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1 className="display-4 font-weight-bolder">JJ40</h1>
                <p style={{ fontSize: "20px" }}>
                  The BM40 is an 40% ortholinear hotswap keyboard offered by
                  KPRepublic that is a similar ortho keyboard to the OLKB
                  Planck.
                </p>
                <a
                  href="https://kprepublic.com/products/bm40-rgb-40-hot-swap-custom-mechanical-keyboard-pcb-qmk-underglow-type-c-planck?dt_id=94852"
                  className="mt-3 btn btn-primary mr-2"
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
                  <h2 className="font-weight-bold text-primary">BM40</h2>
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
                    href="https://kprepublic.com/products/bm40-rgb-40-hot-swap-custom-mechanical-keyboard-pcb-qmk-underglow-type-c-planck?dt_id=94852"
                    className="mt-3 btn btn-primary mr-2"
                  >
                    Buy Now
                  </a>
                </div>
                <div className="col-lg-7">
                  <img
                    src="/bm40.jpg"
                    alt="BM40 KPREPUBLIC Keyboard Ortho Orthlinear"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Read Our Blog</h2>
              <p className="lead">
                Catch up on our blog for the latest guides & news for all your
                ortholinear keyboard needs!
              </p>
              <a href="/posts" className="btn btn-primary my-2">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
