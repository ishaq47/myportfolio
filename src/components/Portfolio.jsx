import React from 'react';
import techcreator from '../images/techcreator.png';
import dream from '../images/dream.png';
import drip from '../images/drip.png';
import gym from '../images/gym.jpg';
import news from '../images/news.jpg';
import move from '../images/move.jpg';
import rpm from '../images/rpm.jpg';
import kkra from '../images/kkra.jpg';
import global from '../images/global.jpg';


function Portfolio() {
    const projects = [
        {
            image: techcreator,
            link: 'https://techcreator.co/',
            text: 'TECHCREATORS',
        },
        {
            image: dream,
            link: 'https://www.myreeldream.ai/',
            text: 'MY REEL DREAM',
        },
        {
            image: drip,
            link: 'https://dripnbodied.com/',
            text: 'DRIP N BODIED',
        },
        {
            image: global,
            link: 'https://globalbids-frontend-v1.vercel.app',
            text: 'Global Bids',
        },
        {
            image: kkra,
            link: 'https://kkra-travel.vercel.app',
            text: 'KKRA',
        },
        {
            image: move,
            link: 'https://move-muse12.netlify.app',
            text: 'Move Muse',
        },
        {
            image: gym,
            link: 'https://gym-website-frontend.vercel.app',
            text: 'Gym Website',
        },
        {
            image: news,
            link: 'https://newsaggregator1.netlify.app',
            text: 'News Aggregator',
        },
        {
            image: rpm,
            link: 'https://rpm-service1.netlify.app',
            text: 'RPM Service',
        },
        
    ];

    return (
        <div className='p-6 md:px-20 flex flex-col  justify-center items-center md:items-start md:justify-start  text-white min-h-screen'>
            <h1 className='text-4xl font-bold italic text-yellow-300 mb-10 md:mb-20'>
                PORTFOLIO
            </h1>
            <div className='flex flex-wrap gap-8 justify-center'>
                {
                    projects.map((project, id) => {
                        return (
                            <div
                                key={id}
                                className='w-80 flex flex-col items-center hover:animate-pulse justify-center rounded-2xl bg-gray-800  shadow-lg hover:shadow-xl transition-all duration-300 project-card'
                                style={{ animationDelay: `${id * 0.2}s` }}
                            >
                                <img src={project.image} className='w-full h-48 object-contain bg-center rounded-t-2xl' alt={project.text} />
                                <div className='p-4 w-full text-center'>
                                    <p className='text-xl font-semibold text-yellow-300 mb-4'>{project.text}</p>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <button className='border rounded hover:text-white hover:bg-yellow-600 text-yellow-400 border-yellow-400 p-2 transition-colors duration-300'>
                                            Visit Website
                                        </button>
                                    </a>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Portfolio;
