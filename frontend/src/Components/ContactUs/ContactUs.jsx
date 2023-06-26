import React from "react";
import "./ContactUs";

const ContactUs = () => {
  return (
    <>
      <section class="page-banner">
        <div class="container">
          <h2>Contact</h2>
        </div>
      </section>

      <section class="contact">
        <div id="map" class="google-map">
          <img src="/assets/contactus.svg" alt="" srcset="" />
        </div>
        <div class="contact-form">
          <h1 class="section-title">Contact Us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            praesentium fugiat pariatur, deserunt consequuntur temporibus vel
            minima molestias blanditiis corporis quasi eius repudiandae eos
            magnam, illum et dolor earum atque!
          </p>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
          <button type="submit" className="btn-secendary">
            Login{" "}
          </button>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

// <section className="contact-us">
// <div>
//   <h2>Contact Us</h2>
//   <img src="/assets/contactus-hero.svg" alt="" srcset="" />
// </div>
// <form action="#">
//   <div className="user__details">
//     <div className="input__box">
//       <span className="details">Full Name</span>
//       <input
//         type="text"
//         name="name"
//         placeholder="E.g: John Smith"
//         required
//       />
//     </div>
//     <div className="input__box">
//       <span className="details">Roll</span>
//       <input
//         type="text"
//         name="roll"
//         placeholder="Enter your roll"
//         required
//       />
//     </div>
//     <div className="input__box">
//       <span className="details">Email</span>
//       <input
//         type="email"
//         name="email"
//         placeholder="johnsmith@hotmail.com"
//         required
//       />
//     </div>
//     <div className="input__box">
//       <span className="details">Department</span>
//       <select name="" id="">
//         <option selected value="">
//           Selecte
//         </option>
//         <option value="AI">BSc in AI</option>
//         <option value="CSE">BSc in CSE</option>
//         <option value="EEE">BSc in EEE</option>
//         <option value="ME">BSc in ME</option>
//         <option value="BBA">BSc in BBA</option>
//       </select>
//     </div>
//     <div className="input__box">
//       <span className="details">Semester</span>
//       <select name="" id="">
//         <option selected value="">
//           Selecte
//         </option>
//         <option value="AI">1st</option>
//         <option value="2nd">2nd</option>
//         <option value="3rd">3rd</option>
//         <option value="4th">4th</option>
//         <option value="5th">5th</option>
//         <option value="6th">6th</option>
//         <option value="7th">7th</option>
//         <option value="8th">8th</option>
//       </select>
//     </div>
//     <div className="input__box">
//       <span className="details">Password</span>
//       <input
//         type="password"
//         name="password"
//         placeholder="********"
//         required
//       />
//     </div>
//   </div>
//   <button type="submit" className="btn-secendary">
//     Login
//   </button>
// </form>
// </section>
