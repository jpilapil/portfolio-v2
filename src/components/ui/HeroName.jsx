import React from "react";
import { name } from "../../data/editableData";

function HeroName() {
  return (
    <>
      <h1 className="hero-name">{name.firstName}</h1>
      <h1 className="hero-name">{name.lastName}</h1>
    </>
  );
}

export default HeroName;
