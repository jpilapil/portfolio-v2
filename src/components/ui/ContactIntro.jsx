import React from "react";
import { name } from "../../data/editableData";

function ContactIntro() {
  return (
    <>
      <h2 className="page-title py-7">CONTACT</h2>

      <p>
        Want to chat? Fill in the blanks below. If you're old fashioned, you can{" "}
        <a href={`mailto:${name.email}`} className="clickable">
          send me an email
        </a>
        .
      </p>
    </>
  );
}

export default ContactIntro;
