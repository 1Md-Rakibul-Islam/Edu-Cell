import React from "react";
import { FaDiscord, FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>
          <span>Asansol</span> Engineering College
        </h3>

        <p class="footer-links">
          <Link to="/" class="link-1">Home</Link>
          <a href="#contact" class="link-2">Contact</a>
          <a href="#about" class="link-3">About</a>
          <Link to='/login'  class="link-4">Login</Link>
          <Link to='/signup' class="link-5">Register</Link>

        </p>

        <p class="footer-company-name">Asansol Engineering College © 2023</p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <span>Kolkata, Green Road-203</span> Solana Beach, India
          </p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+9909520802</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">support@aec-ed.com</a>
          </p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span>About</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div class="footer-icons">
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
