import React, { Component } from 'react';

class Three extends Component {
  render() {
    return (
      <>
        <div
          className="row p-5 grad justify-content-center text-center"
          style={{ gap: '2rem' }}
        >
          <h2 className="pt-4 text-white fs-1">Light</h2>

          <div className="col-lg-2 col-sm-4">
            <div className="card cardBg text-white" style={{ width: '100%' }}>
              <iframe
                width="100%"
                height="360"
                src="https://youtube.com/embed/ReWmTpxpHk0"
                title="Eisa Alhabib"
              ></iframe>
              <div className="card-body px-0">
                <p className="card-title fw-bolder w-100">
                Eisa Alhabib
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="card cardBg text-white" style={{ width: '100%' }}>
              <iframe
                width="100%"
                height="362"
                src="https://youtube.com/embed/LdpWA-f0g6w"
                title="Noor Sweid Video"
              ></iframe>
              <div className="card-body">
                <p className="card-title fw-bolder">Noor Sweid</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="card cardBg text-white" style={{ width: '100%' }}>
              <iframe
                width="100%"
                height="360"
                src="https://youtube.com/embed/loGHtsOwpMo"
                title="Hello Chef Video"
              ></iframe>
              <div className="card-body">
                <p className="card-title fw-bolder">Hello Chef</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="card cardBg text-white" style={{ width: '100%' }}>
              <iframe
                width="100%"
                height="360"
                src="https://www.youtube.com/embed/SdnjfpTxCOY"
                title="Create Nation Marketing Video"
              ></iframe>
              <div className="card-body">
                <p className="card-title fw-bolder">Create Nation</p>
              </div>
            </div>
          </div>


        </div>
      </>
    );
  }
}

export default Three;
