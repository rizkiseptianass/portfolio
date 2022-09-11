import React from "react";
import Navbar from "../components/Navbar";
import personalletter from '../img/personal-letter.png';

const PersonalLetterPage = () => {
    return(
        <>
        <Navbar />
        <div className="container">
            <div className="row">
            <h4 className="title">Project Details</h4>
            <div className="col">
                <h1 className="judul">Personal Note Project</h1>
                <h4>Dicoding submission project</h4>
                <small>Software Used :</small>
                <small className="tech">Figma, Visual Studio Code</small>
                <small>Tech Stack :</small>
                <small className="tech">HTML, CSS, React JS</small>
                <p className="text">This is a project I've created to complete a React JS course from Dicoding Indonesia.</p>
            </div>
            <div className="col-img">
            <img src={personalletter} alt=""></img>
            </div>
            <div className="col">
                <p className="text">There are several features on this project including : show notes from dicoding external file, adding a new note, and delete a note.</p>
                <p className="text">I worked as a front end only on this project, I created the design and turn it into a website using code and so on.</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default PersonalLetterPage;