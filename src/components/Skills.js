import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faBootstrap, faReact, faFigma, faWordpress, faNode } from "@fortawesome/free-brands-svg-icons";
import './Skills.css';
import { Link } from "react-router-dom";

const Skills = () => {
    return(
        <div className="skills">
            <div className="skills-text">
                <h4>Skills</h4>
            </div>
            <div className="skill-list">
                <div className="skill-item">
                    <Link to="/"><FontAwesomeIcon icon={faHtml5} className="fab html"/></Link>
                </div>
                <div className="skill-item">
                    <Link to="/"><FontAwesomeIcon icon={faCss3} className="fab css"/></Link>
                </div>
                <div className="skill-item">
                    <Link to="/"><FontAwesomeIcon icon={faJs} className="fab js"/></Link>
                </div>
                <div className="skill-item">
                    <Link to="/"><FontAwesomeIcon icon={faBootstrap} className="fab bs"/></Link>
                </div>
                <div className="skill-item">
                    <Link to="/"><FontAwesomeIcon icon={faReact} className="fab react"/></Link>
                </div>
                <div className="skill-item">
                    <Link to="/"><FontAwesomeIcon icon={faFigma} className="fab figma"/></Link>
                </div>
                <div className="skill-item">
                    <Link to="/"><FontAwesomeIcon icon={faWordpress} className="fab wordpress"/></Link>
                </div>
                <div className="skill-item">
                    <Link to="/"><FontAwesomeIcon icon={faNode} className="fab node"/></Link>
                </div>
            </div>
        </div>
    )
}

export default Skills;