import React, { useContext, useEffect, useState } from "react";
import "./SignUp.css";
import { addUser } from "../../API/userRequest";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);

  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();

  //   if (token) {
  //     navigate("/");
  //   }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, roll, email, department, semester } = event.target.elements;

    const userData = {
      name: name.value,
      roll: roll.value,
      email: email.value,
      department: department.value,
      semester: semester.value,
    };
    // console.log(user);


    // console.log(user);
    await signUp(userData);
    if (window.localStorage.getItem("loggedin")) {
      toast.success("Account Created Successfully");
      navigate(from, { replace: true });
    }

  };

  return (
    <div className="signup">
      <div className="container">
        <div className="title">Registration</div>
        <form onSubmit={handleSubmit}>
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
              <select name="department" id="department" required>
                <option value="" disabled selected>
                  Select
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
              <select name="semester" id="semester" required>
                <option value="" disabled selected>
                  Select
                </option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
