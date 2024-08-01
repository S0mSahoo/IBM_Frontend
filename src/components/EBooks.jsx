import React from 'react'
import '../css/EBooks.css'
import eBooks from '../data/eBooks.json'

const EBooks = () => {
  return (
    <div className='eBooks-parent'>
      <div>
        <h1 className='eBooks-heading '>eBooks 🔖</h1>
      </div>
      
      <div className='eBooks-grid'>
        {eBooks.map(story => (
          <div className="eBooks-card">
            <div className='ebook-img-cont'>
              <img src="https://img.freepik.com/free-psd/book-hardcover-mockup_125540-225.jpg?t=st=1722331268~exp=1722334868~hmac=e06a0d167fb0d380dbb4787e4435f661bbc1874e0263c1a56446f465b55cc711&w=826" width='250' height='200' alt="" />
            </div>
            <div className='txt-sec'>
                <div className='txt-top'>
                  <h2>{story.title}</h2>
                </div>
                <div className="txt-bottom">
                  <h2 className='author'>by: {story.author}</h2>
                  <a className="content" href={story.content}>Read now..</a>
                </div>
            </div>
          </div>
        ))}
      </div>        
    </div>
  )
}

export default EBooks