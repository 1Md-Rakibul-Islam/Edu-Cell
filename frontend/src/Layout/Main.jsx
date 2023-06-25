import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;