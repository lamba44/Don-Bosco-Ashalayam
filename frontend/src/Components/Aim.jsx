import React from "react";
import "./Styling/Aim.css";
import AimData from "../assets/data/AimData.js";

const Aim = () => {
  return (
    <div className="section-aim">
      <div className="aim-grid">
        {AimData.map((item, index) => (
          <div key={index} className="aim-grid-container">
            <img src={item.img} alt="" />
            <p className="grid-heading">{item.title}</p>
            <p className="grid-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aim;
