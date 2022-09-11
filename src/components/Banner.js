import React from "react";
import './Banner.css';

const Banner = () => {
    return(
        <div className="banner">
            <div className="banner-contents">
                <h4>Hi, my name is</h4>
                <h1 className="banner-name">Rizki Septianas Saverius</h1>
                <h1 className="banner-text">I'm a Junior Front End Developer</h1>
                <p className="banner-desc">A Front End Developer with a passion for learning new things. </p>
                <button className="banner-btn">Get Started</button>
            </div>
        </div>
    )
}

export default Banner;