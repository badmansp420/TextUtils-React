import React from "react";
import PropTypes from "prop-types";
import {
  Link,
} from "react-router-dom";

export default function Navbar(props) {


  return (
    <>
      <nav className={`navbar navbar-expand-lg shadow border-bottom border-body bg-${window.localStorage.getItem("modde")}`}
        data-bs-theme={`${window.localStorage.getItem("modde")}`}>
        <div className="container" >
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckChecked" />
              <label className={`form-check-label text-${window.localStorage.getItem("modde") === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckChecked">{props.mode === 'dark' ? "Light" : "Dark"}</label>
            </div>
          </div>


        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  item1: PropTypes.string,
};
Navbar.defaultProps = {
  title: "set title here",
  item1: "Set Item List Here",
};