import React from "react";
import movieapp from '../img/movieapp.png';
import Navbar from "../components/Navbar";

const MovieAppPage = () => {
    return(
        <>
        <Navbar />
        <div className="container">
            <div className="row">
            <h4 className="title">Project Details</h4>
            <div className="col">
                <h1 className="judul">Movies App Project</h1>
                <h4>Personal Project</h4>
                <small>Software Used :</small>
                <small className="tech">Figma, Visual Studio Code</small>
                <small>Tech Stack :</small>
                <small className="tech">HTML, CSS, JavaScript, Bootstrap</small>
                <p className="text">This is a personal project that I've created for learning javascript purpose.</p>
            </div>
            <div className="col-img">
            <img src={movieapp} alt=""></img>
            </div>
            <div className="col">
                <p className="text">The features on this website is a search bar at the top for users searching their favorite movie database.</p>
                <p className="text">I worked as a front end only on this project, I created the design and turn it into a website using code and so on.</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default MovieAppPage;