import React from 'react'
import { portfolioImages } from '../constants';'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import GridGallery from '../components/GridGallery';
import { Navbar } from '../components/Navbar.jsx';

const Art = () => {
    return (
        <div>
            <Navbar isDarkBackground={false} />
            <section
                className="max-container"
            >
                <h1 className="head-text">Welcome to my <span className="blue-gradient_text font-semibold drop-shadow">Art </span>🎨</h1>
                <GridGallery
                    images={portfolioImages}
                />
                <hr className="border-slate-200" />
                <CTA />
            </section>
        </div>
    )
}

export default Art