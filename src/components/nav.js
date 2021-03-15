import {
    Link
  } from "react-router-dom";

import "./nav.css"

export default function Nav() {
    return (
    <nav className="Nav">
        <ul className="links">
        <li>
            <Link to="/">Home</Link>
        </li>
        <ul className="links">
            Templates
        <li>
            <Link to="/social-innovation">Social Innovation</Link>
        </li>
        </ul>
        </ul>
    </nav>);
  }
