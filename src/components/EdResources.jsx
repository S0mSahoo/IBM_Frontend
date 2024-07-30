import React from 'react'
import { Link } from 'react-router-dom';
import '../css/EdResources.css';

// react icons
import { SiGooglepodcasts } from "react-icons/si";
import { GiBookCover } from "react-icons/gi";
import { GrArticle } from "react-icons/gr";
import { MdOndemandVideo } from "react-icons/md";

const EdResources = () => {
  return (
    <div className='parent'>
        {/* heading */}
        <div>
            <h1 className='ed-heading  text-center align-center text-5xl my-8'><span>Educational</span> Resources 📖</h1>
        </div>

        {/* ebooks and articles */}
        <div className='parent-sub'>
            <div className='parent-cont'>
                <Link to='/ebooks'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <GiBookCover className='icons' />
                            </div>
                            <div class="flip-card-back">
                                <p class="title">eBooks</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='/articles'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <GrArticle className='icons' />
                            </div>
                            <div class="flip-card-back">
                                <p class="title">Articles</p>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to='/podcasts'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <SiGooglepodcasts className='icons' />
                            </div>
                            <div class="flip-card-back">
                                <p class="title">Podcasts</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='/videos'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <MdOndemandVideo className='icons' />
                            </div>
                            <div class="flip-card-back">
                                <p class="title">Videos</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        </div>

        {/* podcasts and videos */}
        {/* <div className='parent-cont'>
            <Link to='/podcasts'>
                <div className='child-cont'>
                    <img src="" alt="" />
                    <h2 className='text-xl text-gray-200 p-2 text-center'>Podcasts</h2>
                </div>
            </Link>
            <Link to='videos'>
                <div className='child-cont'>
                    <img src="" alt="" />
                    <h2 className='text-xl text-gray-200 p-2 text-center'>Videos</h2>
                </div>
            </Link>
        </div> */}

    </div>
    )
}

export default EdResources