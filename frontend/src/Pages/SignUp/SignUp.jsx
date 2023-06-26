import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="title">Registration</div>
        <form action="#">
          <div className="user__details">
            <div className="input__box">
              <span className="details">Full Name</span>
              <input
                type="text"
                name="name"
                placeholder="E.g: John Smith"
                required
              />
            </div>
            <div className="input__box">
              <span className="details">Roll</span>
              <input
                type="text"
                name="roll"
                placeholder="Enter your roll"
                required
              />
            </div>
            <div className="input__box">
              <span className="details">Email</span>
              <input
                type="email"
                name="email"
                placeholder="johnsmith@hotmail.com"
                required
              />
            </div>
            <div className="input__box">
              <span className="details">Department</span>
              <select name="" id="">
                <option selected value="">
                  Selecte
                </option>
                <option value="AI">BSc in AI</option>
                <option value="CSE">BSc in CSE</option>
                <option value="EEE">BSc in EEE</option>
                <option value="ME">BSc in ME</option>
                <option value="BBA">BSc in BBA</option>
              </select>
            </div>
            <div className="input__box">
              <span className="details">Semester</span>
              <select name="" id="">
                <option selected value="">
                  Selecte
                </option>
                <option value="AI">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
              </select>
            </div>
            <div className="input__box">
              <span className="details">Password</span>
              <input
                type="password"
                name="password"
                placeholder="********"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn-secendary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
