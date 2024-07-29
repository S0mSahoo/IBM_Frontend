import React from 'react';
import '../css/Videos.css';
import videos from '../data/videos.json';

import 'bootstrap/dist/css/bootstrap.min.css';

const Videos = () => {
  return (
    <div className='parent-container'>
      <div className='heading-container'>
        <h1 className='heading'><span>Wellness Watch</span> Top Health Videos 📺</h1>
      </div>
      
      <div className='video-container'>
        {videos.map((video) => (
          <div className='video-content' key={video.id}>
            <div class="iframe-video ratio ratio-21x9">
              <iframe src={video.content} title="YouTube video" allowfullscreen></iframe>
            </div>
              <h2>{video.title}</h2>
              <p>{video.owner}</p>
              <hr/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;