import React from "react";
import { FaDownload } from "react-icons/fa6";

const Banner = () => {
  return (
    
      <div className="hero  bg-[#fff5eb]">
        <div className="hero-content flex-col lg:flex-row-reverse h-[480px] ">
          <img
            src="./Images/Digital market.png"
            className="w-[30%] rounded-lg  h-[480px] pt-2 object-cover" alt="developer"
          />
          <div className="w-[65%] leading-8">
            <p className="">I am a social media manager and digital marketing expert</p>
            <h1 className="text-5xl font-bold">Creative marketing plan and Organic reach.</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            
            <div className="flex gap-2"> 
            <a className="bg-green-700 px-3 py-1 rounded-md text-white flex gap-1 items-center" href="" download>
              <h1><FaDownload /></h1>
               Download my CV
               </a>
            <a className="bg-green-700 px-3 py-1 rounded-md text-white flex gap-1 items-center" href="" >
              
               Github link
               </a>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Banner;
