import React from "react";
import "./Styling/Events.css";
import Navbar from "../Components/Navbar";

const eventsData = [
    {
        id: 1,
        title: "Diwali Party",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://placehold.co/300x400",
    },
    {
        id: 2,
        title: "Christmas Celebration",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://placehold.co/400x300",
    },
    {
        id: 3,
        title: "New Year Bash",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://placehold.co/400x300",
    },
    {
        id: 4,
        title: "Summer Festival",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://placehold.co/500x300",
    },
];

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

                <div className="events-list">
                    {eventsData.map((event, index) => (
                        <div
                            key={event.id}
                            className={`event-item ${
                                index % 2 !== 0 ? "reverse" : ""
                            }`}
                        >
                            <div className="event-image">
                                <img src={event.image} alt={event.title} />
                            </div>
                            <div className="event-details">
                                <h2>{event.title}</h2>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Events;
