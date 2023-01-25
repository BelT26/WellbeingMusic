import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import ContactLink from "./ContactLink";
import "./Footer.css";

function Footer() {
  return (
    <Container fluid className="footer_container">
      <Row className="footer_row">
        <Col xs={12} lg={4} className="footer_item">
          <ContactLink
            email="info@wellbeingmusic.co.uk"
            subject="Website Enquiry"
            color="darkslategrey"
            hover_color="cornflowerblue"
          >
            info@wellbeingmusic.co.uk
          </ContactLink>
        </Col>
        <Col xs={12} lg={4} className="footer_item">
          <div className="social_icons">
            <SocialIcon url="https://www.instagram.com/wellbeingmusicuk/" />
            <SocialIcon url="https://www.facebook.com/wellbeingmusic" />
            <SocialIcon url="https://www.youtube.com/channel/UCvnS8UgGbqD0E3Eo3ZNR7kA" />
          </div>
        </Col>
        <Col xs={12} lg={4} className="footer_right footer_item">
          <a href="https://www.privacypolicygenerator.info/live.php?token=ZVyTTGGAuApCkdr9iZnZh8m1rZaR4pHW">
            <h6>Privacy Policy</h6>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
