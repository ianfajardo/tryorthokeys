import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Link from "next/link";
import Date from "../components/date";

export default function Links() {
  return (
    <div className="ortho-links">
      <div className="bg-secondary">
        <div className="container text-white">
          <div className="row">
            <div className="col-lg-12 text-center">
              
              <a href="/" className="link-image"></a>
              <h1 className="h4 font-weight-bolder text-primary mt-3">
                @tryorthokeys
              </h1>
              <p style={{ fontSize: "14px" }}>
                Ortholinear keyboard guides, news and more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ortho-link-container">
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-12">
              <a
                href="https://www.tryorthokeys.com/keycaps"
                className="btn btn-primary btn-lg btn-block mb-3"
              >
                Ortholinear Keycap List
              </a>
              <a
                href="https://amzn.to/2VRlx4W"
                className="btn btn-primary btn-lg btn-block mb-3"
              >
                Planck - Compact 40% Ortholinear Keyboard
              </a>
              <a
                href="https://amzn.to/2VRlx4W"
                className="btn btn-primary btn-lg btn-block mb-3"
              >
                Planck - Compact 40% Ortholinear Keyboard
              </a>
              <a
                href="https://drop.com/buy/planck-mechanical-keyboard?utm_source=linkshare&referer=T93XGG"
                className="btn btn-primary btn-lg btn-block mb-3"
              >
                Drop: Get $10 when you sign up!
              </a>
              <a
                href="https://www.tryorthokeys.com/posts/budget-keycaps-for-your-ortho-keyboard"
                className="btn btn-primary btn-lg btn-block mb-3"
              >
                Best Budget Keycaps for Your Ortho Keyboard
              </a>
              <a
                href="https://www.tryorthokeys.com/posts/configuring-your-planck-preonic"
                className="btn btn-primary btn-lg btn-block mb-3"
              >
                Configuring your Planck or Preonic with QMK Firmware{" "}
              </a>
              <a
                href="https://www.tryorthokeys.com/keyboards"
                className="btn btn-primary btn-lg btn-block mb-3"
              >
                Learn about Ortho Keyboards
              </a>
              <a
                href="https://www.tryorthokeys.com/posts"
                className="btn btn-primary btn-lg btn-block mb-3"
              >
                Blog
              </a>
            </div>
          </div>
        </div>{" "}
      </div>

      <Footer />
    </div>
  );
}
