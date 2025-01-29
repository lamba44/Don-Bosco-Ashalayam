import React, { useState, useEffect, useRef } from "react";
import "./Styling/Gallery.css";
import Navbar from "./../Components/Navbar";
import GalleryData from "../assets/data/GalleryData";

// Function to shuffle and get a random image
const getRandomImage = () => {
  const shuffledImages = [...GalleryData].sort(() => Math.random() - 0.5); // Shuffle the images
  return shuffledImages[0]; // Get a new random image
};

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(new Array(8).fill(null));
  const [imageStates, setImageStates] = useState(new Array(8).fill(true)); // States to control fade-in/out
  const intervalRefs = useRef([]);

  useEffect(() => {
    // Set initial random images
    setVisibleImages(getRandomImageArray());

    // Set random change intervals for each image (bento boxes)
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

  // Function to initialize random images for all Bento positions
  const getRandomImageArray = () => {
    return new Array(8).fill(null).map(() => getRandomImage());
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="page-heading">Gallery</h1>
        <p className="page-oneliner">
          Celebrating moments of joy, growth, and togetherness - a glimpse into
          our journey of hope and care.
        </p>
        <div className="gallerybento">
          <div className="bentotop">
            <div className="bento1">
              <img
                src={visibleImages[0]}
                alt="Gallery 1"
                className={imageStates[0] ? "fade-in" : "fade-out"}
                style={{ transition: "opacity 1s ease-in-out" }}
              />
            </div>
            <div className="bentotopright">
              <div className="bento2">
                <img
                  src={visibleImages[1]}
                  alt="Gallery 2"
                  className={imageStates[1] ? "fade-in" : "fade-out"}
                  style={{ transition: "opacity 1s ease-in-out" }}
                />
              </div>
              <div className="bento3">
                <img
                  src={visibleImages[2]}
                  alt="Gallery 3"
                  className={imageStates[2] ? "fade-in" : "fade-out"}
                  style={{ transition: "opacity 1s ease-in-out" }}
                />
              </div>
            </div>
          </div>
          <div className="bentobot">
            <div className="bento4">
              <img
                src={visibleImages[3]}
                alt="Gallery 4"
                className={imageStates[3] ? "fade-in" : "fade-out"}
                style={{ transition: "opacity 1s ease-in-out" }}
              />
            </div>
            <div className="subbento">
              <div className="subbentotop">
                <div className="bento5">
                  <img
                    src={visibleImages[4]}
                    alt="Gallery 5"
                    className={imageStates[4] ? "fade-in" : "fade-out"}
                    style={{ transition: "opacity 1s ease-in-out" }}
                  />
                </div>
                <div className="bento6">
                  <img
                    src={visibleImages[5]}
                    alt="Gallery 6"
                    className={imageStates[5] ? "fade-in" : "fade-out"}
                    style={{ transition: "opacity 1s ease-in-out" }}
                  />
                </div>
              </div>
              <div className="subbentobot">
                <div className="bento7">
                  <img
                    src={visibleImages[6]}
                    alt="Gallery 7"
                    className={imageStates[6] ? "fade-in" : "fade-out"}
                    style={{ transition: "opacity 1s ease-in-out" }}
                  />
                </div>
                <div className="bento8">
                  <img
                    src={visibleImages[7]}
                    alt="Gallery 8"
                    className={imageStates[7] ? "fade-in" : "fade-out"}
                    style={{ transition: "opacity 1s ease-in-out" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
