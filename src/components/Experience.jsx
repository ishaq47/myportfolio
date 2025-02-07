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
                    <p className='text-xl italic text-gray-400 mb-4'>January 2023 to January 2025</p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        whileHover={{ scale: 1.05 }}
                        className='text-gray-400 text-xl font-light'
                    >
                        From January 2023 to August 2024, I was involved in full-stack development using the MERN stack. I managed backend services with Node.js and Express and excelled in frontend development with React. I created dynamic and responsive user interfaces, ensured seamless API integration, and delivered high-quality digital experiences.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                    className='relative md:ml-10 mt-8'
                >
                    <div className='flex flex-wrap gap-2 items-center mb-4'>
                        <p className='text-xl p-1 font-semibold italic text-yellow-200'>IDEATION</p>
                        <div className='flex gap-1'>
                            <FaLocationArrow className='self-center text-gray-400' />
                            <a className='font-light text-gray-400 self-center'>Islamabad, Punjab, Pakistan</a>
                        </div>
                    </div>
                    <p className='text-xl italic text-gray-400 mb-4'>February 2025 to Present</p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 2.5 }}
                        whileHover={{ scale: 1.05 }}
                        className='text-gray-400 text-xl font-light'
                    >
                        Since February 2025, I have been working as a frontend developer at Ideation. My role involves creating dynamic and responsive user interfaces using modern web technologies. I collaborate closely with the design and backend teams to ensure seamless integration and deliver high-quality digital experiences.
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Experience;
