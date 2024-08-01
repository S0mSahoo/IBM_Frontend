import React from 'react'
import "../css/Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Footer = () => {
  return (
    <div>

<footer className="footer mt-0 ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-left">
              <p className="footer-text text-white">
                &copy; {new Date().getFullYear()} HNN. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <ul className="footer-social mt-2">
                <li>
                  <a href="#" className="twitter">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" className="facebook">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#" className="instagram">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Debasishb77/IBM_Frontend" target="_blank" className="github">
                  <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer