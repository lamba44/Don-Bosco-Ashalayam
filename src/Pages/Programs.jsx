import React from "react";
import "./Styling/Programs.css";
import Navbar from "../Components/Navbar";

const programsData = [
    {
        id: 1,
        title: "Empowerment Workshops",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
        image: "https://placehold.co/300x400",
    },
    {
        id: 2,
        title: "Health & Wellness Camps",
        description:
            "Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "https://placehold.co/400x300",
    },
    {
        id: 3,
        title: "Community Outreach",
        description:
            "Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit.",
        image: "https://placehold.co/500x300",
    },
    {
        id: 4,
        title: "Leadership Seminars",
        description:
            "Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://placehold.co/500x300",
    },
];

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

                <div className="programs-list">
                    {programsData.map((program, index) => (
                        <div
                            key={program.id}
                            // Notice the flip here: we're applying "reverse" for even indices
                            // so the FIRST item (index=0) starts with text on the left and image on the right
                            className={`program-item ${
                                index % 2 === 0 ? "reverse" : ""
                            }`}
                        >
                            <div className="program-image">
                                <img src={program.image} alt={program.title} />
                            </div>
                            <div className="program-details">
                                <h2>{program.title}</h2>
                                <p>{program.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Programs;
