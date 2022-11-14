import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav-ul">
        <li className="nav-li">
          <Link to="/posts">Posts</Link>
        </li>
        <li className="nav-li">
          <Link to="/add">Add post</Link>
        </li>
      </ul>
    </div>
  );
}
