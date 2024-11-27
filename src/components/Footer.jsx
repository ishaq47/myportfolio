import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { FaFacebook, FaGithub, FaLinkedin, FaLocationArrow } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

function Footer() {
    return (
        <footer className='bg-gray-900 text-white p-6 md:flex justify-between items-center'>
            <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
                <div className='flex gap-3 p-2 hover:bg-yellow-600 hover:text-white w-fit rounded-xl transition-colors duration-300'>
                    <MdMail className='self-center text-xl' />
                    <a href='mailto:mik9649820@gmail.com' className='font-semibold'>mik9649820@gmail.com</a>
                </div>
                <div className='flex gap-3 p-2 hover:bg-yellow-600 hover:text-white w-fit rounded-xl transition-colors duration-300'>
                    <BiPhoneCall className='self-center text-xl' />
                    <a href='tel:+923018849473' className='font-semibold'>+923018849473</a>
                </div>
                <div className='flex gap-3 p-2 hover:bg-yellow-600 hover:text-white w-fit rounded-xl transition-colors duration-300'>
                    <FaLocationArrow className='self-center text-xl' />
                    <a href='' className='font-semibold'>Maneri Bala, Swabi, Pakistan</a>
                </div>
            </div>
            <div className='flex gap-4 mt-4 md:mt-0'>
                <a href='https://www.facebook.com/profile.php?id=100077201024283&mibextid=ZbWKwL' target="_blank" rel="noopener noreferrer">
                    <FaFacebook className='text-3xl hover:text-yellow-500 cursor-pointer transition-colors duration-300' />
                </a>
                <a href='https://www.linkedin.com/in/ishaqcoder/' target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='text-3xl hover:text-yellow-500 cursor-pointer transition-colors duration-300' />
                </a>
                <a href='https://github.com/ishaq47' target="_blank" rel="noopener noreferrer">
                    <FaGithub className='text-3xl hover:text-yellow-500 cursor-pointer transition-colors duration-300' />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
