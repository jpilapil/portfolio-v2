import React from "react";
import AppTemplate from "../ui/AppTemplate";
import ContactIntro from "../ui/ContactIntro";
import ContactForm from "../ui/ContactForm";

function Contact() {
  return (
    <AppTemplate>
      <div className="row align-items-center vh-100">
        <div className="col-12">
          <ContactIntro />
          <ContactForm />
        </div>
      </div>
    </AppTemplate>
  );
}

export default Contact;
