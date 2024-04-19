import React from 'react';
import "./Footer.css";
// import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import logo from '../../assets/logo.png'

const Footer = () => {
    var year= new Date().getFullYear();
    return (
        <div id='footer' className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo} alt="" />
                    <p>I am a MEAN / MERN Full Stack Developer from Pune. </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter Your Email...' />
                    </div>
                    <div className="footer-subscribe">
                        <h3>Subscribe</h3>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <p className="footer-bottom-left"> @{year }  <span> Rushikesh Pathade.</span> All Rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;