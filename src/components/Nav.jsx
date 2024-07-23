import React, { useState } from 'react';
import '../css/Nav.css';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toClick = () => {
        navigator.clipboard.writeText(document.getElementById('number').innerText)
            .then(() => {
                alert("Copied the text: " + document.getElementById('number').innerText);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    };

    return (
        <div id="nav">
            <div id="n_left">
                <span>HNN</span>
            </div>
            <div id="n_mid">
                <li>HealthCare</li>
                <li>Nutrition</li>
                <li>Services</li>
                <li>About Us</li>
            </div>
            <div id="n_right">
                <h5>Call <span id="number" onClick={toClick}>9876543201</span> or</h5>
                <span>Consult Online</span>
            </div>
            <div id="n_ham" onClick={toggleMenu}>
                <svg id="hamburger" xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
            </div>
            {isOpen && (
                <div id="n_cross" style={{ opacity: '1', zIndex: '1' }}>
                    <svg id="cross" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16" onClick={toggleMenu}>
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                    <div id="n_upper">
                        <h5>Call <span id="number" onClick={toClick}>9876543201</span> or</h5>
                        <span>Consult Online</span>
                    </div>
                    <div id="n_lower">
                        <li>HealthCare</li>
                        <li>Nutrition</li>
                        <li>Services</li>
                        <li>About Us</li>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Nav;
