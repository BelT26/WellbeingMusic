import WellBeingLogo from "../images/wm_logo.png";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import JingleBug from "../images/jinglebug.png";
import GlowBug from "../images/glowbug.png";

function Header() {
  return (
    <Navbar
      variant="light"
      expand="lg"
      style={{
        paddingBottom: "10px",
        paddingLeft: "10px",
        backgroundImage:
          "linear-gradient(hsl(230, 45%, 85%), hsl(230, 45%, 99%))",

        border: "none",
      }}
    >
      <LinkContainer to="/">
        <Navbar.Brand>
          <img
            src={WellBeingLogo}
            width="170"
            height="100"
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
              <img src={JingleBug} height={20} alt="jinglebug logo" />
              Jinglebugs
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/glowbugparties">
            <Nav.Link>
              <img src={GlowBug} height={20} alt="glowbug logo" />
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
