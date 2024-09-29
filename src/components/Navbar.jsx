import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          Home
        </NavLink>
        <NavLink
          to="movies"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          Movies
        </NavLink>
        <hr />
      </nav>
    </>
  );
};
export default Navbar;
