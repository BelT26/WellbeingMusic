import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import GlowBugTShirts from "../images/glowbugs_tshirts.jpg";
import ContactLink from "../components/ContactLink";
import "./Contact.css";

function Contact() {
  return (
    <Container>
      <Row>
        <Col xs={12} style={{ textAlign: "center" }}>
          <h1>Contact</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6} style={{ padding: "30px", textAlign: "center" }}>
          <p>
            For all email enquiries contact{" "}
            <ContactLink
              email="info@wellbeingmusic.co.uk"
              subject="Website Enquiry"
              color="mediumslateblue"
              hover_color="cornflowerblue"
            >
              info@wellbeingmusic.co.uk
            </ContactLink>
          </p>
          <p>or call / text 07956 256721</p>
          <hr></hr>
          <p>
            We sell Jingle Bugs, Glow Bug parties and Wellbeing Music Tshirts as
            well as music for early years and gift sets!
          </p>
          <hr></hr>
          <p>
            You can follow Wellbeing Music on Social Media by clicking the icons
            below.
          </p>
          <Row style={{ margin: "20px" }}>
            <Col xs={12} style={{ textAlign: "center" }}>
              Instagram{" "}
              <SocialIcon url="https://www.instagram.com/wellbeingmusicuk/" />
            </Col>
          </Row>
          <Row style={{ margin: "20px" }}>
            <Col xs={12} style={{ textAlign: "center" }}>
              Facebook{" "}
              <SocialIcon url="https://www.facebook.com/wellbeingmusic" />
            </Col>
          </Row>
          <Row style={{ margin: "20px" }}>
            <Col xs={12} style={{ textAlign: "center" }}>
              Youtube{" "}
              <SocialIcon url="https://www.youtube.com/channel/UCvnS8UgGbqD0E3Eo3ZNR7kA" />{" "}
            </Col>
          </Row>
        </Col>
        <Col xs={12} lg={6} style={{ padding: "30px" }}>
          <img
            src={GlowBugTShirts}
            id="gb_tshirts"
            alt="two young children wearing Glow Bug TShirts"
          />
        </Col>
      </Row>
      <hr />
      <Row style={{ margin: "30px" }}>
        <Col xs={12} style={{ textAlign: "center" }}>
          <em>
            A special thank you to Jenny Frear, Ruth Harvey, Kate Hutchings,
            Nick Rogers, Magda Trevino, and Clare Waghorn for providing
            photographs for the site and to Galina Rin at TerraCity One for the
            videos
          </em>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
