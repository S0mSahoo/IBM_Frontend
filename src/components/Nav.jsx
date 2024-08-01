import React from 'react'
import '../css/Nav.css';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom';
import logo from '../assets/Fascinate_theme.png'
export default function Nav() {
    gsap.registerPlugin(useGSAP);
    useGSAP(
        () => {
            // gsap code here...
            var tl = gsap.timeline();
            tl.from('#n_left', {
                y: -10,
                opacity: 0,
                duration: .5
            })
            tl.from('#n_mid>li', {
                y: -10,
                opacity: 0,
                duration: .4,
                stagger: 0.2
            })
            tl.from('#n_right *', {
                y: -10,
                opacity: 0,
                duration: .4,
                stagger: 0.2
            })
        },
    )

    function toClick() {
        navigator.clipboard.writeText(document.querySelector('.number').innerHTML)
            .then(() => {
                closeHam();
                alert("Number Copied: " + document.querySelector('.number').innerText);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    }

    function openHam() {
        document.getElementById('nav').style.backdropFilter = 'none';
        document.getElementById('n_cross').style.opacity = '1';
        document.getElementById('n_cross').style.zIndex = '100';
        document.getElementById('n_cross').style.visibility = 'visible';
        document.getElementById('n_cross').style.backdropFilter = 'blur(10px)';
    }

    function closeHam() {
        // console.log('Hello')
        document.getElementById('nav').style.backdropFilter = 'blur(5px)';
        document.getElementById('n_cross').style.opacity = '0';
        document.getElementById('n_cross').style.zIndex = '-1';
        document.getElementById('n_cross').style.visibility = 'hidden';
        document.getElementById('n_cross').style.backdropFilter = 'none';
    }

    return (
        <div>
            <div id="nav">
                <Link to='/'>
                    <div id="n_left">
                        <img src={logo} alt="" />
                    </div>
                </Link>
                <div id="n_mid">
                    <li onClick={closeHam}><Link to='/'>HealthCare</Link></li>
                    <li onClick={closeHam}><Link to='/education'>Education</Link></li>
                    <li onClick={closeHam}><Link to='/impacts'>Impacts</Link></li>
                    <li onClick={closeHam}><Link to='/'>Support</Link></li>
                    {/* <li onClick={closeHam}>About Us</li> */}
                </div>
                <div id="n_right">
                    {/* <h5>Call <span className="number" onClick={toClick}>9876543201</span> or</h5> */}
                    <Link to='/donation' onClick={closeHam}>Donate</Link>
                </div>
                <div id="n_ham">
                    <svg id="hamburger" onClick={openHam} xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" className="bi bi-list"
                        viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                    <div id="n_cross">
                        <svg id="cross" onClick={closeHam} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                        <div id="n_upper">
                            {/* <h5>Call <span className="number" onClick={toClick}>9876543201</span> or</h5> */}
                            <Link to='/donation' onClick={closeHam}>Donate</Link>
                        </div>
                        <div id="n_lower">
                            <li onClick={closeHam}><Link to='/'>HealthCare</Link></li>
                            <li onClick={closeHam}><Link to='/education'>Education</Link></li>
                            <li onClick={closeHam}><Link to='/impacts'>Impacts</Link></li>
                            <li onClick={closeHam}><Link to='/'>Support</Link></li>
                            {/* <li onClick={closeHam}>About Us</li> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
