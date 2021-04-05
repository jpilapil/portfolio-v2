import React from "react";
import HeroName from "../ui/HeroName";
import ProjectShowcase from "../ui/ProjectShowcase";

function Work() {
  return (
    <div className="row align-items-center vh-100">
      <div className="col-6">
        <HeroName />
      </div>
      <div className="col-6">
        <ProjectShowcase />
      </div>
    </div>
  );
}

export default Work;
