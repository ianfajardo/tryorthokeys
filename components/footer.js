import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <div className="container">
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <h3 className="text-primary">Try Ortho Keys!</h3>
            <small className="d-block mb-1 text-muted">© 2020 All Right Reserved</small>
            <small className="d-block mb-3 text-muted">Developed by <a href="https://ianfajardo.com">Ian Fajardo</a></small>
          </div>
          <div className="col-6 col-md">
            <h5>Products</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="https://olkb.com/">OLKB</a></li>
              <li><a className="text-muted" href="https://kbdfans.com/products/fully-assembled-niu40-mechanical-keyboard">NIU40</a></li>
              <li><a className="text-muted" href="https://qmk.fm/">QMK.fm</a></li>
              <li><a className="text-muted" href="https://drop.com">Drop</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Keyboards</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Ortholinear Keyboards</a></li>
              <li><a className="text-muted" href="#">OLKB</a></li>
              <li><a className="text-muted" href="#">Let's Split</a></li>
              <li><a className="text-muted" href="#">NIU40</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Team</a></li>
              <li><a className="text-muted" href="#">Locations</a></li>
              <li><a className="text-muted" href="#">Privacy</a></li>
              <li><a className="text-muted" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer></div>
  );
}
