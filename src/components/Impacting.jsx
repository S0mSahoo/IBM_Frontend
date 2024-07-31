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
    window.open('https://forms.gle/your-google-form-link', '_blank');
  }

  return (
    <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <ImpactCard review={reviews[index]}/>
      <div className="flex text-3xl mt-1 gap-3 text-violet-400 font-bold mx-auto text-center">
        <div onClick={leftSlideHandler} className="cursor-pointer hover:text-violet-500"><FiChevronLeft /></div>
        <div onClick={rightSlideHandler} className="cursor-pointer hover:text-violet-500"><FiChevronRight /></div>
        
      </div>
      <div className="mt-6 ">
        <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg " onClick={formHandler}>Write One</button>
      </div>
      
      
    </div>
  )
}

export default Impacting;
