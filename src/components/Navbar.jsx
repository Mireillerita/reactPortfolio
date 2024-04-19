import React  from "react"
import  {useState} from "react";
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaGithub} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
const Navbar =() => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex items-center justify-between px-4 bg-[#08111e] text-gray-300">
        <div>
        <img src="./Logo.jpg" className="w-[50px] h-[70px]"/>
        </div>
        {/* menu */}
        <div>
            <ul className=" md:flex hidden">
                <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
        </div>
        {/* hamburg */}
        <div onClick={handleClick} className="md:hidden z-10">
         {!nav ? <FaBars/> : <FaTimes />}

        </div>
         {/* Mobile menus */}
         <ul className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-[#08111e] flex flex-col justify-center items-center'}>
                     <li className="py-6 text-1xl uppercase font-semibold ">Home</li>
                    <li className="py-6 text-1xl uppercase font-semibold ">About</li>
                    <li className="py-6 text-1xl uppercase font-semibold ">Skills</li>
                    <li className="py-6 text-1xl uppercase font-semibold ">Work</li>
                    <li className="py-6 text-1xl uppercase font-semibold ">Contact</li>
                </ul>
         
         {/* Social icons */}
         <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-full rounded-l-none">
                <a className="flex justify-between items-center w-full text-black" href="/">
                    Facebook <FaFacebook size={30}/>
                </a>
            </li>

            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333] rounded-full rounded-l-none mt-2">
                <a className="flex justify-between items-center w-full text-black" href="/">
                    Github <FaGithub size={30}/>
                </a>
            </li>

            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-300 rounded-full rounded-l-none mt-2">
                <a className="flex justify-between items-center w-full text-black" href="/">
                     <HiOutlineMail size={30}/>
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600 rounded-full rounded-l-none mt-2">
                <a className="flex justify-between items-center w-full text-black" href="/">
                    Instagram <FaInstagram size={30}/>
                </a>
            </li>
        </ul>
         </div>
    </div>
  )
}
export default Navbar