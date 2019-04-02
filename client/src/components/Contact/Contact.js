import React from "react";

// This component will be uncontrolled and will use formspree to send client emails.

import Button from "../Button/Button";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="contactContainer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="contactUsHeader">Contact Us</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form
              action="https://formspree.io/riverae2@student.wpunj.edu"
              method="POST"
            >
              <div className="formWrapper">
                <label htmlFor="Name" className="formLabel">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name..."
                />
              </div>
              <div className="formWrapper">
                <label htmlFor="Email" className="formLabel">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email Address..."
                />
              </div>
              <div className="formWrapper">
                <label htmlFor="Message" className="formLabel">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Your Message..."
                />
              </div>
              <Button as="button" buttonStyle="primaryButton">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
