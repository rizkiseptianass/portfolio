import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faBootstrap, faReact, faFigma, faWordpress, faNode } from "@fortawesome/free-brands-svg-icons";
import './Skills.css';

const Skills = () => {
    return(
        <div className="skills">
            <div className="skills-text">
                <h4>Skills</h4>
            </div>
            <div className="skill-list">
                <div className="skill-item">
                    <a href="#"><FontAwesomeIcon icon={faHtml5} className="fab html"/></a>
                </div>
                <div className="skill-item">
                    <a href="#"><FontAwesomeIcon icon={faCss3} className="fab css"/></a>
                </div>
                <div className="skill-item">
                    <a href="#"><FontAwesomeIcon icon={faJs} className="fab js"/></a>
                </div>
                <div className="skill-item">
                    <a href="#"><FontAwesomeIcon icon={faBootstrap} className="fab bs"/></a>
                </div>
                <div className="skill-item">
                    <a href="#"><FontAwesomeIcon icon={faReact} className="fab react"/></a>
                </div>
                <div className="skill-item">
                    <a href="#"><FontAwesomeIcon icon={faFigma} className="fab figma"/></a>
                </div>
                <div className="skill-item">
                    <a href="#"><FontAwesomeIcon icon={faWordpress} className="fab wordpress"/></a>
                </div>
                <div className="skill-item">
                    <a href="#"><FontAwesomeIcon icon={faNode} className="fab node"/></a>
                </div>
            </div>
        </div>
    )
}

export default Skills;