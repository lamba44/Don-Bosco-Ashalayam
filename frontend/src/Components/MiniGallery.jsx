import React from "react";
import "./Styling/MiniGallery.css";

// Sample images from placehold.co
const images = [
    "https://placehold.co/600x400?text=Image+1",
    "https://placehold.co/600x400?text=Image+2",
    "https://placehold.co/600x400?text=Image+3",
    "https://placehold.co/600x400?text=Image+4",
    "https://placehold.co/600x400?text=Image+5",
    "https://placehold.co/600x400?text=Image+6",
];

const MiniGallery = () => {
    return (
        <div className="mini-gallery-container container">
            <div className="mini-gallery-grid">
                {images.map((imgUrl, index) => (
                    <div className="mini-gallery-item" key={index}>
                        <img src={imgUrl} alt={`Gallery ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiniGallery;
