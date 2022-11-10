import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav-ul">
        <li className="nav-li">
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </div>
  );
}
