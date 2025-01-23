import React from "react";
import "./Styling/Location.css";

const Location = () => {
  return (
    <div className="section-location">
      <h2 className="section-location-heading">Reach out to us</h2>
      <div className="location-container">
        <p className="location-address">
          WZ 1211, Ashram Gali, Harijan Basti, Palam Extension, Palam, New
          Delhi, Delhi, 110045
        </p>
        <p className="location-contact">Call us at +91 12345 67890</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224214.6566848976!2d76.76971769453125!3d28.5891548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b3e617e4d97%3A0x557ac080ec958a4a!2sDon%20Bosco%20Ashalayam!5e0!3m2!1sen!2sin!4v1737628081341!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
