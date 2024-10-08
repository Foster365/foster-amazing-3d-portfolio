import React from 'react'
import { artSkills, developerSkills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import { ChronoSteamLogo } from '../assets/images';
import { Navbar } from '../components/Navbar';
import GridGallery from '../components/GridGallery';
import {
  Screenshot1,
  Screenshot2,
  Screenshot3,
  Screenshot4,
  Screenshot5,
  Screenshot6,
  Screenshot7,
  Screenshot8,
  Screenshot9,
  Screenshot10,
  Screenshot11,
  Screenshot12,
  Screenshot13,
  Screenshot14,
  Screenshot15,
  Screenshot16,
  Screenshot17,
  Screenshot18,
  Screenshot19,
  Screenshot20,
  Screenshot21,
  Screenshot22
} from '../assets/images/index';
const images = [
  Screenshot1,
  Screenshot2,
  Screenshot3,
  Screenshot4,
  Screenshot5,
  Screenshot6,
  Screenshot7,
  Screenshot8,
  Screenshot9,
  Screenshot10,
  Screenshot11,
  Screenshot12,
  Screenshot13,
  Screenshot14,
  Screenshot15,
  Screenshot16,
  Screenshot17,
  Screenshot18,
  Screenshot19,
  Screenshot20,
  Screenshot21,
  Screenshot22
]
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
            Chrono
          </h1>
          <p className="mt-5 flex flex-col gap-3 text-slate-500">
            Chrono is an experiment from Johann Stanley, a member of the Universal Association of Science. He's half human and half robot, and is missing an arm, where various weapons fit (The weapons dropped all along the game).
          </p>
        </div>

        <div className='chrono-steam-section'>
          <h1 className="head-text mt-5 flex flex-col gap-3">
            The MVP
          </h1>
          <p className="mt-5 flex flex-col gap-3 text-slate-500">
            Chrono-Steam's MVP consts of 1 tutorial level, 3 procedurally generated dungeons, and a final boss level. You have a large variety of weapons, all of them dropable. Each one has a certain durability level, combo attacks, and an ultimate attack. The player health regenerates over time, and once depleted you'll start over from a previous checkpoint.
          </p>
          <GridGallery images={images} />
        </div>

        <div className='chrono-steam-section'>
          <h1 className="head-text mt-5 flex flex-col gap-3">
            What about future?
          </h1>
          <p className="mt-5 flex flex-col gap-3 text-slate-500">
            Chrono-Steam is currently under enhancement process. I'm refactoring some code, polishing some details and modeling new characters.
            The idea is to implement a skill system, better designed power ups, more levels, harder bosses and finishing up the comic, which consts of three parts and a final chapter.
            So stay tuned! You're free to play the demo, and tell me what do you think I can improve, what do you like and also, why not, what you don't like.
            All constructive feedback is welcome! c:
          </p>
        </div>
      </section>
    </div>
  )
}

export default ChronoSteam