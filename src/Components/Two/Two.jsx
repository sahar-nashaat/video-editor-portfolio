import React, { Component } from 'react';

class Two extends Component {
  render() {
    return (
      <>
        <div
          className="row p-5 grad justify-content-center text-center"
          style={{ gap: '2rem' }}
        >
          <h2 className="pt-4 text-white fs-1">Standard</h2>

          <div className="col-lg-2 col-sm-4">
            <div className="card cardBg text-white">
              <iframe
                width="100%"
                height="360"
                src="https://youtube.com/embed/zCadAxBjMKM"
                title="Life Diagnostic Video"
              ></iframe>
              <div className="card-body px-0">
                <p className="card-title fw-bolder w-100">Life Diagnostic</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="card cardBg text-white">
              <iframe
                width="100%"
                height="360"
                src="https://youtube.com/embed/rm0BgzHRC3Y"
                title="Trifid Media Video"
              ></iframe>
              <div className="card-body">
                <p className="card-title fw-bolder">Trifid Media</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="card cardBg text-white">
              <iframe
                width="100%"
                height="360"
                src="https://youtube.com/embed/oP3CcqkMgr4"
                title="Diplomat Properties Video"
              ></iframe>
              <div className="card-body">
                <p className="card-title fw-bolder">Diplomat Properties</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="card cardBg text-white">
              <iframe
                width="100%"
                height="360"
                src="https://www.youtube.com/embed/Ep_5diJBss8?si=g9E46nxpI7eInNUq"
                title="With Zaky Video"
              ></iframe>
              <div className="card-body">
                <p className="card-title fw-bolder">With Zaky</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="card cardBg text-white">
              <iframe
                width="100%"
                height="360"
                src="https://www.youtube.com/embed/iBIjIjign1U?si=zRg3YlDkQObZZSsp"
                title="Uncles Production Video"
              ></iframe>
              <div className="card-body">
                <p className="card-title fw-bolder">Uncles Production</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="card cardBg text-white">
              <iframe
                width="100%"
                height="360"
                src="https://www.youtube.com/embed/r2RBZTqbxRY"
                title="Saleh Video"
              ></iframe>
              <div className="card-body">
                <p className="card-title fw-bolder">Salah</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="card cardBg text-white">
              <iframe
                width="100%"
                height="360"
                src="https://youtube.com/embed/78WDGkpl0j8"
                title="Arnab 2 Video"
              ></iframe>
              <div className="card-body">
                <p className="card-title fw-bolder">Arnab 2</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Two;
