import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { loginUser, resetPassword } from "../../API/userRequest";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const ResetPass = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  //   const { signIn, loading } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = new FormData(event.currentTarget);
    const userId = user.get("userId");

    const userData = {
      userId,
    };

    fetch("http://localhost:5000/users/forget-password", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userId,
      })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        alert(data?.status)
    })

    // resetPassword(userId);

    event.preventDefault();
  };

  return (
    <div className="login">
      <div className="container">
        <div className="title">Password Reset</div>
        <form onSubmit={handleSubmit}>
          <div className="user__details">
            <div className="input__box">
              <span className="details">User ID</span>
              <input
                className=""
                type="userId"
                name="userId"
                placeholder="Enter your User ID"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn-primary">
            Submit
          </button>
          <div className="signup__link">
            <Link to="/login">Login now?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPass;
