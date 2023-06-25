import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaBox, FaShoppingCart, FaTimes, FaUser } from "react-icons/fa";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import Brand from "./Brand";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [openNav, setOpenNav] = useState(false);

  return (
    <header className={`  ${openNav && ""}`}>
      <nav class="navbar container">
        <div class="navbar-top">
          <img src="./css/images/logo.png" alt="Logo Header" class="logo" />
          <div class="menu-toggle">
            <i class="fas fa-bars"></i>
          </div>
        </div>
        <ul class="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Register</Link>
          </li>
        </ul>
        <div class="navbar-button">
          <div class="btn">Get Support</div>
        </div>
      </nav>
      <div className={``}>
        <div className="p-10">
          <div onClick={() => setOpenNav(false)} className="mb-10">
            <FaTimes className="text-3xl cursor-pointer absolute right-4 top-4" />
          </div>
          <div class="sidebar">
            <ul class="sidebar-nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
