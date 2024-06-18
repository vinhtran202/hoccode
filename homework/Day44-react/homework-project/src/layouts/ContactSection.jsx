import React from "react";
import ContactForm from "../component/layouts/ContactForm ";
import ContactUs from "../component/layouts/ContactUs ";

export default function ContactSection() {
  return (
    <div className="px-8 py-16">
      <ContactUs />
      <ContactForm />
    </div>
  );
}
