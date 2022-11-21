import WellBeingLogo from "../images/wellbeing_logo.jpg";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={WellBeingLogo}
          width="150"
          height="90"
          className="d-inline-block align-top"
          alt="Wellbeing Music logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Jinglebugs</Nav.Link>
          <Nav.Link href="#pricing">Glowbug Parties</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
