import React from 'react';
import './Services.css';
import light from '../../img/LIGHT.png';
import standard from '../../img/STANDARD.png';
import heavy from '../../img/HEAVY.png';
import coloring from '../../img/coloring.png';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <div className="row grad p-5 text-white">
        <h2 className="p-5 fs-1">Services</h2>
        <div className="service px-5 row">
          <div className="col-md-3 d-flex flex-column justify-content-around align-items-center text-center">
            <img src={heavy} className="w-100 rounded-2" alt="" />
            <h4 className="pt-3">Premium 3D Viral Reels</h4>
            <p className="py-2">Demonstrating my skills in creating unique and engaging 3D animation.</p>
            <Link to="/services/heavy" className="btn px-3 py-2 text-white w-50 rounded-3">View Work</Link>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-around align-items-center text-center">
            <img src={standard} className="w-100 rounded-2" alt="" />
            <h4 className="pt-3">Standard Editing</h4>
            <p className="py-2">More advanced editing techniques for professional video content.</p>
            <Link to="/services/standard" className="btn px-3 py-2 text-white w-50 rounded-3">View Work</Link>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-around align-items-center text-center">
            <img src={light} className="w-100 rounded-2" alt="" />
            <h4 className="pt-3">Basic Editing</h4>
            <p className="py-2">Color correction, brightness and contrast adjustments, and basic transitions.</p>
            <Link to="/services/light" className="btn px-3 py-2 text-white w-50 rounded-3">View Work</Link>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-around align-items-center text-center">
            <img src={coloring} className="w-100 rounded-2" alt="" />
            <h4 className="pt-3">Coloring</h4>
            <p className="py-2">
              Contribute to the mood and look of a video by defining its colors by making a professional color correction - grading.
            </p>
            <Link to="/services/coloring" className="btn px-3 py-2 text-white w-50 rounded-3">View Work</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
