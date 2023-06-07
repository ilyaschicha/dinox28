import React, { useState } from "react";
import "../css/navbar.css";
import logo from "../assets/dinox.svg";

import { NavLink } from "react-router-dom";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <NavLink
            exact
            activeClassName="active" to="/" className="navbar-logo">
            <img src={logo} alt="Logo" height="78" />
          </NavLink>
          <button
            className={`navbar-toggle navbar-button ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span className="navbar-toggle__icon"></span>
            <span className="navbar-toggle__icon"></span>
            <span className="navbar-toggle__icon"></span>
          </button>
          <ul className={`navbar-menu navbar-menu-show ${menuOpen ? "open" : ""}`}>
            <li className="navbar-menu-item">
              <NavLink
                exact
                activeClassName="active"
                to="/"
                className="nav-link fs-5 "
              >
                Accueil
              </NavLink>
            </li>
            <li className="navbar-menu-item">
              <NavLink
                exact
                activeClassName="active"
                to="/presentiation"
                className="nav-link fs-5 "
              >
                Présentation
              </NavLink>
            </li>
            <li className="navbar-menu-item">
              <NavLink
                exact
                activeClassName="active"
                to="/catalog"
                className="nav-link fs-5 "
              >
                Catalog
              </NavLink>
            </li>
            <li className="navbar-menu-item">
              <NavLink
                exact
                activeClassName="active"
                to="/products"
                className="nav-link fs-5 "
              >
                Produits
              </NavLink>
            </li>
            <li className="navbar-menu-item">
              <NavLink
                exact
                activeClassName="active"
                to="/contact"
                className="nav-link fs-5 "
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className={`spacer ${menuOpen ? "" : "hide"}`}>
        <ul className="navbar-menu2">
          <li className="navbar-menu-item">
            <NavLink
              exact
              activeClassName="active"
              to="/Reception"
              className="navbar-menu-link "
              onClick={toggleMenu}
            >
              Accueil
            </NavLink>
          </li>
          <li className="navbar-menu-item">
            <NavLink
              exact
              activeClassName="active"
              to="/Presentiation"
              className="navbar-menu-link  "
              onClick={toggleMenu}
            >
              Présentation
            </NavLink>
          </li>
          <li className="navbar-menu-item">
            <NavLink
              exact
              activeClassName="active"
              to="/Products"
              className="navbar-menu-link "
              onClick={toggleMenu}
            >
              Produits
            </NavLink>
          </li>
          <li className="navbar-menu-item">
            <NavLink
              exact
              activeClassName="active"
              to="/contact"
              className="navbar-menu-link "
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
