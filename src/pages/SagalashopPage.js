import React from "react";
import './SagalashopPage.css';
import sagalashop from '../img/sagalashop.png';
import sagalashop2 from '../img/sagalashop2.png';
import Navbar from "../components/Navbar";

const SagalashopPage = () => {

    return(
        <>
        <Navbar />
        <div className="container">
            <div className="row">
            <h4 className="title">Project Details</h4>
            <div className="col">
                <h1 className="judul">SagalaShop E-Commerce Website</h1>
                <h4>UMKM</h4>
                <small>Software Used :</small>
                <small className="tech">Figma</small>
                <small>Tech Stack :</small>
                <small className="tech">WordPress</small>
                <p className="text">Sagalashop is an MSME (Micro, Small, and Medium Enterprises) founded by 
                students in 2021 and is engaged in the fashion sector.</p>
            </div>
            <div className="col-img">
            <img src={sagalashop} alt=""></img>
            </div>
            <div className="col">
                <p className="text">There are several features in the sagalashop e-commerce website, including : account page, shop page, cart page, and checkout page.</p>
                <p className="text">I worked as a full-stack in this project, I created the design and turn it into a website using CMS WordPress.</p>
            </div>
            <div className="col-img">
            <img src={sagalashop2} alt=""></img>
            </div>
            </div>
        </div>
        </>
    )
}

export default SagalashopPage;