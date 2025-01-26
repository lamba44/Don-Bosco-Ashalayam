import React from "react";
import "./Styling/Programs.css";
import Navbar from "../Components/Navbar";

const Programs = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="page-heading">Programs</h1>
                <p className="page-oneliner">
                    Discover the impactful initiatives that drive our mission
                    for progress and transformation.
                </p>
            </div>
        </>
    );
};

export default Programs;
