import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

export default function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand className="text-primary font-weight-bolder" href="/">
            Try Ortho Keys!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/keyboards">Ortholinear Keyboards</Nav.Link>
              <NavDropdown title="OLKB Planck & Preonic" id="olkb-nav-dropdown">
                <NavDropdown.Item href="/olkb">
                  About the Keyboards
                </NavDropdown.Item>
                <NavDropdown.Item href="/configure">
                  Configuring your Keyboard
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/split">Split</Nav.Link>
              <Nav.Link href="/niu40">NIU40</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
