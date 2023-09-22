import React from "react";
  const Button = ({ text, link, onLinkClick }) => {
    const handleLinkClick = () => {
      onLinkClick(text);
    };
  return (
    <>
      <a href={link} style={{
        width:"100%",
        padding:"12px 0px",
        textDecoration:"none",
        color:"white",
        margin:"0px 15px"
      }}onClick={handleLinkClick}
      >
          {text}
      </a>
    </>
  );
};
export default Button;
