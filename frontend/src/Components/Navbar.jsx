import React, { useState } from "react";
import "./Styling/Navbar.css";
import logo from "../assets/navbarLogoSample.png";
// Use Link from react-router-dom, take usage information from Footer.jsx of DV2, this is just for responsive styling of Navbar, also plan out the pages/sections

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <img src={logo} alt="Logo" className="logo" />

            <div className={`menu-icon`} onClick={toggleMenu}>
                <i
                    className={isOpen ? "fa-solid fa-x" : "fa-solid fa-bars"}
                ></i>
            </div>

            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li>Home</li>
                <li>About</li>
                <li>Programs</li>
                <li>Gallery</li>
                <li>Contact</li>
                <li>
                    <button className="btn small">Donate Now</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
