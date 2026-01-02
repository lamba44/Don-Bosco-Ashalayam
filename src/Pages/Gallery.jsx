import React from "react";
import "./Styling/Gallery.css";
import Navbar from "./../Components/Navbar";

//***************** NOTE: Bento Boxes number 1 and 4 will NOT be visible for smaller screens *****************//

const Gallery = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="page-heading">Gallery</h1>
                <p className="page-oneliner">
                    Celebrating moments of joy, growth, and togetherness - a
                    glimpse into our journey of hope and care.
                </p>
                <div className="gallerybento">
                    <div className="bentotop">
                        <div className="bento1">1</div>
                        <div className="bentotopright">
                            <div className="bento2">2</div>
                            <div className="bento3">3</div>
                        </div>
                    </div>
                    <div className="bentobot">
                        <div className="bento4">4</div>
                        <div className="subbento">
                            <div className="subbentotop">
                                <div className="bento5">5</div>
                                <div className="bento6">6</div>
                            </div>
                            <div className="subbentobot">
                                <div className="bento7">7</div>
                                <div className="bento8">8</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;
