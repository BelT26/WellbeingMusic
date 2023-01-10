import React from "react";
import { Container } from "react-bootstrap";

function MainImageContainer({ children }) {
  return <Container style={{ padding: "20px 150px" }}>{children}</Container>;
}

export default MainImageContainer;
