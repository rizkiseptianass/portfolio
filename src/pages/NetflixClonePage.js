import React from "react";
import Navbar from "../components/Navbar";
import netflixClone from '../img/netflix.png';

const NetflixClonePage = () => {
    return(
        <>
        <Navbar />
        <div className="container">
            <div className="row">
            <h4 className="title">Project Details</h4>
            <div className="col">
                <h1 className="judul">Netflix Clone</h1>
                <h4>Personal project</h4>
                <small>Software Used :</small>
                <small className="tech">Figma, Visual Studio Code</small>
                <small>Tech Stack :</small>
                <small className="tech">HTML, CSS, React JS</small>
                <p className="text">The purpose of this project is to practice and improving a front end javascript library React JS.</p>
            </div>
            <div className="col-img">
            <img src={netflixClone} alt=""></img>
            </div>
            <div className="col">
                <p className="text">I worked as a front end only on this project, I created the design and turn it into a website using code and so on.</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default NetflixClonePage;