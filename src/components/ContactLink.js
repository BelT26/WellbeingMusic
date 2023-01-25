import { useState } from "react";

const ContactLink = (props) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      style={{ display: "inline-block" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        className="contact_link"
        style={{
          textDecoration: "none",
          color: isHover ? props.hover_color : props.color,
        }}
        href={`mailto:${props.email}?subject=${props.subject}`}
      >
        {props.children}
      </a>
    </div>
  );
};

export default ContactLink;
