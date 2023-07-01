import React, { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { addUser, loginUser } from "../../API/userRequest";
import { toast } from "react-hot-toast";
// import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate()

  const signUp = async (userData) => {
    setLoading(true);
    // console.log("sign", userData);
    const {data} = await addUser(userData);
    console.log("SignUp", data);
    if (data?.status === "success") {
      window.localStorage.setItem("token", data?.data);
      window.localStorage.setItem("loggedin", true);
      toast.success("Login Successfully");
      navigate(from, { replace: true });
    }
    setLoading(false);
    return data;
  };


  const signIn = async (userData) => {
    setLoading(true);
    const { data } = await loginUser(userData);
    // console.log(data.data);
    if (data?.status === "success") {
      window.localStorage.setItem("token", data?.data);
      window.localStorage.setItem("loggedin", true);
      toast.success("Account Created please check your Email");
      navigate(from, { replace: true });
    }
    setLoading(false);
    return data;
  };

  const logOut = () => {
    setLoading(true);
    return window.localStorage.clear();
  };

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const response = await fetch("http://localhost:5000/users/auth", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            token: window.localStorage.getItem("token"),
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setLoading(false);
          setUser(data.data);
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchuser();
  }, []);

  console.log(72, user);

  const authInfo = {
    signUp,
    signIn,
    user,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
