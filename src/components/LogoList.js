import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "./Logo";
import BarchesterHealthcare from "../images/logos/barchester_healthcare.jpg";
import BramblyHouse from "../images/logos/brambly_house.jpg";
import CountyCare from "../images/logos/county_care.jpg";
import DaisyChain from "../images/logos/daisy_chain.jpg";
import HBC from "../images/logos/hbc.jpg";
import Include from "../images/logos/include.jpg";
import MissingPeople from "../images/logos/missing_people.png";
import NHS from "../images/logos/nhs_sash.png";
import ReigateCouncil from "../images/logos/reigate_council.png";
import RenewedHope from "../images/logos/renewed_hope.png";
import SurreyCouncil from "../images/logos/surrey_council.png";
import WoodHatch from "../images/logos/woodhatch.png";
import "../pages/Home.css";

const companyLogos = [
  {
    description: "Barchester Healthcare Logo",
    image: BarchesterHealthcare,
    key: "BHC",
  },
  { description: "Brambley House Logo", image: BramblyHouse, key: "BRH" },
  { description: "County Care Logo", image: CountyCare, key: "CC" },
  { description: "Daisy Chain Logo", image: DaisyChain, key: "DC" },
  { description: "HBC Logo", image: HBC, key: "HBC" },
  { description: "Include Logo", image: Include, key: "INC" },
  { description: "Missing People Logo", image: MissingPeople, key: "MP" },
  { description: "NHS Logo", image: NHS, key: "NHS" },
  { description: "Reigate Council Logo", image: ReigateCouncil, key: "RC" },
  { description: "Renewed Hope Logo", image: RenewedHope, key: "RH" },
  { description: "Surrey Council Logo", image: SurreyCouncil, key: "SC" },
  {
    description: "Woodhatch Community Centre logo",
    image: WoodHatch,
    key: "WH",
  },
];

function LogoList() {
  return (
    <Container>
      <Row className="logo_header">
        <Col xs={12} style={{ textAlign: "center" }}>
          <h2>Collaborators</h2>
        </Col>
      </Row>
      <Row className="logo_row">
        {companyLogos.map((logo) => (
          <Logo imgSrc={logo.image} alt={logo.description} key={logo.key} />
        ))}
      </Row>
    </Container>
  );
}

export default LogoList;
