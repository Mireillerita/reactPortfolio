import React  from "react"
import  {useState} from "react";
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaGithub} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import { Link } from 'react-scroll';
const Navbar =() => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div name='Home' className="fixed w-full h-[80px] flex items-center justify-between px-4 bg-[#08111e] text-gray-300">
        <div>
        <img src="./Logo.jpg" className="w-[50px] h-[70px]"/>
        </div>
        {/* menu */}
        <div>
            <ul className=" md:flex hidden">
                <li className="uppercase text-sm font-semibold">
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                     </Link></li>
                    
                     <li className="uppercase text-sm font-semibold">
                    <Link to="about" smooth={true} duration={500}>
                        About
                     </Link></li>
                     <li className="uppercase text-sm font-semibold">
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                     </Link></li>
                    
                     <li className="uppercase text-sm font-semibold">
                    <Link to="project" smooth={true} duration={500}>
                        Project
                     </Link></li>
                    <li className="uppercase text-sm font-semibold">
                    <Link to="contact" smooth={true} duration={500}>
                       Contacts
                     </Link></li>
                </ul>
        </div>
        {/* hamburg */}
        <div onClick={handleClick} className="md:hidden z-10">
         {!nav ? <FaBars/> : <FaTimes />}

        </div>
         {/* Mobile menus */}
         <ul className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-[#08111e] flex flex-col justify-center items-center'}>
                     
         <li className="uppercase text-sm font-semibold">
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                     </Link></li>
                     <li className="uppercase text-sm font-semibold">
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                     </Link></li>
                     <li className="uppercase text-sm font-semibold">
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                     </Link></li>
                     <li className="uppercase text-sm font-semibold">
                    <Link onClick={handleClick}  to="project" smooth={true} duration={500}>
                        Project
                     </Link></li>
                     <li className="uppercase text-sm font-semibold">
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                       Contacts
                     </Link></li>
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