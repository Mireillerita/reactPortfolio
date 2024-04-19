import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
 
 const Home = () => {
  return (
  <div name='home' className='w-full h-screen banner '>
    <div className='max-w-[1000px] mx-auto h-full px-8 flex flex-col justify-center'>
        <p className='text-[rgb(68,65,65)]'>HI my name is</p>
        <h1 className='text-4xl text-[rgb(68,65,65)]'> Mireille Rita</h1>
        <h2 className='text-4xl  text-[rgb(68,65,65)]'>I am a frontend developer</h2>
      <p className='text-[rgb(68,65,65)] py-4 max-w-[700px]'>A backend web developer is a person who can develope client software.
      In additional to mastering HTML and CSS Currently, I am focused on building responsive web</p> 
        <div>
          <button className='bg-yellow-300 text-white rounded-full transition-all group border-2 px-6 py-3 my-2  flex items-center hover:bg-yellow-300 hover:border-yellow-300'>
            View work
            <span className='duration-300'>
                <HiArrowNarrowRight className='ml-3' />
            </span>
            </button>  
        </div>
  </div>

  </div>
  )
}
export
 
default Home