import React from 'react';
import html from '../images/html.jpeg';
import css from '../images/css.jpeg';
import js from '../images/js.jpeg';
import redux from '../images/reduxtoolkit.png';
import react from '../images/react.png';
import tailwind from '../images/tailwind.png';
import git from '../images/git.png';
import github from '../images/github.png';

function Skills() {
    const skills = [
        {
            image: html,
            text: 'HTML'
        },
        {
            image: css,
            text: 'CSS'
        },
        {
            image: js,
            text: 'JAVASCRIPT'
        },
        {
            image: redux,
            text: 'REDUX TOOLKIT'
        },
        {
            image: react,
            text: 'REACT'
        },
        {
            image: tailwind,
            text: 'TAILWIND CSS'
        },
        {
            image: git,
            text: 'GIT'
        },
        {
            image: github,
            text: 'GITHUB'
        },
    ];

    return (
        <div className='p-6 md:px-20 flex flex-col  justify-center items-center md:items-start md:justify-start md:h-screen  text-white'>
            <h1 className='text-4xl font-bold italic text-yellow-300 mb-10 md:mb-20'>
                MY SKILLS
            </h1>
            <div className='flex flex-wrap gap-8 justify-center'>
                {
                    skills.map((skill, id) => {
                        return (
                            <div
                                key={id}
                                className='w-32 h-32 md:w-48 md:h-48 flex flex-col items-center justify-center rounded-2xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 skill-card'
                                style={{ animationDelay: `${id * 0.2}s` }}
                            >
                                <img src={skill.image} className='h-20 w-20 md:h-24 md:w-24 rounded-full object-cover' alt={skill.text} />
                                <p className='text-yellow-400 text-lg md:text-xl font-semibold mt-4'>{skill.text}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Skills;
