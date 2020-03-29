import React from "react";
import { Link } from "react-router-dom";
export default function Navbar({ light, toggleTheme }) {
  return (
    <nav className="navbar sticky-top navbar-expand-lg" id={`navbar-${light}`}>
      <Link className={`brand text${light}`} to="/">
        Where in the world ?
      </Link>
      <div className="navbar ml-auto">
        <ul className="navbar-nav ">
          <li className="nav-item ">
            <button className={`text${light}`} onClick={toggleTheme}>
              {light === "light" ? (
                <i className="far fa-moon"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}{" "}
              Dark mode
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
