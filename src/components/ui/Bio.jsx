import React from "react";
import { Link } from "react-router-dom";
import { aboutBio1, aboutBio2, githubLink } from "../../data/editableData";

function Bio() {
  return (
    <>
      <h2 className="page-title pb-7">ABOUT</h2>
      <p>{aboutBio1}</p>
      <p>{aboutBio2}</p>
      <p>
        Peep my{" "}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="clickable"
        >
          GitHub
        </a>{" "}
        to check out the different projects I might be working on, or{" "}
        <Link className="clickable" to="/contact">
          contact me here
        </Link>{" "}
        if you would like to learn more about me.
      </p>
    </>
  );
}

export default Bio;
