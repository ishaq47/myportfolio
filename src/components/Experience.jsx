import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'

function Experience() {
    return (
        <div className=' p-[20px] md:px-[100px] md:h-screen mt-[100px] md:text-start text-center'>
            <div className='md:w-[80%]'>
                <h1 className='text-3xl font-bold italic text-yellow-200'>
                    EXPERIENCE
                </h1>
                <div className='w-[20px] h-[20px] bg-yellow-400 rounded-full mt-[40px]'></div>
                
                <div className='relative  md:ml-10 p-3'>
                    <div className='flex flex-wrap gap-2'>
                    <p className='text-xl p-1  font-semibold italic text-yellow-200'>TECHCREATOR</p>
                    <div className='flex gap-1   '>
                            <FaLocationArrow className='self-center text-gray-400 ' />
                            <a className='font-light text-gray-400  self-center'>Swabi, KPK, Pakistan</a>
                        </div>
                        </div>
                    <p className='text-xl italic text-gray-400'>November-2023 to Present</p>
                    <p className='text-gray-400 text-xl font-light'>Since November 2023, I've immersed myself in the world of frontend development, driven by curiosity and a passion for crafting captivating digital experiences. From mastering HTML,
                        CSS, and JavaScript to exploring cutting-edge framework like React, every project has been a chance to innovate and elevate. Collaborating with diverse teams and staying plugged into industry trends, I've honed my skills and embraced the ethos of community-driven development. As I continue on this journey,
                        I'm excited to push boundaries and create impactful experiences that resonate globally.</p>
                </div>
                <div className='w-[20px] h-[20px] flex justify-end items-end bg-yellow-400 rounded-full mt-[20px]'></div>

            </div>
        </div>
    )
}

export default Experience