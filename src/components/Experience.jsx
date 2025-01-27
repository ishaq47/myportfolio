import React from 'react';
import { motion } from 'framer-motion';
import { FaLocationArrow } from 'react-icons/fa';

function Experience() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='md:px-[100px] md:h-screen md:mt-[100px] md:text-start md:flex md:items-center text-center'
        >
            <div className='md:w-[100%] mx-auto'>
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='text-4xl font-bold italic text-yellow-400 mb-6'
                >
                    EXPERIENCE
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className='relative md:ml-10'
                >
                    <div className='flex flex-wrap gap-2 items-center mb-4'>
                        <p className='text-xl p-1 font-semibold italic text-yellow-200'>TECHCREATOR</p>
                        <div className='flex gap-1'>
                            <FaLocationArrow className='self-center text-gray-400' />
                            <a className='font-light text-gray-400 self-center'>Swabi, KPK, Pakistan</a>
                        </div>
                    </div>
                    <p className='text-xl italic text-gray-400 mb-4'>November 2022 to Present</p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        whileHover={{ scale: 1.05 }}
                        className='text-gray-400 text-xl font-light'
                    >
                        Since November 2023, I've been deeply involved in full-stack development using the MERN stack. I have a strong foundation in setting up and managing backend services with Node.js and Express, and I am particularly confident in my frontend development skills with React. My expertise includes creating dynamic and responsive user interfaces, ensuring seamless integration with backend APIs, and delivering high-quality digital experiences. I thrive in collaborative environments and stay updated with the latest industry trends to continuously improve my skills and contribute to innovative projects.
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Experience;
