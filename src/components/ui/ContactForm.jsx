import React from "react";

function ContactForm() {
  return (
    <>
      <p className="form-text">
        What's good Justin, my name is{" "}
        <input
          type="email"
          class="form-control contact-inline-input contact-inline-input-who"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="your name"
          size="1"
        />{" "}
        and I can be reached at what's your email?. I'm trying to contact you
        because what do you want to chat about?.
      </p>
    </>
  );
}

export default ContactForm;
