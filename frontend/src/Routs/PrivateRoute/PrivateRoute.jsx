// import React from 'react';
// import { useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
// import Loading from '../../Components/Loading';

// const PrivateRoute = ({children}) => {
//     const {user, loading} = useContext(AuthContext);
//     const location = useLocation();

//     if(!localStorage.getItem('token')){
//         return <Navigate to='/login' state={{from: location}} replace></Navigate>
//     }
//     if (user) {
//         return children;
//     }
//     return <Navigate to='/login' state={{from: location}} replace></Navigate>

// };

// export default PrivateRoute;

// PrivateRoute.js
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Loading from "../../Components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" state={{ from: location }} replace />; // Show a loading indicator or any other appropriate component
  }

  if (loading) {
    <div>Loading.....</div>
  }

  return children;
};

export default PrivateRoute;
