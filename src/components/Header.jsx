import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-scroll';
import logo from '../images/logo1.png'
function Header() {
  return (
    
    <div className='flex justify-between border-dotted border-yellow-200 p-5  '>
      <img src={logo} className='w-[150px] mt-[-50px] ml-[-50px] md:ml-0'/>
      <ul className='hidden md:flex gap-4 self-center font-serif md:mt-[-40px] text-xl app'>
        <li><Link to="home" spy={true} smooth={true} duration={2000} className='hover:text-yellow-500 hover:border-b-2 hover:animate-pulse  border-yellow-500  cursor-pointer'>HOME</Link></li>
        <li><Link to="about" spy={true} smooth={true} duration={2000} className='hover:text-yellow-500 hover:border-b-2 hover:animate-pulse  border-yellow-500  cursor-pointer'>ABOUT</Link></li>
        <li><Link to="portfolio" spy={true} smooth={true} duration={2000} className='hover:text-yellow-500 hover:border-b-2 hover:animate-pulse  border-yellow-500  cursor-pointer'>PORTFOLIO</Link></li>
        <li><Link to="experience" spy={true} smooth={true} duration={2000} className='hover:text-yellow-500 hover:border-b-2 hover:animate-pulse  border-yellow-500  cursor-pointer'>EXPERIENCE</Link></li>
        <li><Link to="contact" spy={true} smooth={true} duration={2000} className='hover:text-yellow-500 hover:border-b-2 hover:animate-pulse  border-yellow-500  cursor-pointer'>CONTACT</Link></li>
      </ul>
      <div className='flex gap-2 mt-[15px] md:mt-0'>
        <a href='https://www.facebook.com/profile.php?id=100077201024283&mibextid=ZbWKwL'><FaFacebook className='text-3xl hover:text-yellow-500 cursor-pointer' /></a>
        <a href='https://www.linkedin.com/in/ishaqcoder/'><FaLinkedin className='text-3xl hover:text-yellow-500 cursor-pointer' /></a>
        <a href='https://github.com/ishaq47'><FaGithub className='text-3xl hover:text-yellow-500 cursor-pointer' /></a>
      </div>
    </div>
  );
}

export default Header;
