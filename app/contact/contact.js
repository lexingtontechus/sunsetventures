"use client";
import ContactForm from "./contactform";

const Contact = () => (
  <>
    <div className="hero min-h-screen svg-contact">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">
            Contact Us
          </h1>
          <p className="my-4 text-2xl font-smeibold">
            We appreciate your interest in Sunset Ventures.
          </p>
        </div>
      </div>
    </div>
    <div className="mx-auto">
      <ContactForm />
    </div>
  </>
);

export default Contact;
