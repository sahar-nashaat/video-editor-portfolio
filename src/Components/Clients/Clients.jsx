import React, { Component } from 'react';
import './Clients.css';
import adnan from '../../img/clients/adnan.jpg';
import yenfaa from '../../img/clients/yenfaa.jpg';
import eisa from '../../img/clients/eisa.webp';
import tawfik from '../../img/clients/images (8).jpeg';
import kaseeb from '../../img/clients/0.jpeg';
import saudi from '../../img/clients/440107671_749711693965788_8303884360190262253_n.jpg';
import nour from '../../img/clients/1712000516842.jpeg';
import malak from '../../img/clients/channels4_profile (1).jpg';
import mahdy from '../../img/clients/1718252608497.jpeg';
import hossam from '../../img/clients/7340476290791079941~c5_1080x1080.jpeg';
import diaa from '../../img/clients/273201537_1861276297396045_1663363031356427552_n (1).jpg';
import basel from '../../img/clients/458990634_1027929648637068_771737664904914066_n.jpg';
import science from '../../img/clients/desktop-annan-inner.jpg';
import gelany from '../../img/clients/images (9).jpeg';
import lina from '../../img/clients/19443331371664378392.jpg';
import youssef from '../../img/clients/Screenshot_2021-01-21-06-51-20-79.png';
import nagwa from '../../img/clients/clogo_2020-02-09-14-20-07_SXfTxOTYo5IHjXu03RoIIwXX.jpg';
import tie from '../../img/clients/images (7).png';



class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showVideo: false, // Track if video should be shown
      selectedVideo: null, // Track which video is selected
    };
  }

  // Toggle video visibility and set selected video
  toggleVideo = (videoUrl) => {
    this.setState((prevState) => ({
      showVideo: !prevState.showVideo,
      selectedVideo: videoUrl || null, // Set video URL if provided
    }));
  };

  renderVideo() {
    const { selectedVideo } = this.state;
    return (
      <div className="video">
        <div className="d-flex w-100 justify-content-center">
          <iframe
            src={`${selectedVideo}?autoplay=1`}
            height="600"
            title="Client Video"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
        <div>
          <i
            className="fa-solid fa-2xl fa-xmark"
            onClick={() => this.toggleVideo(null)} // Close video on click
          ></i>
        </div>
      </div>
    );
  }

  render() {
    const { showVideo } = this.state;
    const clients = [
      { name: 'Adnan Elhelw', img: adnan, video: 'https://youtube.com/embed/FO1yMLdBy5s' },
      { name: 'Yenfaa', img: yenfaa, video: 'https://youtube.com/embed/izJYXICune4' },
      { name: 'Eisa Alhabib', img: eisa, video: 'https://youtube.com/embed/ReWmTpxpHk0' },
      { name: 'Tawfik Kreidieh', img: tawfik, video: 'https://youtube.com/embed/8Uoca70K-zI' },
      { name: 'ElKaseeb', img: kaseeb, video: 'https://youtube.com/embed/cPsSyz2FZeY?' },
      { name: 'Ahmed Saudi', img: saudi, video: 'https://youtube.com/embed/q6hlo7-2_Ug' },
      { name: 'Noor Sweid', img: nour, video: 'https://youtube.com/embed/LdpWA-f0g6w' },
      { name: 'Malak Hatem', img: malak, video: 'https://youtube.com/embed/bNA9UgcF5ss' },
      { name: 'Mahdy Shafiei', img: mahdy, video: 'https://youtube.com/embed/uq5bVkunOFQ' },
      { name: 'Hossam El Emam', img: hossam, video: 'https://youtube.com/embed/1JSlnhay2Os' },
      { name: 'Diaa Allam', img: diaa, video: 'https://youtube.com/embed/v1A2xINBhi8' },
      { name: 'Basel Erabi', img: basel, video: 'https://youtube.com/embed/QzQQGgJgCDQ' },
      { name: 'Share3 El 3loom', img: science, video: 'https://youtube.com/embed/hLpX1i4bTis' },
      { name: 'Ali Gelany', img: gelany, video: 'https://youtube.com/embed/8jnA1bde7Ug' },
      { name: 'Lina Hudhud', img: lina, video: 'https://youtube.com/embed/kL-18ltLW_U' },
      { name: 'Youssef Magdy', img: youssef, video: 'https://youtube/embed/AQJhY7FzGFs' },
      { name: 'Nagwa', img: nagwa, video: 'https://youtube/embed/R7RdWTKarrE' },
      { name: 'UAE Tie House', img: tie, video: 'https://youtube.com/embed/ZwJpyYtjBCQ' },
    ];
    return (
      <>
       <div className="grad row px-5 justify-content-center text-white">
          <div className="row client position-relative p-5 justify-content-center text-center">
            <h2 className="text-white py-4 fs-1">Big Clients</h2>
            {clients.map((client, index) => (
              <div
                key={index}
                className="col-md-2 col-sm-4 col-6"
                onClick={() => this.toggleVideo(client.video)}
              >
                <div className="client-img-wrapper">
                  <img src={client.img} className="client-img rounded-circle" alt={client.name} />
                  <div className="dark"></div>
                </div>
                <p className="text-white">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
        {showVideo && this.renderVideo()}
      </>
    );
  }
}

export default Clients;
