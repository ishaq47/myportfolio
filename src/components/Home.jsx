import React from 'react';
import ishaq from '../images/ishaq.png';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div>
      <div className='flex flex-wrap gap-4 h-full md:h-screen justify-around items-center mt-[-50px] md:mt-[-100px]  mb-10'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <p className='text-5xl '>I'M <strong className='text-yellow-400'>Muhammad Ishaq</strong><br />
            <p>MERN Stack <br /> Developer</p>
          </p>
          <button className='p-2 px-4 border-[1px] text-yellow-400 hover:text-white border-yellow-400 mt-5  hover:bg-yellow-600'><Link to="contact" spy={true} smooth={true} duration={500} >CONTACT</Link></button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
        >
          <img src={ishaq} className=' rounded-full w-[100%]' alt="Ishaq's profile" />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
