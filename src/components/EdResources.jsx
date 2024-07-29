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
            <h1 className='ed-heading  text-center align-center text-5xl my-8'><span className='font-bold text-blue-500'>Educational</span> Resources 📖</h1>
        </div>

        {/* ebooks and articles */}
        <div className='parent-sub'>
            <div className='parent-cont'>
                <Link to='/ebooks'>
                    <div className='child-cont'>
                    <GiBookCover className='icons'/>
                    </div>  
                </Link>
                <Link to='/articles'>
                    <div className='child-cont'>
                        <GrArticle className='icons' />
                    </div>
                </Link>

                <Link to='/podcasts'>
                    <div className='child-cont'>
                        <SiGooglepodcasts className='icons' />
                    </div>
                </Link>
                <Link to='/videos'>
                    <div className='child-cont'>
                        <MdOndemandVideo className='icons' />
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