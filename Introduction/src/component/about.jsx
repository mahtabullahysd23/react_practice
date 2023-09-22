import React from "react";
import "./about.style.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Book Heaven</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Welcome to Book Heaven, your trusted destination for
            online shopping. We're dedicated to bringing you the best products
            and an exceptional shopping experience.
          </p>
          <p>
            At Book Heaven, we offer a wide selection of
            high-quality products, including electronics, fashion, accessories,
            and more. Our mission is to provide you with the latest trends and
            unbeatable prices.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://via.placeholder.com/300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
