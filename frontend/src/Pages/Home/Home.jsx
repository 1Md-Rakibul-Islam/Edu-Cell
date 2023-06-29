import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Footer from "../../Components/Footer/Footer";
import Entrepreneurs from "./Entrepreneurs/Entrepreneurs";
import Testimonial from "./Testimonial/Testimonial";
import Header from "./Header/Header";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Home = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <>
      <Header />
      <main>
        {
          user && <Entrepreneurs />
        }
        <Testimonial />
        <ContactUs />
      </main>
    </>
  );
};

export default Home;
