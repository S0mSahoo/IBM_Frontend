/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "../css/About.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    // <div className="parent-con">
    //   <section className="section-white">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-md-12 text-center">
    //           <h2 className="pt-4 section-title">The Team of <span className="text-[#023460]">WEB WIZARDS</span></h2>
    //           <p className="section-subtitle"></p>
    //         </div>
    //         <div className="page-content flex justify-center">
    //           <div className="img-contt">
    //             <img src="https://img.freepik.com/free-vector/meeting-concept-illustration_114360-717.jpg?t=st=1722515373~exp=1722518973~hmac=5617c1f0e940ab1792fdf62f797d8945e38d7d8d8b774850cfac14826dccb56e&w=740" className="imgg" alt="" />
    //           </div>

    //           <div className="team-text">
    //             <div className="team-item ">
    //               <div className="team-info">
    //                 <h2>Who are we?</h2>
    //               </div>
    //               <div className="hnn-note">
    //                 <p>
    //                   Welcome to the Health and Nutrition Network (HNN), where we are dedicated to eradicating hunger and enhancing health in our communities. Our mission is to empower local communities by providing access to nutritious food, essential health services, and wellness education. We collaborate with NGOs and local organizations to ensure every community member thrives. Our platform includes donation portals, resource mapping, virtual workshops, telemedicine services, and community forums. Join us in creating sustainable solutions for hunger and health, driving positive social impact, and building healthier, hunger-free communities. Together, we can make a difference.
    //                 </p>
    //               </div>
    //               <ul className="team-icon ">
    //                 <li>
    //                   <a href="#" className="twitter ">
    //                     <FaTwitter className="" />
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#" className="pinterest">
    //                     <FaPinterestP />
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#" className="facebook">
    //                     <FaFacebookF />
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#" className="dribble">
    //                     <FaInstagram />
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>

    //       </div>
    //     </div>
    //   </section>

    // </div>

    <div className="about-parent">
      <div className="about-heading-div">
        <h1 className="about-heading">The team behind HNN - <span>WEB WIZARDS</span></h1>
      </div>
      <div className="about-container">
        {/* picture */}
        <div className="about-img-container">
          <img src="https://img.freepik.com/free-vector/meeting-concept-illustration_114360-717.jpg?t=st=1722515373~exp=1722518973~hmac=5617c1f0e940ab1792fdf62f797d8945e38d7d8d8b774850cfac14826dccb56e&w=740" className="imgg" alt="" />
        </div>
        {/* text-section */}
        <div className="about-text-container">
          <h3 className="about-text-heading">Idea Behind HNN</h3> <hr />
          <p className="about-text">
            Welcome to the Health and Nutrition Network (HNN), where we are dedicated to eradicating hunger and enhancing health in our communities. Our mission is to empower local communities by providing access to nutritious food, essential health services, and wellness education. We collaborate with NGOs and local organizations to ensure every community member thrives. Our platform includes donation portals, resource mapping, virtual workshops, telemedicine services, and community forums. Join us in creating sustainable solutions for hunger and health, driving positive social impact, and building healthier, hunger-free communities. Together, we can make a difference.
          </p>
        </div>
      </div>
      <div>
        <div className="socials">
          <ul className="team-icon ">
            <li>
              <a href="#" className="twitter ">
                <FaTwitter className="" />
              </a>
            </li>
            <li>
              <a href="#" className="pinterest">
                <FaPinterestP />
              </a>
            </li>
            <li>
              <a href="#" className="facebook">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#" className="dribble">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
