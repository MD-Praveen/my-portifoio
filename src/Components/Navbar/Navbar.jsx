import React, { useState } from 'react';
import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navContainer}>
      <div>
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/images/buymeacoffee.png"
          alt="Icon"
          className={styles.logo}
        />
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <li><span><i className="fa-solid fa-house" /></span> Home</li>
        </NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>
          <li><span><i className="fa-solid fa-user" /></span> About</li>
        </NavLink>
        <NavLink to="/education" onClick={() => setIsOpen(false)}>
          <li><span><i className="fa-solid fa-user-graduate" /></span> Education</li>
        </NavLink>
        <NavLink to="/skills" onClick={() => setIsOpen(false)}>
          <li><span><i className="fa-solid fa-user-gear" /></span> Skills</li>
        </NavLink>
        <NavLink to="/projects" onClick={() => setIsOpen(false)}>
          <li><span><i className="fa-solid fa-chalkboard-user" /></span> Projects</li>
        </NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>
          <li><span><i className="fa-solid fa-address-card" /></span> Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
