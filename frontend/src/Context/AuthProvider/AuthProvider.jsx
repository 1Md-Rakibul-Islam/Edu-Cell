import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { addUser, loginUser } from "../../API/userRequest";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = async (userData) => {
    setLoading(true);
    try {
      const { data } = await addUser(userData);
      console.log("SignUp", data);
      if (data?.status === "success") {
        window.localStorage.setItem("token", data?.data);
        window.localStorage.setItem("loggedin", true);
        toast.success("Account Created. Please check your Email");
      }
      return data;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (userData) => {
    setLoading(true);
    try {
      const { data } = await loginUser(userData);
      if (data?.status === "success") {
        window.localStorage.setItem("token", data?.data);
        window.localStorage.setItem("loggedin", true);
        toast.success("Login Successful");
      }
      return data;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const logOut = () => {
    setLoading(true);
    window.localStorage.clear();
    setLoading(false);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://edu-cell.vercel.app/users/auth", {
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
          setUser(data.data);
          if (data.data === 'token expired') {
            alert("Token expired login again")
            logOut();
          }
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

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
