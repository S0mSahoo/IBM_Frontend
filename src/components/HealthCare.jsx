import React from 'react'
import '../css/HealthCare.css'
import { Link } from 'react-router-dom'
import Aos from 'aos'
Aos.init()
export default function HealthCare() {
  return (
    <div data-aos='fade-up'>
      <video data-aos='fade-up' className='back' muted autoPlay loop src='https://s3.amazonaws.com/images.teladoc.com/teladoc-health-next/video/home-hero-formotion.mp4'></video>
      <div data-aos='fade-up' className="hc_main">
        <div data-aos='fade-up' className="hc_page1">
          <h1 data-aos='fade-up'>For your <strong id='pink'>physical health</strong>. For your <strong id='green'>mental health</strong>. For <strong id='cyan'>clinicians</strong>. For <strong id='violet'>hospitals</strong>. For all of it in one place. For life.</h1>
          <h4>A high-quality care experience—anywhere, anytime</h4>
          <div className="click">
            <Link to='/booking'>Get Care Now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
