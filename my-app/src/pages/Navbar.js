import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="menu-icon">
        <i className="fa fa-bars fa-2x" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/" className="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/MyProjects">MyProjects</NavLink>
          </li>
          <li>
            <NavLink to="/MyResumee">MyResumee</NavLink>
          </li>
          <li>
            <NavLink to="/MyLinks">MyLinks</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
