import React from 'react'
import techcreator from '../images/techcreator.png'
import dream from '../images/dream.png'
import drip from '../images/drip.png'

function Portfolio() {
    const skill=[
        {
            image:techcreator,
            link:'https://techcreator.co/',
            text:'TECHCREATORS',

        },
        {
            image:dream,
            link: 'https://www.myreeldream.ai/',
            text:'MY REEL DREAM',
           
        },
        {
            image:drip,
            link:'https://dripnbodied.com/',
            text:'DRIP N BODIED'
        },
      
    ]
  return (
    <div className='p-[20px] md:px-[100px] flex flex-col justify-center items-center  '>

<h1 className='text-3xl font-bold italic text-yellow-200 mb-[50px] md:mb-[100px]'>
          PORTFOLIO
        </h1>
        <div className='flex flex-wrap gap-6 justify-center'>
            {
                skill.map((skill,id)=>{
                    return   <div key={id} className='md:w-[320px]   flex flex-col items-center justify-center rounded-xl bg-slate-600 hover:scale-105 transition-all'>
                       <img src={skill.image} className='md:w-[300px]  object-cover rounded-xl m-2'/> 
                       <p className='text-xl font-semibold text-yellow-400'>{skill.text}</p>
                       <a href={skill.link}> <button className='border-[1px] rounded hover:text-white hover:bg-yellow-600 text-yellow-400 border-yellow-400 p-2 m-2'>Visit Website</button></a>
                    </div>
                })
            }
           

        </div>


    </div>
  )
}

export default Portfolio