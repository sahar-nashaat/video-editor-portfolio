import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return <><nav class="navbar navbar-expand-lg  navbar-dark cardBg" >
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto h6 py-2">
      <li class="nav-item active">
        <Link class="nav-link cursor-pointer " to="home">Home<span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link cursor-pointer" to="services">Services</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link cursor-pointer" to="about">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link cursor-pointer" to="clients">Clients</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link cursor-pointer" to="contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav></>
    }
}

export default Navbar;