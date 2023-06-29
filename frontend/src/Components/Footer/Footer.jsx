import React from "react";
import { FaDiscord, FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <span>Asansol</span> Engineering College
        </h3>

        <p className="footer-links">
          <Link to="/" className="link-1">Home</Link>
          <a href="#contact" className="link-2">Contact</a>
          <a href="#about" className="link-3">About</a>
          <Link to='/login'  className="link-4">Login</Link>
          <Link to='/signup' className="link-5">Register</Link>

        </p>

        <p className="footer-company-name">Asansol Engineering College © 2023</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Kolkata, Green Road-203</span> Solana Beach, India
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+9909520802</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">support@aec-ed.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className="footer-icons">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaWhatsapp />
          </a>
          <a href="#">
            <FaDiscord />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
