import WellBeingLogo from "../images/wellbeing_logo.jpg";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>
          <img
            src={WellBeingLogo}
            width="150"
            height="90"
            className="d-inline-block align-top"
            alt="Wellbeing Music logo"
          />
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/jinglebugs">
            <Nav.Link>Jinglebugs</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/glowbugs">
            <Nav.Link>Glowbug Parties</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
