import React from 'react'
import { artSkills, developerSkills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import { ChronoSteamLogo } from '../assets/images';
import { Navbar } from '../components/Navbar';
import GridGallery from '../components/GridGallery';
import { chronoImages, chronoSteamMVPImages } from '../constants';
import VerticalGallery from '../components/VerticalGallery';
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons';

const ChronoSteam = () => {
  return (
    <div>
      <Navbar isDarkBackground={true} />
      <section className='wide-container'
      >
        <div className='chrono-steam-section'>
          <img className='' src={ChronoSteamLogo} />
          <h1 className="head-text mt-5 flex flex-col gap-3">
            What is Chrono-Steam?
          </h1>
          <p className="mt-5 flex flex-col gap-3 text-slate-500">
            Chrono-Steam is my University final project. It's a Hack and Slash RPG Roguelike, where we'll incarnate in Chrono's and its creator, Johann Stanley, story.
            In this game, you have to collect three parts of Johann's time machine, retrieving them to him. You'll be able to slash a lot of monsters, bosses and collect weapons and power ups.
          </p>
          <iframe className="mt-5 flex flex-col gap-3 inset-0 w-full z-10 transition duration-200 ease-in" width="750" height="550" src="https://www.youtube.com/embed/UCMA8XXyfbc" title="Chrono-Steam: First gameplay." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen={true}></iframe>
        </div>
        <div className='chrono-steam-section'>
          <h1 className="head-text mt-5 flex flex-col gap-3">
            Chrono - The protagonist of Chrono-Steam
          </h1>
          {console.log("Chrono imgs: ", chronoImages)}
          <VerticalGallery images={chronoImages} />
          <p className="mt-5 flex flex-col gap-3 text-slate-500">
            Chrono is an experiment from Johann Stanley, a member of the Universal Association of Science. He's half human and half robot, and is missing an arm, where various weapons fit (The weapons dropped all along the game).
          </p>
          <iframe className="mt-5 flex flex-col gap-3 inset-0 w-full z-10 transition duration-200 ease-in" width="750" height="550" src="https://www.youtube.com/embed/I3ptfd7eljA" title="Chrono: The hero of Chrono-Steam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className='chrono-steam-section'>
          <h1 className="head-text mt-5 flex flex-col gap-3">
            The Project
          </h1>
          <p className="mt-5 flex flex-col gap-3 text-slate-500">
            Chrono-Steam consts of 1 tutorial level, 3 procedurally generated dungeons, and a final boss level. You have a large variety of weapons, all of them dropable. Each one has a certain durability level, combo attacks, and an ultimate attack. The player health regenerates over time, and once depleted you'll start over from a previous checkpoint.
          </p>
          <GridGallery images={chronoSteamMVPImages} />
        </div>

        <div className='chrono-steam-section'>
          <h1 className="head-text mt-5 flex flex-col gap-3">
            What about the future?
          </h1>
          <p className="mt-5 flex flex-col gap-3 text-slate-500">
            Chrono-Steam is currently under enhancement process. I'm refactoring some code, polishing some details and modeling new characters.
            The idea is to implement a skill system, better designed power ups, more levels, harder bosses and finishing up the comic, which consts of three parts and a final chapter.
            So stay tuned! You're free to play the demo, and tell me what do you think I can improve, what do you like and also, why not, what you don't like.
            All constructive feedback is welcome! c:
          </p>
        </div>

        <div className='chrono-steam-section'>
          <h1 className="head-text mt-5 flex flex-col gap-3">
            Wanna play?
          </h1>
          <p className="mt-5 flex flex-col gap-3 text-slate-500">
            You can play the demo in the link below, follow the instructions in itch io page and enjoy!".</p>
            <p className="mb-5 flex flex-col gap-3 text-slate-500">
            Thanks for playing! have a great day :)</p>
          
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-2 ">
                  <Link
                    to={'https://foster365.itch.io/chrono-steam'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white"
                  >
                    Play Game
                  </Link>
                </button>
        </div>
      </section>
      <div className='footer-chrono-steam'>
      <CTA /></div>
    </div>
  )
}

export default ChronoSteam