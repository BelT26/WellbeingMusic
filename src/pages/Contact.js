import React from "react";
import GlowBugTShirts from "../images/glowbugs_tshirts.jpg";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        For all email enquiries contact info@wellbeingmusic.co.uk or call / text
        07956 256721
      </p>
      <p>
        We sell Jingle Bugs, Blow Bug parties and Wellbeing Music Tshirts as
        well as music for early years and gift sets!
      </p>
      <img
        src={GlowBugTShirts}
        alt="two young children wearing Glow Bug TShirts"
        height={300}
      />
      You can also find Wellbeing Music on Instagram
      https://www.instagram.com/wellbeingmusicuk/ Facebook
      www.facebook.com/wellbeingmusic and our Youtube channel is
      https://www.youtube.com/channel/UCvnS8UgGbqD0E3Eo3ZNR7kA
    </div>
  );
}

export default Contact;
