import React from "react";
import { Link } from "react-router-dom";
import './Projects.css';

const Projects = () => {


    return(
        <div className="projects">
            <h3>Projects</h3>
            <div className="project-list">
                <div className="project-item">
                    <small>01</small>
                    <Link to="/sagalaShop-Project" className="project-link">SagalaShop E-Commerce Web</Link>
                    <small>WordPress | Figma</small>
                </div>
                <div className="project-item">
                    <small>02</small>
                    <Link to="/movieApp-Project" className="project-link">Movie App</Link>
                    <small>HTML | CSS | JavaScript</small>
                </div>
                <div className="project-item">
                    <small>03</small>
                    <Link to="/personalLetter-Project" className="project-link">Personal Letter Web App</Link>
                    <small>HTML | CSS | React JS</small>
                </div>
                <div className="project-item">
                    <small>04</small>
                    <Link to="/netflixClone-Project" className="project-link">NetFlix Clone</Link>
                    <small>HTML | CSS | React JS</small>
                </div>
            </div>
        </div>
    )
}

export default Projects;