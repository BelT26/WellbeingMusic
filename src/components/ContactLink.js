import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const ContactLink = ({ mailto, label }) => {
  return (
    <Link
      className="contact_link"
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default ContactLink;
