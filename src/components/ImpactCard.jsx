import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import ReviewStars from './ReviewStar.jsx';


const ImpactCard = ({review}) => {
    return (
        <div className="relative flex flex-col md:relative h-fit">

            <div className="flex justify-center">
                <div className="flex w-[140px] h-[140px]"><img className="aspect-square object-cover rounded-full" src={review.image}  /></div>
                {/* <div className=" w-[22vw] h-[22vw] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div> */}
            </div>

            <div className="text-center my-3">
                <p className="font-bold text-2xl capitalize leading-3">{review.name}</p>
            </div>

            <div  className="text-center">
                <p className="text-royalblue text-md uppercase">{review.ailment}</p>
            </div>

            <div className="text-theme mx-auto mt-2"><FaQuoteLeft/></div>

            <div className="text-center mt-2 text-slate-500 ">
                {review.text}
            </div>

            <div className="text-theme mx-auto mt-2"><FaQuoteRight/></div>

            <div><ReviewStars star={review.star}/></div>

            

            

        
        </div>
    )
}

export default ImpactCard;
