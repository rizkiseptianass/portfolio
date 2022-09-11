import React from "react";
import Rizki from '../img/Rizki.jpg'
import Navbar from "../components/Navbar";
import './AboutMe.css';

const AboutMe = () => {
    return(
        <div className="aboutMe">
            <Navbar />
            <div className="about">
            <div className="about-text">
                <h3>About me</h3>
                <div className="about-text-container">
                <p>Hi, I'm Rizki. Nice to meet you, i'm a front end developer who has an interest in web development. Currently living in Bandung, Indonesia. 
                <br/> 
                <br/>
                I'm a fresh graduate from Widyatama university, majoring Information System. I like to code things from scratch, and enjoy creating a websites. I'm a curious type of person, and perpetually working on improving my skills and knowledge.</p>
                </div>
            </div>
            <div className="about-img">
            <img src={Rizki} alt=""></img>
            </div>
        </div>
        </div>
    )
}

export default AboutMe;