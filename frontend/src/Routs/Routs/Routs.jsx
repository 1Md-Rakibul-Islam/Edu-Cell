import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import Page404 from "../../Pages/DisplayError/DisplayError";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Home from "../../Pages/Home/Home";
import Profile from "../../Pages/Profile/Profile";
import ContactUs from "../../Components/ContactUs/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile /></PrivateRoute>,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);