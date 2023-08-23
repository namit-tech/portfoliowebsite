import React from 'react';
import "./portfolio.css";
const Portfolio = () => {
    return (
        <section className="portfolio" id='portfolio'>
            <h1 className="portfolio__title">Portfolio</h1>
            <p className="portfolio__subtitle">  Our Projects  </p>
            <div className="portfolio__content">
                <div className="project__data data1">
                    <h1>WEB DESIGN</h1>
                </div>
                <div className="project__data data2">
                    <h1>WEB DEVELOPMENT</h1>
                </div>
                <div className="project__data data3">
                    <h1>APP DEVELOPMENT</h1>
                </div>

                <div className="project__data data4">
                    <h1>PHOTOGRAPHY</h1>
                </div>
                <div className="project__data data5">
                    <h1>BRANDING</h1>
                </div>
                <div className="project__data data6">
                    <h1> STRATEGY</h1>

                </div>
            </div>
        </section>
    )
}

export default Portfolio