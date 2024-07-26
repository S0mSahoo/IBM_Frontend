import React from 'react'
import { Link } from 'react-router-dom';
import '../css/EdResources.css';

const EdResources = () => {
  return (
    <div className='parent'>
        {/* heading */}
        <div>
            <h1 className='ed-heading  text-center align-center text-5xl my-8'><span className='font-bold text-blue-500'>Educational</span> Resources 📖</h1>
        </div>

        {/* ebooks and articles */}
        <div className='parent-cont'>
            <Link to='/ebooks'>
                <div className='child-cont   w-96 min-w-64 h-64 mx-10 my-10 bg-blue-500 rounded-xl'>
                    <img src="" alt="" />
                    <h2 className='sub-heads'>eBooks</h2>
                </div>
            </Link>
            <Link to='/articles'>
                <div className='child-cont   w-96 min-w-64 h-64 mx-10 my-10 bg-blue-500 rounded-xl'>
                    <img src="" alt="" />
                    <h2 className='sub-heads'>Articles</h2>
                </div>
            </Link>

            <Link to='/podcasts'>
                <div className='child-cont'>
                    <img src="" alt="" />
                    <h2 className='sub-heads'>Podcasts</h2>
                </div>
            </Link>
            <Link to='videos'>
                <div className='child-cont'>
                    <img src="" alt="" />
                    <h2 className='sub-heads'>Videos</h2>
                </div>
            </Link>
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