import React from "react";
import HTML from '../../public/htmlLogo.png';
import CSS from '../../public/css.png';
import javaScript from '../../public/javaScript.png';
import gitHub from '../../public/github.png';
import tailwindcss from '../../public/tailwind.png';
import Reactjs from '../../public/react.png';
import c from '../../public/c.png';
import java from '../../public/java.png';

const Skills = () => {
  return (
    <div name='skills' className="w-full h-screen skill text-black  ">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full">
            <div>
                <p className="text-4xl font-bold border-b-4 border-yellow-200 ">Skills</p>
                <p className="py-4"> your design porfifolio content 
                    should showcase your best work.  
                    Include an interactive prototype
                    micro animation, website in motion
                    not just static designs</p>
            </div>
            <div className="w-full text-center py-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={HTML} alt="HTML icon"/>
                <p className="my-4">HTML</p>
              </div>

              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={CSS} alt="CSS icon"/>
                <p className="my-4">CSS</p>
              </div>

              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={javaScript} alt="javaScript icon"/>
                <p className="my-4">javaScript</p>
              </div>

              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Reactjs} alt="Reactjs icon"/>
                <p className="my-4">Reactjst</p>
              </div>

              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={gitHub } alt="gitHub icon"/>
                <p className="my-4">gitHub </p>
              </div>

              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={ tailwindcss} alt="tailwindcss icon"/>
                <p className="my-4">tailwindcss </p>
              </div>

              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={ c} alt="c icon"/>
                <p className="my-4">c++</p>
              </div>

              <div className="hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={ java} alt="java icon"/>
                <p className="my-4">java </p>
              </div>

            </div>
            
        </div>
    </div>
  )
}
export default Skills