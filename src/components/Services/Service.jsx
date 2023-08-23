import React from 'react';
import "./service.css";

const Service = () => {
    return (
        <>
            <section className="service__section" id='service'>
                <h1 className="service__title">Services</h1>
                <p className="service__subtitle">What I Offer</p>
                <div className="service__content">
                    <div className="web">
                        <div className="part-1">
                            <i class="uil uil-arrow"></i>
                            <h1 className="part-1__title">WEB DESIGN</h1>
                            <hr />
                        </div>
                        <div className="part-1">
                        <i class="uil uil-search"></i>
                            <h1 className="part-1__title">WEB DEVELOPER</h1>
                            <hr />
                        </div>
                        <div className="part-1">
                        <i class="uil uil-flask"></i>
                            <h1 className="part-1__title">PHOTOGRAPHY</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="web">
                        <div className="part-1">
                            <i class="uil uil-arrow"></i>
                            <h1 className="part-1__title">APP DEVELOPING</h1>
                            <hr />
                        </div>
                        <div className="part-1">
                        <i class="uil uil-search"></i>
                            <h1 className="part-1__title">BRANDING</h1>
                            <hr />
                        </div>
                        <div className="part-1">
                        <i class="uil uil-flask"></i>
                            <h1 className="part-1__title">PRODUCT STRATEGY</h1>
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service