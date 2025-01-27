import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Styling/Navbar.css";
import logo from "../assets/DonBoscoLogo.jpg";
import Programs from "../Pages/Programs";
import Gallery from "../Pages/Gallery";
import Events from "../Pages/Events";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <img src={logo} alt="Logo" className="logo" />

      <div className={`menu-icon`} onClick={toggleMenu}>
        <i className={isOpen ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <RouterLink to="/"></RouterLink>
        <ScrollLink
          to="about-us"
          smooth={true}
          duration={500}
          offset={-70} // Adjust for fixed header
        >
          <li>About</li>
        </ScrollLink>
        <RouterLink to="/programs" element={<Programs />}>
          <li>Programs</li>
        </RouterLink>

        <RouterLink to="/events" element={<Events />}>
          <li>Events</li>
        </RouterLink>

        <RouterLink to="/gallery" element={<Gallery />}>
          <li>Gallery</li>
        </RouterLink>
        <li>Contact</li>
        <li>
          <button className="btn small">Contribute</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
