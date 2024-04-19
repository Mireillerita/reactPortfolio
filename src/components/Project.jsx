import React from "react";
import Project1 from '../../public/project1.jpg';
import RandomEmog from '../../public/randomEmog.png';
import Rockgame from '../../public/Rockgame.png';
import AgeCalc from '../../public/ageCalc.png';
import contactApp from '../../public/contactApp.png';
import CountriesApp from '../../public/countriesApp.png';

const Project = () =>{
  return (
  <div name='project' className="w-full bg-[#EEE1C6] h-screen project text-black">
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-centerw-full h-full">
        <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4  border-yellow-200 ">Project</p>
        <p>Please check out some recent my works </p>

        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div style={{backgroundImage: `url(${Project1})`}} className="shadow-lg shadow-[#0d0e0f] group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto contentP">
                
                <div className="opacity-0 text-center group-hover:opacity-100">

                <span className="font-bold tracking-wide uppercase">
                    BR Architecture
                </span>
                <div className="pt-6 text-center">
                <a href="/">
                <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 py-2 m-2 bg-white text-black font-bold">
                  wireframes
                  </button>
                  </a>
                </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${RandomEmog})`}} className="shadow-lg shadow-[#0d0e0f] group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto contentP">
                
                <div className="opacity-0 text-center group-hover:opacity-100">

                <span className="font-bold tracking-wide uppercase">
                    Random Emoji game
                </span>
                <div className="pt-6 text-center">
                <a href="/">
                <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 py-2 m-2 bg-white text-black font-bold">
                  wireframes
                  </button>
                  </a>
                </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${Rockgame })`}} className="shadow-lg shadow-[#0d0e0f] group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto contentP">
                
                <div className="opacity-0 text-center group-hover:opacity-100">

                <span className="font-bold tracking-wide uppercase">
                Rock,Paper and Scissor game
                </span>
                <div className="pt-6 text-center">
                <a href="/">
                <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 py-2 m-2 bg-white text-black font-bold">
                  wireframes
                  </button>
                  </a>
                </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${AgeCalc })`}} className="shadow-lg shadow-[#0d0e0f] group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto contentP">
                
                <div className="opacity-0 text-center group-hover:opacity-100">

                <span className="font-bold tracking-wide uppercase">
                Age calculator
                </span>
                <div className="pt-6 text-center">
                <a href="/">
                <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 py-2 m-2 bg-white text-black font-bold">
                  wireframes
                  </button>
                  </a>
                </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${contactApp })`}} className="shadow-lg shadow-[#0d0e0f] group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto contentP">
                
                <div className="opacity-0 text-center group-hover:opacity-100">

                <span className="font-bold tracking-wide uppercase">
                Contact app
                </span>
                <div className="pt-6 text-center">
                <a href="/">
                <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 py-2 m-2 bg-white text-black font-bold">
                  wireframes
                  </button>
                  </a>
                </div>
                </div>
            </div>
            
            <div style={{backgroundImage: `url(${CountriesApp })`}} className="shadow-lg shadow-[#0d0e0f] group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto contentP">
                
                <div className="opacity-0 text-center group-hover:opacity-100">

                <span className="font-bold tracking-wide uppercase">
                Countries App
                </span>
                <div className="pt-6 text-center">
                <a href="/">
                <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 py-2 m-2 bg-white text-black font-bold">
                  wireframes
                  </button>
                  </a>
                </div>
                </div>
            </div>

        </div>
    </div>
  </div>
  )
}
export
 default Project