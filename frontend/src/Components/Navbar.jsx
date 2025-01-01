import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Styling/Navbar.css";
// import logo from "../../assets/Misc/DVLogo.png";
// Use Link from react-router-dom, take usage information from Footer.jsx of DV2, this is just for responsive styling of Navbar

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <Link to="hero" smooth={true} offset={0} duration={750}>
                <h4>Logo Here</h4>
                {/* <img src={logo} alt="Logo" className="logo" aria-label="home" /> */}
            </Link>

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
                <li>Get Involved</li>
                <li>
                    <button className="btn small">Donate Now</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
