import React from 'react'
import '../css/Podcasts.css'
import podcasts from '../data/podcasts.json'
import Aos from 'aos'
Aos.init()
const Podcasts = () => {
  return (
    <div data-aos='fade-up' className="podcasts-container">
      <h2 className='pod-head'>Podcasts 🎙️</h2>
      
      <div className="podcasts-grid">
        {podcasts.map(story => (
        <div key={story.id} data-aos='fade-up' className="podcasts-card">
          <div className='pod-img-cont'>
            {/* <img src={story.image} alt={story.title} className="podcasts-image" /> */}
            <img src="https://img.freepik.com/premium-vector/multicolor-sound-wave-from-equalizer_97886-192.jpg?w=740" alt={story.title} className="podcasts-image" />
          </div>
          
          <div className='podcast-text-sec'>
            <div>
              <h3 className='pod-title'>{story.title}</h3>
            </div>
            <div className='bottom-sec'>
              <h3 className='owner'>{story.owner}</h3>
              <a className="listen" href={story.content}>Listen</a>
            </div>  
          </div>
        
        </div>
        ))}
      </div>
    </div>
  )
}

export default Podcasts