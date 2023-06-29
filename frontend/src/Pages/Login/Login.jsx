// import React from "react";

// const Login = () => {
//   return (
//     <div className="login">
//       <div className="container">
//         <div className="title">Login</div>
//         <form action="#">
//           <div className="user__details">
//             <div className="input__box">
//               <span className="details">Email</span>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="johnsmith@hotmail.com"
//                 required
//               />
//             </div>
//             <div className="input__box">
//               <span className="details">Password</span>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="********"
//                 required
//               />
//             </div>
//           </div>
//           <button type="submit" className="btn-primary">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { user, signIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    signIn(email, password)
      .then(() => {
        toast.success("Login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Login failed");
      });
  };

  return (
    <div className="login">
      <div className="container">
        <div className="title">Login</div>
        <form onSubmit={handleSubmit}>
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
