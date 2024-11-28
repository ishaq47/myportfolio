import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      className=' md:px-[100px] flex items-center md:h-screen'
    >
      <div className=' md:text-start  text-center'>
        <h1 className='text-4xl font-bold italic text-yellow-400'>
          ABOUT ME
        </h1>
        <p className='text-xl md:leading-10'>
          Hi, I am <i className='text-yellow-400'>Muhammad Ishaq</i>, a passionate MERN stack developer with a blend of technical expertise and design sensibility.
           I specialize in crafting intuitive user interfaces and robust back-end systems that captivate and engage audiences. 
           Proficient in <i className='text-yellow-400'>HTML, CSS, and JavaScript</i>, I leverage the latest web technologies
            to build responsive and visually stunning websites. Experienced with popular frameworks like 
            <i className='text-yellow-400'>React.js</i> for the front-end and <i className='text-yellow-400'>Node.js,
               Express.js, and MongoDB</i> for the back-end, I streamline development processes and enhance user experiences
                with dynamic content and seamless interactivity. I prioritize mobile-first development to ensure that applications
                 look and perform flawlessly across all devices, from smartphones to desktops.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
