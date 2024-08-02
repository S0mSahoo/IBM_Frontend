import React, { useEffect } from "react";
import Impacting from "./Impacting"
import reviews from "../data/impactStories";
import Aos from "aos";
Aos.init()

const Impacts = () => {
  const scrollBar = {
    scrollbarWidth: 'none'
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return( 
  <div className="bg-img flex flex-col w-[100vw] min-h-[100vh] justify-center items-center bg-gray-200 overflow-x-hidden overflow-y-scroll pt-[100px] pb-4" style={scrollBar}  data-aos='fade-up'>
    <div className="text-center">
      <h1 className="text-4xl font-bold"><span className="text-royalblue">Impact</span> Stories</h1>
      <div className="bg-theme h-[4px] w-1/5 mt-1 mx-auto"></div>
    </div>
    <Impacting reviews={reviews}/>
  </div>);
};

export default Impacts;
