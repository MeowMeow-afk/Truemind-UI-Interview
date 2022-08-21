import React from "react";
import { Link, NavLink } from "react-router-dom";
import cart from "../../Assets/Images/cart.svg";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "navbar__active" : "")}
        >
          Home
        </NavLink>
      </div>
      <div className="navbar__links">
        <img src={cart} alt="" />
        <NavLink
          to="cart"
          className={({ isActive }) => (isActive ? "navbar__active" : "")}
        >
          Cart
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
