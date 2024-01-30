import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <header>
      <div className="logo">Logo</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
