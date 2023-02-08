import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3 d-flex mx-5 px-5">
      <Link className=" col-1" to="/">
        <span className="navbar-brand mb-0 h1"><img className="img-fluid col-10"src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo.jpg"/></span>
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
