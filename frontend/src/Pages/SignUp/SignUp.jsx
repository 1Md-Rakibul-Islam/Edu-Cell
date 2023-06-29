import React, { useContext, useEffect, useState } from "react";
import "./SignUp.css";
import { addUser } from "../../API/userRequest";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const { createUser, updateUser, loginProvider, setLoading } = useContext(AuthContext);

  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();

  //   if (token) {
  //     navigate("/");
  //   }

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, roll, email, department, semester, password } =
      event.target.elements;

    const userData = {
      name: name.value,
      roll: roll.value,
      email: email.value,
      department: department.value,
      semester: semester.value,
      password: password.value,
    };
    // console.log(user);

    createUser(email.value, password.value)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: name.value,
          // photoURL: imageData.data.url,
        };
        updateUser(userInfo)
        .then( async () => {
            await addUser(userData);
          navigate(from, { replace: true });
          toast.success("Account created successfully");
        })
        .catch((error) => {
          console.log(error);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // google login

  // const handelGoogleLogin = () => {
  //   loginProvider(googleProvider)
  //     .then((result) => {
  //       const user = result.user;
  //       // saveUser();
  //       navigate(from, { replace: true });
  //     })
  //     .catch((error) => {
  //       console.log(errorMessage);
  //     });
  // };

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
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
