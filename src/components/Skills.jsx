import React from 'react'
import html from '../images/html.jpeg'
import css from '../images/css.jpeg'
import js from '../images/js.jpeg'
import redux from '../images/reduxtoolkit.png'
import react from '../images/react.png'
import tailwind from '../images/tailwind.png'
import git from '../images/git.png'
import github from '../images/github.png'


function Skills() {
    const skill=[
        {
            image:html,
            text:'HTML'
        },
        {
            image:css,
            text:'CSS'
        },
        {
            image:js,
            text:'JAVASCRIPT'
        },
        {
            image:redux,
            text:'TOOLKIT'
        },
        {
            image:react,
            text:'REACT'
        },
        {
            image:tailwind,
            text:'TAILWIND CSS'
        },
        {
            image:git,
            text:'GIT'
        },
        {
            image:github,
            text:'GITHUB'
        },
    ]
  return (
    <div className='p-[20px] md:px-[100px] flex flex-col justify-center items-center md:h-screen '>

<h1 className='text-3xl font-bold italic text-yellow-200 mb-[50px] md:mb-[100px]'>
          MY SKILLS
        </h1>
        <div className='flex flex-wrap gap-6 justify-center '>
            {
                skill.map((skill,id)=>{
                    return   <div key={id} className='md:w-[200px] w-[125px] h-[125px] md:h-[200px] flex flex-col items-center justify-center rounded-xl bg-slate-600 hover:scale-105 transition-all'>
                        <img src={skill.image} className='md:h-[100px] h-[90px] w-[90px] md:w-[100px] rounded-2xl object-cover'/>
                        <p className='hidden md:block text-yellow-500 text-xl font-bold pt-5'>{skill.text}</p>
                    </div>
                })
            }
           

        </div>


    </div>
  )
}

export default Skills