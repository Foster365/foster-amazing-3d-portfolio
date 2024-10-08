import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'
import { Navbar } from '../components/Navbar'

const Projects = () => {
  return (
    <div>
      <Navbar isDarkBackground={false} />
      <section
        className="max-container"
      >
        <h1 className="head-text">My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span></h1>
        <div
          className="mt-5 flex flex-col gap-3 text-slate-500"
        >
          <p>
            Let's take a look to my projects! You're free to check out the Github repositories and videos specified below.
          </p>
        </div>
        <div
          className="flex flex-wrap my-20 gap-16"
        >
          {projects.map((p) => (
            <div className="lg:w-[400px] w-full" key={p.name}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${p.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={p.iconUrl}
                    alt="Project Icon"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold">
                  {p.name}
                </h4>
                <p className="mt-2 text-slate-500">
                  {p.description}
                </p>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-slate-200" />
        <CTA />
      </section>
    </div>
  )
}

export default Projects