import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

class Layout extends Component {
    render() {
        return <>
        <Navbar/>
        <Outlet>
        <Home/>
        </Outlet>
        <Footer/>
        </>
    }
}

export default Layout;