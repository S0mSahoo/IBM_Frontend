import React from 'react'
import { useState } from 'react';
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import ImpactCard from './ImpactCard';

const Impacting = ({reviews}) => {

  const [index,setIndex] = useState(0);

  function leftSlideHandler(){
    if(index-1<0){
      setIndex(reviews.length-1);
    }
    else{
      setIndex(index-1);
    }
    
  }
  function rightSlideHandler(){
    if(index+1>=reviews.length){
      setIndex(0);
    }
    else{
      setIndex(index+1);
    }

  }
  function formHandler(){
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSeUu9MR4kf5jp-pOKxGax4LCWfDkNYxEOY68B_lk4Vl9BEdiw/viewform?usp=sf_link", "_blank", "noopener,noreferrer");
    }

  return (
    <div className="flex flex-col w-[90vw] md:w-[60vw] bg-white justify-center items-center mt-3 p-10 transition-all duration-700 hover:shadow-xl rounded-md relative top-5 left-0">
      <ImpactCard review={reviews[index]}/>
      <div className="flex text-3xl mt-1 gap-3 text-violet-400 font-bold mx-auto text-center">
        <div onClick={leftSlideHandler} className="cursor-pointer text-theme"><FiChevronLeft /></div>
        <div onClick={rightSlideHandler} className="cursor-pointer text-theme"><FiChevronRight /></div>
        
      </div>
      <div className="mt-6 ">
        <button className="bg-theme hover:bg-royalblue transition-all duration-200 cursor-pointer px-10 py-3 rounded-3xl font-bold text-white text-lg " onClick={formHandler}>Write One</button>
      </div>
      
      
    </div>
  )
}

export default Impacting;
