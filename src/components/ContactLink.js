import React from "react";

import "./Footer.css";

const ContactLink = (props) => {
  return (
    <a
      className="contact_link"
      href={`mailto:${props.email}?subject=${props.subject}`}
    >
      {props.children}
    </a>
  );
};

export default ContactLink;
