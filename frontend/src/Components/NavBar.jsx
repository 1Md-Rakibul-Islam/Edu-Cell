import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaBox, FaShoppingCart, FaTimes, FaUser } from "react-icons/fa";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import Brand from "./Brand";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut();
  };

  // const handelLogOut = () => {
  //   logOut().then().catch();
  // };

  // console.log(user);

  const isLogin = window.localStorage.getItem("loggedin")

  // console.log(isLogin);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <Link to="/">
            <img
              style={{ width: "60px", height: "60px", borderRadius: "100%" }}
              src="/assets/logo.jpg"
              alt=""
              srcset=""
            />
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </Link>
            </li>
            {user || isLogin ? (
              <>
                <li className="nav-item">
                  <Link
                    to="/profile"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href="#about"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    About
                  </a>
                </li>
                <button className="btn-outline" onClick={handelLogOut}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    to="/login"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/signup"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
