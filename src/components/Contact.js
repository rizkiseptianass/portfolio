import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './Contact.css';

const Contact = () => {
    return(
        <div className="contacts">
            <div className="contact-text">
            <h1>Find me on</h1>
            </div>
            <div className="contact-list">
                <div className="contact-item">
                    <a href="https://www.instagram.com/rizkiseptianass/"><FontAwesomeIcon icon={faInstagram}/></a>
                </div>
                <div className="contact-item">
                    <a href="https://www.linkedin.com/in/rizki-septianas-saverius-560494221/"><FontAwesomeIcon icon={faLinkedin}/></a>
                </div>
                <div className="contact-item">
                    <a href="https://github.com/rizkiseptianass"><FontAwesomeIcon icon={faGithub}/></a>
                </div>
            </div>
        </div>
    )
}

export default Contact;