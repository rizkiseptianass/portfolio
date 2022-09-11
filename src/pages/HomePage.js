import React from "react";
import './HomePage.css';
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const HomePage = () => {
    return(
        <div className="homePage">
            <Navbar />
            <Banner />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default HomePage;