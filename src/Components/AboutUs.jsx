import React from "react";
import "./Styling/AboutUs.css";
import AboutUsImg from "../assets/about.jpg";

const AboutUs = () => {
  return (
    <div className="about-us" id="about-us">
      <h2 className="aboutus-quote">
        "Service is the sign of true love, those who love know how to serve
        others"
      </h2>
      <p className="aboutus-quote-author">~ Pope Francis</p>
      <div className="aboutus-grid">
        <div
          className="aboutus-grid-image-container
      "
        >
          <img src={AboutUsImg} alt="" />
        </div>

        <div className="aboutus-grid-desc-container">
          <h3>About us</h3>
          <p>
            Don Bosco Ashalayam a part of the global network of the Salesians of
            Don Bosco, is a New Delhi, Palam based, Non-Governmental,
            Non-Profitable, Non – Political, Social & Charitable Organization.
            It is Registered under Societies Registration Act, 1860. It is a
            licensed children’s home (A Home of Hope) for Children: In Need of
            Care and Protection (Street Children, Orphans, Homeless, Abandoned,
            Unaccompanied, Neglected, Missing/Run Away, Lost & Found, Children
            found begging, Trafficked Children, Child Laborer, Marginalized
            Youth etc.)
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
