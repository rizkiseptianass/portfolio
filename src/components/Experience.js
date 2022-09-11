import React from "react";
import WebDev from '../img/web-development.png';
import './Experience.css';

const Experience = () => {
    return(
        <div className="experience">
            <div className="experience-img">
            <img src={WebDev}></img>
            </div>
            <h3 className="title">Experience</h3>
            <div className="experience-list">
            <h3 className="exp">Where I've Worked</h3>
                <div className="experience-item">
                    <h2>Adelie Studio</h2>
                    <small>Game Designer</small>
                    <small>November 2021 - January 2022</small>
                    <p>Create designs for game needs, using Figma and Adobe photoshop. 
                    Build games or apps in 2D, and Make good use of assets and libraries as needed</p>
                </div>
                <div className="experience-item">
                    <h2>Freelance Web Developer</h2>
                    <small>FullStack</small>
                    <small>May 2021 - June 2021</small>
                    <p>Build an E-Commerce website for MSMEs called SagalaShop using CMS Wordpress</p>
                </div>
            </div>
        </div>
    )
}

export default Experience;