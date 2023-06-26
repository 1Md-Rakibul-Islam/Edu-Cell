import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import ContactUs from "../../../Components/ContactUs/ContactUs";

const Home = () => {
  return (
    <div
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
          backgroundImage: "url('/assets/banner.jpg')",
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
          background: "linear-gradient(rgb(0 0 0 / 55%), rgb(0 128 0 / 61%))",
        }}
      />
      <div
        className="hero"
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2>Welcome to the Asansol Engineering College ED Cell</h2>
        <p>
          where we foster innovation, creativity, and entrepreneurship. Join us
          on this exciting journey and explore the world of entrepreneurship.
        </p>
        <div className="hero-btns">
          <button className="btn-primary">Register</button>
          <button className="btn-outline">Login</button>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Home;
