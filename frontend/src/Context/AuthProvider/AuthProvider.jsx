import React, { createContext } from "react";
import app from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { loginUser } from "../../API/userRequest";
import { toast } from "react-hot-toast";
// import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate()

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = async (userData) => {
    setLoading(true);
    const { data } = await loginUser(userData);
    // console.log(data.data);
    if (data?.status === "success") {
      window.localStorage.setItem("token", data?.data);
      window.localStorage.setItem("loggedin", true);
      toast.success("Login Successfully");
      //   navigate(from, { replace: true });
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
    createUser,
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

// import React, { createContext } from 'react';
// import app from '../../firebase/firebase.config';
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
// import { useState } from 'react';
// import { useEffect } from 'react';

// export const AuthContext = createContext();

// const auth = getAuth(app);

// const AuthProvider = ({children}) => {

//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     const signIn = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     const updateUser = (userInfo) => {
//         return updateProfile(auth.currentUser, userInfo)
//     }

//     // login provider
//     const loginProvider = (provider) => {
//       setLoading(true);
//       return signInWithPopup(auth, provider);
//     };

//     const logOut = () => {
//         setLoading(true);
//         return signOut(auth)
//     }

//     useEffect( () => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             console.log('User observing');
//             setUser(currentUser);
//             setLoading(false);
//         })

//         return () => unsubscribe();
//     }, [])

//     const authInfo = {
//         createUser,
//         signIn,
//         user,
//         logOut,
//         updateUser,
//         loading,
//         loginProvider

//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;
