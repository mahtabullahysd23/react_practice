import React from "react";

const heroStyle = {
  //background: `url('https://www.web-design-singapore.com.sg/wp-content/uploads/2021/06/hero-image-bg.jpg')`, // Replace with your image URL
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "black",
  textAlign: "center",
  padding: "100px 0",
    height: "60vh"
};

const titleStyle = {
  fontSize: "36px",
  fontWeight: "bold",
  marginBottom: "20px",
};

const descriptionStyle = {
  fontSize: "18px",
  marginBottom: "30px",
};

const buttonStyle = {
  background: "blue",
  color: "white",
  padding: "10px 20px",
  fontSize: "20px",
  borderRadius: "5px",
  cursor: "pointer",
};

const Hero = () => {
  return (
    <section style={heroStyle} className="hero">
      <div className="hero-content">
        <h1 style={titleStyle}>Welcome to Our Website</h1>
        <p style={descriptionStyle}>Discover amazing products and services.</p>
        <button style={buttonStyle} className="cta-button">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
