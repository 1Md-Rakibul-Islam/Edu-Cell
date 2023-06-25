import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="title">Registration</div>
      <form action="#">
        <div className="user__details">
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
            <span className="details">Password</span>
            <input
              type="password"
              name="password"
              placeholder="********"
              required
            />
          </div>
        </div>
        <div className="button">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
