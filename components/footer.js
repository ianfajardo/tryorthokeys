import Button from "react-bootstrap/Button";

function getYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <div className="container">
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <img
              className="img-fluid"
              style={{ maxHeight: "45px" }}
              src="/try-ortho-keys-logo-green.png"
              alt="Try Ortho Keys, Ortholinear Keyboards"
            />
            <div className="text-primary mt-3">Try Ortho Keys!</div>
            <small className="d-block mb-1 text-muted">
              © {getYear()} All Right Reserved
            </small>

            <a href="/policies">Privacy Policy & Terms of Use</a>

            <p className="mt-3">
              <small className="text-muted">
                Try Ortho Keys is reader-supported. When you buy through links
                on our site, we may earn an affiliate commission.
              </small>
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5>Why Ortholinear</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a
                  className="text-muted"
                  href="/ultimate-guide-to-ortholinear-keyboards"
                >
                  Ultimate Guide to Ortholinear Keyboards
                </a>
              </li>
              <li>
                <a
                  className="text-muted"
                  href="/posts/best-mechanical-keyboard-for-ipad-planck-preonic-ortholinear"
                >
                  The Best Mechanical Keyboard for your iPad - The OLKB Planck
                  and Preonic
                </a>
              </li>
              <li>
                <a
                  className="text-muted"
                  href="/posts/what-to-do-after-getting-an-ortholinear-keyboard"
                >
                  What to do after getting your first Ortholinear
                </a>
              </li>
              <Button href="/posts" className="btn btn-primary btn-sm mt-2">
                Blog
              </Button>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5>Keyboards</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="/keyboards">
                  Ortholinear Keyboards
                </a>
              </li>
              <li>
                <a className="text-muted" href="/keycaps">
                  Keycaps
                </a>
              </li>
              <li>
                <a className="text-muted" href="/olkb">
                  OLKB
                </a>
              </li>
              <li>
                <a className="text-muted" href="/split">
                  Split
                </a>
              </li>
              <li>
                <a className="text-muted" href="/niu40">
                  NIU40
                </a>
              </li>
              <li>
                <a className="text-muted" href="/id75">
                  ID75
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12"></div>
        </div>
      </footer>
    </div>
  );
}
