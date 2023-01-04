import React from "react";
import Col from "react-bootstrap/Col";

function Logo({ imgSrc, alt }) {
  return (
    <Col sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img src={imgSrc} alt={alt} height={150} style={{ padding: "20px" }} />
    </Col>
  );
}

export default Logo;
