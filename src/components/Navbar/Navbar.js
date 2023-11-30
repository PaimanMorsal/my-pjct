import "./Navbar.css";
import OpenIcon from "../../assets/about/menuIcon.png";
import closeIcon from "../../assets/about/closeIcon.png";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <a className="title" href="/">
        Portfolio
      </a>
      <div className="menu">
        <img
          src={menuOpen ? closeIcon : OpenIcon}
          alt="menuIcon"
          className="menuBtn"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <ul
          className={`menuItems ${menuOpen && "menuOpen"}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
