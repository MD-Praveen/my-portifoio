import React, { useState } from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

import homeImg from "../../Assets/Images/NavImages/home.png";
import aboutImg from "../../Assets/Images/NavImages/about.png";
import educationImg from "../../Assets/Images/NavImages/education.png";
import skillsImg from "../../Assets/Images/NavImages/skill.png";
import projectImg from "../../Assets/Images/NavImages/project.png";
import contactImg from "../../Assets/Images/NavImages/contact.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={styles.navContainer}>
        {/* Desktop Navbar */}
        <div>
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/images/buymeacoffee.png"
            alt="Icon"
            className={styles.logo}
          />
        </div>
        <ul className={`${styles.navLinks}`}>
          {/* Links with Images */}
          <NavLink to="/">
            <li>
              <span>
                <img src={homeImg} alt="Home" />
              </span>
              Home
            </li>
          </NavLink>
          <NavLink to="/about">
            <li>
              <span>
                <img src={aboutImg} alt="About" />
              </span>
              About
            </li>
          </NavLink>
          <NavLink to="/education">
            <li>
              <span>
                <img src={educationImg} alt="Education" />
              </span>
              Education
            </li>
          </NavLink>
          <NavLink to="/skills">
            <li>
              <span>
                <img src={skillsImg} alt="Skills" />
              </span>
              Skills
            </li>
          </NavLink>
          <NavLink to="/projects">
            <li>
              <span>
                <img src={projectImg} alt="Projects" />
              </span>
              Projects
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li>
              <span>
                <img src={contactImg} alt="Contact" />
              </span>
              Contact
            </li>
          </NavLink>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className={styles.smallContainer}>
        <div
          className={`${styles.menuButton} ${
            isMenuOpen ? styles.active : ""
          }`}
          onClick={handleMenuToggle}
        >
          <i className="fa-solid fa-plus" />
        </div>

        {/* Conditionally render the menu when isMenuOpen is true */}
        {isMenuOpen && (
          <ul className={styles.showMenu}>
            <li>
              <NavLink to="/" exact activeClassName="active">
                <img src={homeImg} alt="Home" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                <img src={aboutImg} alt="About" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/education" activeClassName="active">
                <img src={educationImg} alt="Education" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" activeClassName="active">
                <img src={skillsImg} alt="Skills" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active">
                <img src={projectImg} alt="Projects" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                <img src={contactImg} alt="Contact" />
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
