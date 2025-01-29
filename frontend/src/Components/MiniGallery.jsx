import React, { useState, useEffect, useRef } from "react";
import "./Styling/MiniGallery.css";
import GalleryData from "../assets/data/GalleryData";

const MiniGallery = () => {
  const [visibleImages, setVisibleImages] = useState(new Array(6).fill(null));
  const [imageStates, setImageStates] = useState(new Array(6).fill(true));
  const intervalRefs = useRef([]);

  // Function to shuffle and get a random image
  const getRandomImage = () => {
    const shuffledImages = [...GalleryData].sort(() => Math.random() - 0.5); // Shuffle the images
    return shuffledImages[0]; // Get a new random image
  };

  useEffect(() => {
    // Initialize with random images
    setVisibleImages(getRandomImageArray());

    // Set random change intervals for each image
    const intervalIds = visibleImages.map((_, index) => {
      return setInterval(() => {
        setImageStates((prevStates) => {
          const newStates = [...prevStates];
          newStates[index] = false; // Fade out current image
          return newStates;
        });

        setTimeout(() => {
          setVisibleImages((prevImages) => {
            const newImages = [...prevImages];
            newImages[index] = getRandomImage(); // Replace the image at the current index
            return newImages;
          });

          setImageStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = true; // Fade in the new image
            return newStates;
          });
        }, 1000); // Wait for fade-out to complete before changing image
      }, Math.random() * (8000 - 5000) + 5000); // Change each image randomly between 5-8 seconds
    });

    // Store interval IDs in the ref
    intervalRefs.current = intervalIds;

    // Cleanup intervals on component unmount
    return () => {
      intervalRefs.current.forEach(clearInterval);
    };
  }, []); // Empty dependency array to run only once on mount

  // Function to initialize random images for all grid positions
  const getRandomImageArray = () => {
    return new Array(6).fill(null).map(() => getRandomImage());
  };

  return (
    <div className="mini-gallery-container container">
      <div className="mini-gallery-grid">
        {visibleImages.map((imgUrl, index) => (
          <div className="mini-gallery-item" key={index}>
            <img
              src={imgUrl}
              alt={`Gallery ${index + 1}`}
              className={imageStates[index] ? "fade-in" : "fade-out"}
              style={{ transition: "opacity 1s ease-in-out" }} // Smooth transition for fade-in and fade-out
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniGallery;
