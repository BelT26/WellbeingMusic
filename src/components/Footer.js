import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import ContactLink from "./ContactLink";
import "./Footer.css";

function Footer() {
  return (
    <Container fluid className="footer_container">
      <Row>
        <Col xs={12} md={6} lg={4}>
          <ContactLink
            email="info@wellbeingmusic.co.uk"
            subject="Website Enquiry"
          >
            info@wellbeingmusic.co.uk
          </ContactLink>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="social_icons">
            <SocialIcon url="https://www.instagram.com/wellbeingmusicuk/" />
            <SocialIcon url="https://www.facebook.com/wellbeingmusic" />
            <SocialIcon url="https://www.youtube.com/channel/UCvnS8UgGbqD0E3Eo3ZNR7kA" />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4} className="footer_right">
          <h6>Privacy Policy</h6>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
