import React from "react"

const About = () => {
  return (
 <div name='about' className="w-full h-screen about text-white ">
    <div className="flex flex-col justify-centeritems-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 pl-10">
            <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-300">About</p>
              </div>
              <div>

              </div>
        </div>
        <div className="max-w-[1000] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-right text-4xl font-bold ">
                  <p>Hi. I'm Mireille Rita, nice to meet you. please take look around </p>

                </div>
                <div>
                  <p>Mireille, an electronic and telecommunication engineer,
                     brings a blend of technical expertise and innovation to 
                     her role. With a deep understanding of electronics and 
                     telecommunications, she designs and troubleshoots complex
                      systems, ensuring seamless communication networks. Her 
                      meticulous attention to detail and commitment to staying
                       updated with advancements drive progress in these fields,
                        shaping the future of connectivity and communication.</p>

                </div>
              </div>
    </div>
 </div>
  )
}
export

default About