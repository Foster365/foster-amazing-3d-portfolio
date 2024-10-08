import React from 'react'
import { artSkills, developerSkills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import GridGallery from '../components/GridGallery';
import {
    Cosito,
    DioDay1,
    Ijtrian_Ark,
    Johannes,
    KakyoinDay2,
    StarPlatinum,
    Za_Warudo,
    Zorathar} from '../assets/images/index.js';
import grid from './Grid.jpg';
const Art = () => {
const images= [
    Cosito,
    DioDay1,
    Ijtrian_Ark,
    Johannes,
    KakyoinDay2,
    StarPlatinum,
    Za_Warudo,
    Zorathar
]
    return (
        <section
            className="max-container"
        >
            <h1 className="head-text">Welcome to my <span className="blue-gradient_text font-semibold drop-shadow">Art </span>🎨</h1>
            <GridGallery
                images={images}
            />
            <hr className="border-slate-200" />
            <CTA />
        </section>
    )
}

export default Art