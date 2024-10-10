import { render } from '@react-three/fiber'
import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className="font-medium sm:text-xl text-center">
            {text}
        </p>
        <Link className="neo-brutalism-white neo-btn" to={link}>
            {btnText}
            <img className='w-6 h-6 object-contain' src={arrow} />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1
            className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'
        >
            Hi! I'm <span className='font-semibold'>Bárbara</span>👋
            <br />
            A Ssr Fullstack Developer and Game Developer from Argentina. 🇦🇷
        </h1>
    ),
    2: (
        <InfoBox
            text="I'm working since 2021 as a Fullstack developer, you can check out my work experience here."
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Led multiple projects to success over the years. Curious about the impact?"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="You can take a look at my art."
            link="/art"
            btnText="My portfolio"
        />
    ),
    5: (
        <InfoBox
            text="And there's an overview of Chrono-Steam, my most beloved project."
            link="/chrono-steam"
            btnText="See more"
        />
    ),
    6: (
        <InfoBox
            text="Have a project in mind?"
            link="/contact"
            btnText="Let's talk"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo