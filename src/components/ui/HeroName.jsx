import React from "react";
import { work } from "../../data/editableData";

function HeroName() {
  return (
    <>
      <h1 className="hero-name">{work.firstName}</h1>
      <h1 className="hero-name">{work.lastName}</h1>
    </>
  );
}

export default HeroName;
