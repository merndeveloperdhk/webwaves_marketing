import React from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import { MdCheckCircle, MdMoreTime } from "react-icons/md";

const About = () => {
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2">
          <img
            src="./Images/Digital market.png"
            className=" rounded-lg shadow-md  p-10"
          />
          </div>
          <div className="w-1/2 px-6">
          <h3>About me</h3>
            <h1 className="text-4xl font-bold">I Can marketing any Social media Profile</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex justify-between mb-4">
                <div className="flex gap-2 items-center">
                    <div className="bg-orange-100 p-1 rounded">

                <MdCheckCircle className="text-4xl text-orange-600 " />
                    </div>
                    <div>
                    <h3 className="text-orange-600 font-bold">17+ </h3>
                    <h3 className="font-bold">Complete project </h3>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="bg-orange-100 p-1 rounded">

                <MdMoreTime className="text-4xl text-orange-600 "/>
                    </div>
                    <div>
                    <h3 className="text-orange-600 font-bold">0+ </h3>
                    <h3 className="font-bold">Year of experience </h3>
                    </div>
                </div>
            </div>
            {/* list */}
            <div className="flex justify-between mb-4">
                <div>
                    <h2 className="flex items-center gap-1 "><FaRegCheckSquare className="text-orange-600"/>Digital marketing</h2>
                    <h2 className="flex items-center gap-1 "><FaRegCheckSquare className="text-orange-600"/>Social media account manager</h2>
                </div>
                <div>
                    <h2 className="flex items-center gap-1 "><FaRegCheckSquare className="text-orange-600"/>On Page SEO</h2>
                    <h2 className="flex items-center gap-1 "><FaRegCheckSquare className="text-orange-600"/>Off Page SEO</h2>
                </div>
            </div>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
