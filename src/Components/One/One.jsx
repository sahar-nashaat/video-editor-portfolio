import React, { Component } from 'react';

class One extends Component {
  render() {
    return (
      <>
        <div
          className="row p-5 grad justify-content-center text-center"
          style={{ gap: '2rem' }}
        >
          <h2 className="pt-4 text-white fs-1">Premium 3D Viral Reels</h2>

          <div className="col-lg-2 col-sm-4">
            <div className="card cardBg text-white" style={{ width: '100%' }}>
              <iframe
                width="100%"
                height="360"
                src="https://youtube.com/embed/pPGLou3OH8E"
                title="Arnab Delivery Services Video"
              ></iframe>
              <div className="card-body px-0">
                <p className="card-title fw-bolder w-100">
                  Arnab Delivery Services
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="card cardBg text-white" style={{ width: '100%' }}>
              <iframe
                width="100%"
                height="362"
                src="https://youtube.com/embed/bNA9UgcF5ss"
                title="Malak Hatem Video"
              ></iframe>
              <div className="card-body">
                <p className="card-title fw-bolder">Malak Hatem</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="card cardBg text-white" style={{ width: '100%' }}>
              <iframe
                width="100%"
                height="360"
                src="https://youtube.com/embed/65TZtOiB6FQ"
                title="Toufic Kreidieh Video"
              ></iframe>
              <div className="card-body">
                <p className="card-title fw-bolder">Toufic Kreidieh</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="card cardBg text-white" style={{ width: '100%' }}>
              <iframe
                width="100%"
                height="360"
                src="https://youtube.com/embed/x2-XcoV657c"
                title="Scoop Wholefoods Video"
              ></iframe>
              <div className="card-body">
                <p className="card-title fw-bolder">Scoop Wholefoods</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="card cardBg text-white" style={{ width: '100%' }}>
              <iframe
                width="100%"
                height="360"
                src="https://www.youtube.com/embed/m7Poz6_AVjE?si=RfvnlE91GHwh6I1E"
                title="City Doctor Video"
              ></iframe>
              <div className="card-body">
                <p className="card-title fw-bolder">City Doctor</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default One;
