import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "white",
        textAlign: "center",
        position: "fixed",
        bottom: "0",
        width: "100%",
      }}
    >
      <div style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:"10px 20px"
      }}>
        <div>&copy; {new Date().getFullYear()} Mahtab Ullah Sani</div>
        <div>mahtab.sani12381@gmail.com</div>
      </div>
    </footer>
  );
};

export default Footer;
