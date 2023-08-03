import React from "react";
import "./feature-image.css";
import guitarsImage from "../assets/guitars.jpg"; // Import the image


export const FeatureImage = () => {
    return (
        <div className="img-wrapper">
            <a href="/#adam-shop" className="guitars-button">Browse Vintage Guitars</a>
            <img className="feature-img" src={guitarsImage} alt="img" />
        </div>
  )}

  