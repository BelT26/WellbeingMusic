import React from "react";
import { Container } from "react-bootstrap";
import "./MainImageContainer.css";

function MainImageContainer({ children }) {
  return (
    <Container fluid className="main_image_container">
      {children}
    </Container>
  );
}

export default MainImageContainer;
