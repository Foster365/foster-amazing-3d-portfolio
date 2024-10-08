import React from 'react'
import { artSkills, developerSkills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const ChronoSteam = () => {
  return (
    <section
      className="max-container"
    >
      <h1 className="head-text">Welcome to my <span className="blue-gradient_text font-semibold drop-shadow">Art </span>👋</h1>
      <div
        className="py-10 flex flex-col gap-3 text-slate-500"
      >
        <p>
          A Fullstack and game developer, based in Argentina. I'm always willing to learn and implement new technologies and skills.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">
          My developer Skills
        </h3>
        <div
          className="mt-16 flex flex-wrap gap-12"
        >
          {developerSkills.map((s) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  
                  src={s.imageUrl}
                  alt={s.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">
          My art Skills
        </h3>
        <div
          className="mt-16 flex flex-wrap gap-12"
        >
          {artSkills.map((s) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  
                  src={s.imageUrl}
                  alt={s.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div
          className="py-10 flex flex-col gap-3 text-slate-500"
        >
          <p>
            There's a summary of my current job, where I learned and leveled up many skills, teaming up with a lot of smart people.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {
              experiences.map((e) => (
                <VerticalTimelineElement
                  key={e.company_name}
                  date={e.date}
                  icon={
                    <div
                      className="flex justify-center items-center w-full h-full"
                    >
                      <img
                        src={e.icon}
                        alt={e.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ background: e.iconBg }}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: e.iconBg,
                    boxShadow: 'none'
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {e.title}
                    </h3>
                    <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>
                      {e.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {e.points.map((p, index) => (
                      <li className="text-black-500/50 font-normal pl-1 text-sm"
                        key={`experience-point-${index}`}
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  )
}

export default ChronoSteam