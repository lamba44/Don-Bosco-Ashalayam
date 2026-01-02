import React from "react";
import "./Styling/Contact.css";

const Contact = () => {
  return (
    <div className="section-contact">
      <div className="contact-form">
        <form action="">
          <div className="name-field-container">
            <label>Name</label>
            <div className="name-field">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
          </div>

          <div className="name-field-container">
            <label>Contact detalis</label>
            <div className="name-field">
              <input type="number" placeholder="Phone Number" />
              <input type="text" placeholder="Email address" />
            </div>
          </div>

          <div className="name-field-container">
            <label>Query</label>
            <div className="name-field">
              <textarea type="text" placeholder="Write your heart out!" />
            </div>
          </div>

          <button className="form-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
