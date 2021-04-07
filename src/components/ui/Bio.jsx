import React from "react";
import { Link } from "react-router-dom";
import {
  aboutBio1,
  aboutBio2,
  githubLink,
  experience,
} from "../../data/editableData";

function Bio() {
  return (
    <>
      <div className="row align-items-center vh-100">
        <div className="col-12">
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
          <h2 className="page-title py-7">EXPERIENCE</h2>
          <table className="table table-borderless">
            <tbody>
              {experience.map((job) => {
                return (
                  <tr key={job.id}>
                    <td className="text-secondary">{job.tenure}</td>
                    <td>
                      {job.title} at{" "}
                      <span className="experience-company">{job.company}</span>
                    </td>
                    <td>{job.location}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Bio;
