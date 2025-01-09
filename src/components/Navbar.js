import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          {/* <a className="navbar-brand" href="#">
            {props.title}
          </a> */}
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
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form> */}
            <div className="d-flex">
              <div
                className="bg-primary rounded mx-2"
                onClick={() => props.togglemode("primary")}
                style={{ height: "30px", width: "30px" }}
              ></div>
            </div>
            <div className="d-flex">
              <div
                className="bg-warning rounded mx-2"
                onClick={() => props.togglemode("warning")}
                style={{ height: "30px", width: "30px" }}
              ></div>
            </div>
            <div className="d-flex">
              <div
                className="bg-success rounded mx-2"
                onClick={() => props.togglemode("success")}
                style={{ height: "30px", width: "30px" }}
              ></div>
            </div>
            <div className="d-flex">
              <div
                className="bg-danger rounded mx-2"
                onClick={() => props.togglemode("danger")}
                style={{ height: "30px", width: "30px" }}
              ></div>
            </div>
            <div className="d-flex">
              <div
                className="bg-light rounded mx-2"
                onClick={() => props.togglemode("light")}
                style={{ height: "30px", width: "30px" }}
              ></div>
            </div>
            <div className="d-flex">
              <div
                className="bg-dark rounded mx-2"
                onClick={() => props.togglemode("dark")}
                style={{ height: "30px", width: "30px" }}
              ></div>
            </div>
            {/* <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.togglemode(null)}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Toggle Mode
              </label>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "KhushiUtils",
  aboutText: "About Us",
};
