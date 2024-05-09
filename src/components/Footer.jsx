import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { FaFacebook, FaGithub, FaLinkedin, FaLocationArrow } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'

function Footer() {
  return (
    <div className='pb-5 md:flex justify-between'> 
      <div className='flex flex-wrap pb-2 '>
        <div className='flex gap-3 p-2 hover:bg-yellow-600   hover:text-white w-fit rounded-xl'>
          <MdMail className='self-center text-xl' />
          <a href='mailto:mik9649820@gmail.com' className=' font-semibold'> mik9649820@gmail.com</a>
        </div>
        <button className='flex gap-3 p-2  w-fit rounded-xl  hover:bg-yellow-600   hover:text-white'>
          <BiPhoneCall className='self-center text-xl' />
          <a href='tel:+923018849473' className=' font-semibold'> +923018849473</a>
        </button>
        <button className='flex gap-3 p-2  w-fit rounded-xl  hover:bg-yellow-600   hover:text-white'>
          <FaLocationArrow className='self-center text-xl' />
          <a href='' className=' font-semibold'>Maneri Bala, Swabi, Pakistan</a>
        </button>
      </div>
      <div className='flex gap-2 items-end justify-end self-center'>
          <a href='https://www.facebook.com/profile.php?id=100077201024283&mibextid=ZbWKwL'><FaFacebook className='text-3xl hover:text-yellow-500 cursor-pointer' /></a>
          <a href='https://www.linkedin.com/in/ishaqcoder/'><FaLinkedin className='text-3xl hover:text-yellow-500 cursor-pointer' /></a>
          <a href='https://github.com/ishaq47'><FaGithub className='text-3xl hover:text-yellow-500 cursor-pointer' /></a>
        </div>
    </div>
  )
}

export default Footer