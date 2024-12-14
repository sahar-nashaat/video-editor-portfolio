import React, { Component } from 'react';
import about from '../../img/11zon_cropped.jpeg'
class About extends Component {
    render() {
        return <>
        <div className="row grad text-white p-5">
            <div className="col-md-7 p-5">
                <h2 className='fs-1 '>About Me</h2>
                <p className='py-5 fs-4 lead'>
                I am a passionate video editor with years of experience in creating engaging and professional videos. I have a strong understanding of video editing software and techniques, and I am always eager to learn new skills.
                </p>
            </div>
            <div className="col-md-5 py-5">
            <img src={about} className='w-100 ' alt="" />
            </div>
        </div>
        </>
    }
}

export default About;