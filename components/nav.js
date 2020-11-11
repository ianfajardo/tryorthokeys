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
              <Nav.Link href="/olkb">OLKB Planck & Preonic</Nav.Link>
              <Nav.Link href="/split">Split</Nav.Link>
              <Nav.Link href="/niu40">NIU40</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
