import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/assets/banner2.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgb(0 0 0 / 46%), rgb(42 33 73))",
        }}
      />
      <div
        className="hero"
        style={{
          position: "relative",
        }}
      >
        <h2>Welcome to the Asansol Engineering College ED Cell</h2>
        <p>
          where we foster innovation, creativity, and entrepreneurship. Join us
          on this exciting journey and explore the world of entrepreneurship.
        </p>
        <div className="hero-btns">
          <Link to="/signup">
            <button className="btn-primary">Register</button>
          </Link>
          <Link to='/login'>
            <button className="btn-outline">Login</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
