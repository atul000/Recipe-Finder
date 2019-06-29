import React from "react";
import { Link } from "react-router-dom";
import cook from "./cook.png";

export default function Nav() {
  return (
    <div className="container">
      <nav>
        <input type="checkbox" id="nav" className="hidden" />
        <label htmlFor="nav" className="nav-btn">
          <i />
          <i />
          <i />
        </label>
        <div className="logo">
          <Link to="/">
            <img
              src={cook}
              alt="cook"
              className="chef"
              style={{ height: "10%", width: "10%" }}
            />
          </Link>
        </div>
        <div className="nav-wrapper">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
