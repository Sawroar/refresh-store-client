import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Home/Footer/Footer';

const MainLayout = () => {
    return (
        <div>   
            <Navbar></Navbar>      
            <Outlet></Outlet>
            <Footer></Footer>
          
            </div>
    );
};

export default MainLayout;