import React from "react";
import "./Contact.css";
import vector from "../../img/undraw_group_video_re_btu7.svg";

const WhatsAppButton = ({ phoneNumber }) => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${+201100911600}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Shady_CV.pdf"; // Replace with your CV path
    link.download = "Shady_CV.pdf"; // Default download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="row  p-5 grad">
      <div className="col-md-7 p-5">
      <h2 className='fs-1 pb-3 text-white '>Contact Information</h2>          <p className="py-4 fs-4 lead text-white">
            Ready to bring your video ideas to life? Contact me today to discuss
            your project.
          </p>
          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="whatsapp-button"
            style={{
              backgroundColor: "#25D366", // WhatsApp green color
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              marginRight: "10px", // Add spacing between buttons
            }}
          >
            Let's talk
            <i className="fa-brands ps-2 fa-whatsapp"></i>
          </button>
          {/* Download CV Button */}
          <button
            onClick={handleDownloadCV}
            className="cv-button"
            style={{
              backgroundColor: "#007bff", // Blue color for CV button
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Download CV
            <i className="fa-solid ps-2 fa-download"></i>
          </button>


          <div className="info mt-4">
            <ul className="px-0 py-4">
              <li className="d-flex text-white align-items-baseline ">
                  <i className="fa-solid icons fa-envelope"></i>
                  <p className="ps-2" >info@chuckyediting.com</p>
              </li>
              <li className="d-flex text-white align-items-baseline ">
              <a
                  href="https://www.linkedin.com/in/shady-aly-56862027a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands icons fa-linkedin-in "></i>
                </a><p className="ps-2" >shady-aly-56862027a</p>
              </li>
              <li className="d-flex text-white align-items-baseline ">
              <a
                  href="https://www.instagram.com/chucky_editing/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands icons fa-instagram "></i>
                </a><p className="ps-2" >chucky_editing</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-5 p-5">
          <img src={vector} className="w-100 px-4" alt="" />
        </div>

      </div>
    </>
  );
};

export default WhatsAppButton;
