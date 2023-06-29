import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div className=''>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Main;