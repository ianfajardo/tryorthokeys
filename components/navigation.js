import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faTwitter, faInstagram);

export default function Navigation() {
  return (
    <div>
      <Navbar expand="xl" bg="white" variant="white">
        <Container fluid>
          <Navbar.Brand className="text-primary font-weight-bolder" href="/">
          <img
              className="img-fluid"
              style={{maxHeight: "45px"}}
              src="/try-ortho-keys-logo-green.png"
              alt="Try Ortho Keys, Ortholinear Keyboards"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/ultimate-guide-to-ortholinear-keyboards">
                Ultimate Ortholinear Guide
              </Nav.Link>
              <Nav.Link href="/keycaps">Ortho Keycap Sets</Nav.Link>
              <Nav.Link href="/deals">Keyboard Deals</Nav.Link>
              <NavDropdown title="OLKB Planck & Preonic" id="olkb-nav-dropdown">
                <NavDropdown.Item href="/olkb">
                  About the Keyboards
                </NavDropdown.Item>
                <NavDropdown.Item href="/configure">
                  Configuring your Keyboard
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/worklouder">Work Louder</Nav.Link>
              <NavDropdown title="Other Ortho Keyboards" id="olkb-nav-dropdown">
                <NavDropdown.Item href="/id75">ID75</NavDropdown.Item>
                <NavDropdown.Item href="/gizmo-engineering-gk6">
                  GK6
                </NavDropdown.Item>
                <NavDropdown.Item href="/kinesis">Kinesis</NavDropdown.Item>
                <NavDropdown.Item href="/split">Split</NavDropdown.Item>
                <NavDropdown.Item href="/niu40">NIU40</NavDropdown.Item>
                <NavDropdown.Item href="/bm40">BM40</NavDropdown.Item>
                <NavDropdown.Item href="/jj40">JJ40</NavDropdown.Item>
                <NavDropdown.Item href="/koolertron">
                  Koolertron
                </NavDropdown.Item>
                <NavDropdown.Item href="/keyboards">View All</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <Button href="/posts" className="ml-2" variant="primary">
                Blog
              </Button>
            </Form>
            <a
              className="nav-social"
              href="https://www.twitter.com/tryorthokeys"
            >
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                size="lg"
                className="icon-size ml-auto"
              />
            </a>
            <a
              className="nav-social"
              href="https://www.instagram.com/try_ortho_keys"
            >
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                size="lg"
                className="icon-size ml-auto"
              />
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
