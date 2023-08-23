import React from 'react';
import "./about.css"
import AboutImg from "../../assets/namit pic.jpg"
import CV from "../../assets/Rezume.pdf"

const About = () => {
    return (
        <section className='about__section' id='about'>
            <h2 className="about__section__title">About Me</h2>
            <span className="about__section__subtitle">My Introduction</span>
            <div className="about__container">
                <img src={AboutImg} alt="about-Image" className='about__img' />
                <div className="about__data">
                <div className="about__info">
                    <div className="about__box">
                        <i className="bx bx-award about__icon"></i>
                        <h3 className="about__title">Experience</h3>
                        <span className="about__subtitle">1 month working</span>
                    </div>

                    <div className="about__box">
                        <i className="bx bx-briefcase-alt about__icon"></i>
                        <h3 className="about__title">Completed</h3>
                        <span className="about__subtitle">10 + projects</span>
                    </div>

                    <div className="about__box">
                        <i className="bx bx-support about__icon"></i>
                        <h3 className="about__title">Support</h3>
                        <span className="about__subtitle">24 / 7</span>
                    </div>
                </div>
                <p className="about__description">Frontend developer, I create web pages with Html, Css and Javascript, I am a fresher</p>
                    <a download="" href={CV} className="btn cv__button">Download CV </a>
            </div>
            </div>
        </section>
    )
}

export default About