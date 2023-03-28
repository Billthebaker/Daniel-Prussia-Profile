import React from "react";


function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <a href="#about-me" className="nav-link">
            About Me
          </a>
        </li>
        <li>
          <a href="#contact-me" className="nav-link">
            Contact Me
          </a>
        </li>
        <li>
          <a href="#portfolio" className="nav-link">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#resume" className="nav-link">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;