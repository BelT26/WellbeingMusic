import React from "react";

import "./ContactLink.css";

const ContactLink = (props) => {
  return (
    <a
      style={{ textDecoration: "none", color: props.color }}
      href={`mailto:${props.email}?subject=${props.subject}`}
    >
      {props.children}
    </a>
  );
};

export default ContactLink;
