import React from "react";
import "./Styling/Events.css";
import Navbar from "../Components/Navbar";

const Events = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="page-heading">Events</h1>
                <p className="page-oneliner">
                    Celebrate with us as we showcase the vibrant moments that
                    bring our community together.
                </p>
            </div>
        </>
    );
};

export default Events;
