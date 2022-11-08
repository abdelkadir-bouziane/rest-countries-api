import { NavLink } from "react-router-dom";
import { FaSun } from "react-icons/fa";
import { CgClose, CgMenu } from "react-icons/cg";
import { useState } from "react";

function Navbar() {
  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <header>
      <h1>Where is the world ?</h1>
      <button
        className="menu-button"
        onClick={() => {
          setMenuVisibility(!menuVisibility);
        }}
      >
        {menuVisibility ? <CgClose /> : <CgMenu />}
      </button>
      <div className={menuVisibility ? "menu show-menu" : "menu hide-menu"}>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "link nav-link-active" : "link"
                }
                onClick={() => {
                  setMenuVisibility(false);
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "link nav-link-active" : "link"
                }
                onClick={() => {
                  setMenuVisibility(false);
                }}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="lightness-mode">
          <FaSun />
          <span>Light Mode</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
