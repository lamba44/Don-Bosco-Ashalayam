import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import Aim from "./Components/Aim";
import Location from "./Components/Location";
import Contact from "./Components/Contact";
import MiniGallery from "./Components/MiniGallery";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutUs />
            <Aim />
            <MiniGallery />
            <Location />
            <Contact />
        </div>
    );
};

export default App;
