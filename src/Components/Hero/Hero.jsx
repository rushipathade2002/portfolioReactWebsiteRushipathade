import React from 'react';
import './Hero.css';
import profile_img from "../../assets/profile_img1.png"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link, NavLink } from 'react-router-dom';


function Hero() {
    return (
        <div id="home" className="hero">
            
            <img src={profile_img} alt="" />
            <h1> <span>I`m a Rushikesh Pathade,</span> MEAN/MERN Full Stack Developer.</h1>
            <p>I am a Node.JS Full Stack Developer, Recently I have completed UI/UX Full Stack Training Program.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink>  
                </div>
                <div className="hero-resume"><a href='https://drive.google.com/file/d/1S-k1judOgewAV5WW83wqsR7EkDbbe6XL/view?usp=sharing' target='_blank'  className="anchor-link" >My Resume </a></div>
            </div>
        </div>
    );
}

export default Hero;