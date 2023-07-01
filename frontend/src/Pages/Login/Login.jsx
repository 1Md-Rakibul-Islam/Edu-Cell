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
    toast.success("Login Successfully");
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

// import React, { useContext, useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";
// import { supabase } from "../../Hooks/supabase";
// import { Auth } from '@supabase/auth-ui-react'
// import { ThemeSupa } from '@supabase/auth-ui-shared'

// const Login = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location.state?.from?.pathname || "/";

//   const [user, setUser] = useState(null);
//   const [usr, setUsr] = useState({});

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const email = data.get("email");
//     const password = data.get("password");

//     setUsr({
//       email,
//       password
//     })

//     // console.log(email, password);
//     try {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email: email,
//         password: password,
//       });
//       setUser(data?.user);
//       console.log(data);
//     } catch (error) {
//       alert(error);
//     }

//     event.preventDefault();
//   };

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//   }

//   const handleReset = async () => {
//     await supabase.auth.resetPasswordForEmail('rakibul9bd@gmail.com', {
//       redirectTo: 'http://localhost:5173/login',
//     })

//   }

//   const handleConfirm = async () => {
//     await supabase.auth.updateUser({ password: usr.password })
//   }

//   const [session, setSession] = useState(null)

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session)
//     })

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session)
//     })

//     return () => subscription.unsubscribe()
//   }, [])

//   console.log(session);

//   // console.log(user);

//   return (
//     <div className="login">
//       <div className="container">
//         <div className="title">Login</div>
//         <form onSubmit={handleSubmit}>
//           <button onClick={handleLogout}>Logout</button>
//           <button onClick={handleReset}>Reset</button>
//           <button onClick={handleConfirm}>Confirm Password</button>
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
//           <button type="submit" className="btn-primary">
//             Sign In
//           </button>
//           <div className="signup__link">
//             <Link to="/reset">Forgate Password?</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useContext } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";
// import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

// const Login = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location.state?.from?.pathname || "/";
//   const { user, signIn } = useContext(AuthContext);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const email = data.get("email");
//     const password = data.get("password");

//     signIn(email, password)
//       .then(() => {
//         toast.success("Login successfully");
//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         console.error(error);
//         toast.error("Login failed");
//       });
//   };

//   return (
//     <div className="login">
//       <div className="container">
//         <div className="title">Login</div>
//         <form onSubmit={handleSubmit}>
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
//           <button type="submit" className="btn-primary">
//             Sign In
//           </button>
//           <div className="signup__link">
//             <Link to="/reset">Forgate Password?</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
