import WellBeingLogo from "../images/wellbeing_logo.jpg";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import JingleBug from "../images/jinglebug.jpg";
import GlowBug from "../images/glowbug.jpg";

function Header() {
  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      style={{ marginBottom: "30px" }}
    >
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
            <Nav.Link>
              <img src={JingleBug} height={20} />
              Jinglebugs
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/glowbugs">
            <Nav.Link>
              <img src={GlowBug} height={20} />
              Glowbug Parties
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/wellbeingmusicclub">
            <Nav.Link>Wellbeing Music Club</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/choirs">
            <Nav.Link>Choirs</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
