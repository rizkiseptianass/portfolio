import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './Navbar.css';
import R from '../img/R.png';


const Navbar = () => {

    const [active, setActive] = useState("nav-links")

    const navToggle = () => {
        active === "nav-links" ? setActive("nav-links nav_active") : setActive("nav-links");
    }

    const [navScroll, setNavScroll] = useState(false);

    const navbarScroll = () => {
        if(window.scrollY > 100){
            setNavScroll(true);
        } else{
            setNavScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', navbarScroll);
        return () => window.removeEventListener('scroll', navbarScroll);
    },[])

    return(
        <nav className={`nav ${navScroll && 'nav-maroon'}`}>
            <div className="nav-contents">
                <img className="nav-logo" src={R} alt=""></img>
                <ul className={active}>
                    <Link to="/" className="li a">Home</Link> 
                    <Link to="/aboutme" className="li a">About</Link>
                </ul>
                <p onClick={navToggle}><FontAwesomeIcon icon={faBars} className="menu"/></p>
            </div>
        </nav>
    )
}

export default Navbar;