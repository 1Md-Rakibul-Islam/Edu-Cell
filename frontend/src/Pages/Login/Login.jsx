import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { loginUser } from "../../API/userRequest";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { signIn, loading } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = new FormData(event.currentTarget);
    const userId = user.get("userId");
    const password = user.get("password");
    // console.log(userId, password);

    const userData = {
      userId,
      password,
    };
    // console.log(user);
    await signIn(userData);
    if (window.localStorage.getItem("loggedin")) {
    navigate(from, { replace: true });
    }
    event.preventDefault();
  };

  // console.log(user);

  return (
    <div className="login">
      <div className="container">
        <div className="title">Login</div>
        <form onSubmit={handleSubmit}>
          <div className="user__details">
            <div className="input__box">
              <span className="details">User ID</span>
              <input
                type="userId"
                name="userId"
                placeholder="Enter your User ID"
                required
              />
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
            Sign In
          </button>
          <div className="signup__link">
            <Link to="/reset">Forgate Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
