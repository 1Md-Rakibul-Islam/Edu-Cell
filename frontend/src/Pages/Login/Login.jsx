import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="title">Login</div>
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
          <button type="submit" className="btn-secendary">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
