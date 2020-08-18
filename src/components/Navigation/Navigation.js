import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigationContainer}>
      <ul className={styles.navLinks}>
        <li className={styles.navLinkContainer}>
          <img
            className={styles.logo}
            src="https://static.wixstatic.com/media/7ef4a0_4522ff5c75d84a4386b2723e9fb2ace9~mv2.png/v1/fill/w_294,h_105,al_c,q_85,usm_0.66_1.00_0.01/Edulogo_3-45.webp"
            alt="Edutinker Logo"
          />
        </li>
        <li className={styles.navLinkContainer}>
          <NavLink
            to="/"
            exact
            className={styles.navLink}
            activeClassName={styles.active}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navLinkContainer}>
          <NavLink
            to="/about"
            className={styles.navLink}
            activeClassName={styles.active}
          >
            About Us
          </NavLink>
        </li>
        <li className={styles.navLinkContainer}>
          <NavLink
            to="/careers"
            className={styles.navLink}
            activeClassName={styles.active}
          >
            Careers
          </NavLink>
        </li>
        <li className={styles.navLinkContainer}>
          <NavLink
            to="/blog"
            className={styles.navLink}
            activeClassName={styles.active}
          >
            Blog
          </NavLink>
        </li>
        <li className={styles.navLinkContainer}>
          <NavLink
            to="/contact"
            className={styles.navLink}
            activeClassName={styles.active}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
