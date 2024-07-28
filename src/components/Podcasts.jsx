import React from 'react'
import '../css/Podcasts.css'
import podcasts from '../data/podcasts.json'

const Podcasts = () => {
  return (
    <div className="podcasts-container">
      <h2 className='pod-head'>Podcasts 🎙️</h2>
      
      <div className="podcasts-grid">
        {podcasts.map(story => (
        <div key={story.id} className="podcasts-card">
          <div className='pod-img-cont'>
            {/* <img src={story.image} alt={story.title} className="podcasts-image" /> */}
            <img src="https://img.freepik.com/free-vector/sound-wave-equalizer-vector-design_53876-61672.jpg?t=st=1721995424~exp=1721999024~hmac=9db31235fc409d37c18de0acee98284081b1dde91d671327009c2a86f0f73e5b&w=740" alt={story.title} className="podcasts-image" />
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