import React from "react";
import "./Header.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">BookStore</div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="add-book">Add Book</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
