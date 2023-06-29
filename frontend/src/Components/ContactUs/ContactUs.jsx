import React from "react";
import "./ContactUs";

const ContactUs = () => {
  return (
    <section id="contact" className="contact">
      <div id="map" className="google-map">
        <img src="/assets/contactus.svg" alt="" srcset="" />
      </div>
      <div className="contact-form">
        <h1 className="section-title center">Contact Us</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
          praesentium fugiat pariatur, deserunt consequuntur temporibus vel
          minima molestias blanditiis corporis quasi eius repudiandae eos
          magnam, illum et dolor earum atque!
        </p>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
        <button type="submit" className="btn-primary">
          Login{" "}
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
