import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../css/EdResources.css';
import Aos from 'aos';
Aos.init()

// react icons
import { SiGooglepodcasts } from "react-icons/si";
import { GiBookCover } from "react-icons/gi";
import { GrArticle } from "react-icons/gr";
import { MdOndemandVideo } from "react-icons/md";

const EdResources = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
    <div className='parent' data-aos='fade-up'>
        {/* heading */}
        <div>
            <h1 className='ed-heading'><span>Educational</span> Resources 📖</h1>
        </div>

        {/* ebooks and articles */}
        <div className='parent-sub'>
            <div className='parent-cont'>
                <Link to='/ebooks'>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <GiBookCover className='icons' />
                            </div>
                            <div className="flip-card-back">
                                <p className="title">eBooks</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='/articles'>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <GrArticle className='icons' />
                            </div>
                            <div className="flip-card-back">
                                <p className="title">Articles</p>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to='/podcasts'>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <SiGooglepodcasts className='icons' />
                            </div>
                            <div className="flip-card-back">
                                <p className="title">Podcasts</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='/videos'>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <MdOndemandVideo className='icons' />
                            </div>
                            <div className="flip-card-back">
                                <p className="title">Videos</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    </div>
    )
}

export default EdResources