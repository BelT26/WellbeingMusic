import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Row>
        <Col xs={12} md={6}>
          <h2>Footer</h2>
        </Col>
        <Col xs={12} md={6}>
          <i class="fa-brands fa-facebook-f mx-3"></i>
          <i class="fa-brands fa-instagram mx-3"></i>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
