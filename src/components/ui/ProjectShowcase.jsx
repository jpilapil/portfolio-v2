import React, { useState } from "react";
import { work } from "../../data/editableData";

function ProjectShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = work.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <div className="row">
        <h2 className="page-title pl-3">WORK</h2>
      </div>

      <div className="row">
        <div className="col-6">
          <div key={work[activeStep].id} id="image-temp"></div>
        </div>
        <div className="col-6 mt-7">
          <p className="project-title">{work[activeStep].name}</p>
          <p>{work[activeStep].desc}</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <a
          id="view-project"
          className="btn pt-5"
          href={work[activeStep].link}
          target="_blank"
          rel="noreferrer"
        >
          VIEW PROJECT
        </a>
      </div>
      <div className="row float-right">
        <button
          className="btn backNextButton"
          target="_blank"
          rel="noreferrer"
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          BCK
        </button>
        <span id="project-line"></span>
        <button
          className="btn backNextButton"
          target="_blank"
          rel="noreferrer"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          NXT
        </button>
      </div>
    </>
  );
}

export default ProjectShowcase;
