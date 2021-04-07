import React from "react";
import { experience } from "../../data/editableData";

function Experience() {
  return (
    <>
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
    </>
  );
}

export default Experience;
