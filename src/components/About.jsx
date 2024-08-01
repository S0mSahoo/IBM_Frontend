/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../css/About.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

function About() {

  return (
    <div >
      <section className="section-white ">
        <div className="container ">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="section-title">The Team of <span className="text-[#e7c620]">WEB WIZARD</span></h2>
              <p className="section-subtitle"></p>
            </div>
            <div className=" flex justify-evenly ">
              <div className="h-[40vh] w-[40vw]">
              <img  src="https://img.freepik.com/free-vector/meeting-concept-illustration_114360-717.jpg?t=st=1722515373~exp=1722518973~hmac=5617c1f0e940ab1792fdf62f797d8945e38d7d8d8b774850cfac14826dccb56e&w=740" className="" alt="" />

              </div>

              <div className="col-sm-6 col-md-4">
              <div className="team-item ">
                
                <h3>Who are we?</h3>
                <div className="team-info">
                  
                </div>
                <p>
                Welcome to the Health and Nutrition Network (HNN), where we are dedicated to eradicating hunger and enhancing health in our communities. Our mission is to empower local communities by providing access to nutritious food, essential health services, and wellness education. We collaborate with NGOs and local organizations to ensure every community member thrives. Our platform includes donation portals, resource mapping, virtual workshops, telemedicine services, and community forums. Join us in creating sustainable solutions for hunger and health, driving positive social impact, and building healthier, hunger-free communities. Together, we can make a difference.
                </p>
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
            
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default About;
