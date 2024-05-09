import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      className='p-[20px] md:px-[100px] md:h-screen'
    >
      <div className='md:w-[80%] md:text-start text-center'>
        <h1 className='text-3xl font-bold italic text-yellow-200'>
          ABOUT ME
        </h1>
        <p className='text-xl p-3 '>Hi I am<i className='text-yellow-200'> Muhammad Ishaq.</i> A passionate <i className='text-yellow-200'>Front-end Developer,</i> I thrive on transforming creative ideas into interactive digital experiences.
          With a blend of technical expertise and design sensibility,
          I specialize in crafting intuitive user interfaces that captivate and engage audiences.</p>
        <h1 className='text-xl font-bold p-2'>
         <i className='text-yellow-200'>My Expertise</i> 
        </h1>
        <ul className='p-2 text-xl'>
          <li className='py-2'>
          <strong className='italic text-yellow-200'>Languages: </strong>Proficient in <i className='text-yellow-200'>HTML, CSS, and JavaScript,</i>
           I leverage the latest web technologies to build responsive and visually stunning websites.
          </li>
          <li className='py-2'>
          <strong className='italic text-yellow-200'>Frameworks & Libraries: </strong> Experienced with popular frameworks like <i className='text-yellow-200'>React.js, </i>
          I streamline development processes and enhance user experiences with dynamic content and seamless interactivity.
          </li>
          <li className='py-2'>
          <strong className='italic text-yellow-200'>Responsive Design: </strong>  I prioritize mobile-first development to ensure that websites look 
          and perform flawlessly across all devices, from smartphones to desktops.
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default About;
