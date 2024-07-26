import React from 'react'
import '../css/Podcasts.css'
import podcasts from '../data/podcasts.json'

const Podcasts = () => {
  return (
    <div className="podcasts-container">
      <h2>Podcasts 🎙️</h2>
        <div className="podcasts-grid">
                {podcasts.map(story => (
                    <div key={story.id} className="podcasts-card">
                        <img src={story.image} alt={story.title} className="podcasts-image" />
                        <h3>{story.title}</h3>
                        <h3>{story.owner}</h3>
                        <p>{story.content}</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Podcasts