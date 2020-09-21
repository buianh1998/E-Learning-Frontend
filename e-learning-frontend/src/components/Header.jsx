import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-secondary text-white">
      <div className="container">
        <Link to="/" className="nav-link text-white">
          E-Learning
        </Link>

        <div
          className="collapse navbar-collapse text-white"
          id="collapsibleNavId"
        >
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to="/" className="nav-link" style={{ color: "white" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/course" className="nav-link text-white">
                Course
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link text-white">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link text-white">
                Contact
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
