import React, { Component } from 'react';

class Four extends Component {
  render() {
    return (
      <>
        <div
          className="row p-5 grad justify-content-center text-center"
          style={{ gap: '2rem' }}
        >
          <h2 className="pt-4 text-white fs-1">Coloring</h2>

          <div className="col-lg-2 col-sm-4">
            <div className="card cardBg text-white" style={{ width: '100%' }}>
              <iframe
                width="100%"
                height="360"
                src="https://www.youtube.com/embed/0h85Usbq4ck?si=ZY7Bf7OVKrBl9-kv"
                title="Uncles Production"
              ></iframe>
              <div className="card-body px-0">
                <p className="card-title fw-bolder w-100">
                Uncles Production
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="card cardBg text-white" style={{ width: '100%' }}>
              <iframe
                width="100%"
                height="362"
                src="https://youtube.com/embed/cATfAtvA-pY"
                title="Ahmed Dubai Video"
              ></iframe>
              <div className="card-body">
                <p className="card-title fw-bolder">Ahmed Dubai</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="card cardBg text-white" style={{ width: '100%' }}>
              <iframe
                width="100%"
                height="360"
                src="https://www.youtube.com/embed/XpZOvyl_oCc"
                title="Uncles Production Video"
              ></iframe>
              <div className="card-body">
                <p className="card-title fw-bolder">Uncles Production</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="card cardBg text-white" style={{ width: '100%' }}>
              <iframe
                width="100%"
                height="360"
                src="https://www.youtube.com/embed/jtDBsvonZRQ?si=yNWbRdDdOfBnFcTE"
                title="Dr. Magdy  Video"
              ></iframe>
              <div className="card-body">
                <p className="card-title fw-bolder">Dr. Magdy</p>
              </div>
            </div>
          </div>


        </div>
      </>
    );
  }
}

export default Four;
