import React from "react";
import AppTemplate from "../ui/AppTemplate";
import Bio from "../ui/Bio";
import Experience from "../ui/Experience";

function About() {
  return (
    <AppTemplate>
      <div className="row align-items-center vh-100">
        <div className="col-12">
          <Bio />
          <Experience />
        </div>
      </div>
    </AppTemplate>
  );
}

export default About;
