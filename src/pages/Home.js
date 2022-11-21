import React from "react";
import NinaImage from "../images/nina.jpg";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <img src={NinaImage} height={200} alt="Nina conducting a choir" />
    </div>
  );
}

export default Home;
