import { render } from '@react-three/fiber'
import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons';
import { socialLinks } from '../constants';

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
        <div className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8">
            <h1
                className=' text-white mx-5'
            >
                Hi! I'm <span className='font-semibold'>Bárbara</span>👋
                <br />
                A Ssr Fullstack Developer and Game Developer from Argentina. 🇦🇷
            </h1>
            <div className="flex justify-center grid-cols-12 pt-4 gap-2">
            {socialLinks && socialLinks.map((socialLink) => {
                return(
                    <button className="rounded-full transition duration-300 ease-in-out transform hover:bg-slate-600 hover:scale-20 w-7 h-7 ">
                    <Link
                        to={socialLink.link}>
                        <img src={socialLink.iconUrl} />
                    </Link>
                    </button>
                    )
            })}
            </div>
        </div>
    ),
    2: (
        <InfoBox
            text="I'm working since 2021 as a Fullstack Developer, you can check out my work experience here."
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="You can check out my projects i've done until now."
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="You can take a look at my art."
            link="/art"
            btnText="My art"
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
            text="Have a project in mind? Let's bring it to light together!"
            link="/contact"
            btnText="Let's talk"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo