import React from 'react'
import '../css/Articles.css';
import articles from '../data/articles.json'
import Aos from 'aos';
Aos.init()
const Articles = () => {

  return (
    <div data-aos='fade-up' className='articles-parent'>
      <div>
        <h1 className='articles-heading'>Articles 📑</h1>
      </div>

      <div className='articles-grid'>
        {articles.map(story => (
          <div key={story.id} data-aos='fade-up' className="articles-card">
            <div className="article-img-cont">
              <img src={story.image} width="350" height="250" alt={story.id} />
            </div>
            <div className="articles-text-sec">
              <div>
                <h2 className='article-title'>
                  {story.title}
                </h2>
              </div>
              <div className='author-date'>
                <h2 className='article-author'>{story.author}</h2>
                <h2 className='article-date'>May 2, 2024</h2>
              </div>
              <hr />
              <div className='article-last-section'>
                <a href={story.content}>Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>       
    </div>
  )
}

export default Articles