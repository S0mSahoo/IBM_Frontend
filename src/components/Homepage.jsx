// src/Homepage.js

import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../css/Homepage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';
import bg from '../assets/hero_animated.mp4'
import VanillaTilt from 'vanilla-tilt';
AOS.init();

const Homepage = () => {
    const navigate = useNavigate()
    const applyMeal = () => {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLScnEQEvTAR2d70HK7zDLWF8SlyRNmxXRKTznGY_DmLTKuZOrQ/viewform?usp=sf_link", "_blank", "noopener,noreferrer");
    };
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    useGSAP(
        () => {
            gsap.to('.backplay video', {
                filter: 'blur(8px)',
                duration: 0.4,
                scrollTrigger: {
                    // markers: true,
                    start: 'top 0',
                    end: 'bottom 0',
                    scrub: 1
                }
            })
        }
    )

    const element = document.querySelectorAll('#left > div, #right > div, #top > div, #center > div, #bottom > div')
    VanillaTilt.init(element, {
      max: 10,
      reset: false,
      speed: 200,
      easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)'
    })
    return (
        <div>
            <div className="backplay">
                <video autoPlay muted loop src={bg}></video>
            </div>
            <div className="home-main">
                <div className="page1">
                    <h1 data-aos='fade-up'>{'Health and Nutrition Network'.split(' ').map((word, index) => (
                        <span key={index}>{word.split('').map((letter, index) => (
                            <span key={index}>{letter === '\u00A0' ? '\u00A0' : letter}</span>
                        ))}</span>
                    ))}</h1>
                    <p data-aos='fade-up' data-aos-delay='50'>Fueling Wellness, One Choice at a Time</p>
                    <p data-aos='fade-up' data-aos-delay='50'>Empowering you to live healthier with expert guidance, quality nutrition, and a supportive community. Join the Health and Nutrition Network today!</p>
                </div>
                <div className="page2" >
                    <div id="left" data-aos='fade-up'>
                        <div data-aos='fade-up' data-aos-delay='50'>With a<strong>Soft Drink</strong>in hand, one might just be sipping their way to becoming a statistic among the<strong>8.9 million</strong>osteoporotic fractures annually – that's a bone breaking every<strong>3 seconds</strong></div>
                        <div data-aos='fade-up' data-aos-delay='150'><strong>2.8 million</strong>people die each year as a result of being overweight or obese.
                        </div>
                    </div>
                    <div id="mid" data-aos='fade-up'>
                        <div id="top">
                            <div data-aos='fade-up' data-aos-delay='150'><strong>46%</strong> adults with hypertension are unaware of their condition.
                            </div>
                            <div data-aos='fade-up' data-aos-delay='100'>Sleep apnea can reduce life expectancy by up to<strong>15 years</strong></div>
                        </div>
                        <div id="center">
                            <div data-aos='fade-up' data-aos-delay='100'><strong>600 million</strong>people are going to face hunger by <strong>2030 <span>with</span> 1 in 3</strong> may striggle with moderate to severe Food Insecurity.
                                <p>[All the diseases here are ignited by malnutrition and poor eating and drinking habits.]</p>
                            </div>
                        </div>
                        <div id="bottom">
                            <div data-aos='fade-up'><strong>5%</strong> of the global population is affected by Hyperthyroidism.</div>
                            <div data-aos='fade-up'><strong>50 million</strong>years of healthy life lost in 2019 by Anaemia.
                                <p>Little to no progress has been made since 2000.</p>
                            </div>
                        </div>
                    </div>
                    <div id="right" data-aos='fade-up'>
                        <div data-aos='fade-up'><strong>3 million</strong>youngs lose their life craving for food (Malnutrition), with<strong>821 million</strong>people are chronically undernourished.
                        </div>
                        <div data-aos='fade-up'><strong>5%</strong>adults suffer from depression globally, with over<strong>700,000</strong>people dying from suicide due to depression each year.</div>
                    </div>
                </div>
                <div className="page3" data-aos='fade-up'>
                    <video muted autoPlay loop src="https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/video/home-hero-formotion.mp4" data-aos='fade-up'></video>
                    <span data-aos='fade-up'>24/7 Telemedicine Service</span>
                    <h1 data-aos='fade-up'>Health should always be within reach</h1>
                    <p data-aos='fade-up'>See a doctor or therapist from home, using your phone, tablet or computer.</p>
                    <button onClick={() => navigate('/booking')} data-aos='fade-up' data-aos-offset='90'>Find your Doctor</button>
                </div>
                <div className=" page3 page4" data-aos='fade-up'>
                    <img data-aos='fade-up' src="https://b.zmtcdn.com/fi_assets/762402e988f933f54af71bc448356a391585296130.jpeg" alt="..." />
                    <span data-aos='fade-up'>Apply for meal support</span>
                    <h1 data-aos='fade-up'>Partner with us to end Hunger</h1>
                    <p data-aos='fade-up'>Reach out to us if you're an NGO, private organisation or educational institute that is in need of food support.</p>
                    <button onClick={applyMeal} data-aos='fade-up' data-aos-offset='100'>Partner with Us</button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
