import React, { Component } from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import shady from '../../img/frontshady.jpg'
import Services from '../Services/Services';
import One from '../One/One';
import Two from '../Two/Two';
import Three from '../Three/Three';
import Four from '../Four/Four';
import Clients from '../Clients/Clients';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return <>
        

        <div className="row grad text-white p-5">
            <div className="col-md-7   p-5">
                <h3 className='shadyClr'>Hello, I’m</h3>
            <h1 className=' display-1  fw-bold ' >Shady Ali</h1>
            <p className=' fs-5'>Video Editor</p>
            <p className='py-5 fs-4 lead'>Welcome to my video editing portfolio! I specialize in creating high-quality video content for businesses and individuals. I offer a range of services, from simple edits to complex 3D animations.</p>
            <Link to="/services"><button className='btn px-3 fs-5 py-2 text-white w-50 rounded-3'>Check Services</button>
            </Link>
            </div>
            <div className="col-md-5">
            <div className='py-5 '>
                <img src={shady} className='rounded-circle w-100'  alt="" />
            </div>
            </div>
        </div>
        
    <About/>
    <Clients/>
    <Contact/>

        </>
    }
}

export default Home;