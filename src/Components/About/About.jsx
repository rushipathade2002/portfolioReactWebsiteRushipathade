import React from 'react';
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.jpg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import Email1 from "../../assets/Email1.svg";

const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>As a recent graduate from ALARD Institute of Management Sciences, I am excited to apply my strong analytical and communication skills in a challenging role.”</p>
                        <p>“My coursework has equipped me with proficiency in a wide range of technologies, including C, HTML5, CSS3, JavaScript, jQuery, React.js, NodeJS, Express.js, Typescript, Angular, MySQL, and MongoDB.” </p>

                    </div>
                    <div className="about-skills">
                        <div className="about-skill" > <p>HTML5 & CSS3</p><hr style={{width:"100%"}}/></div>
                        <div className="about-skill" > <p>Bootstrap</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill" > <p>JavaScript</p><hr style={{width:"70%"}}/></div>
                        {/* <div className="about-skill" > <p>jQuery</p><hr style={{width:"65%"}}/></div> */}
                        <div className="about-skill" > <p>React JS</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill" > <p>Typescript/ Angular</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill" > <p>Node JS</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill" > <p>Express JS</p><hr style={{width:"75%"}}/></div>
                        <div className="about-skill" > <p>MongoDB</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill" > <p>MySQL</p><hr style={{width:"75%"}}/></div>
                        {/* <div className="about-skill" > <p>Typescript</p><hr style={{width:"70%"}}/></div> */}
                        {/* <div className="about-skill" > <p>C</p><hr style={{width:"80%"}}/></div> */}
                        <div className="about-skill" > <p>Git</p><hr style={{width:"70%"}}/></div>  
                    </div>

                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <a href="https://www.linkedin.com/in/rushikesh-pathade-187950200/" target='_blank'>
                        <h1>LinkedIn </h1>
                    <p><img src={linkedin} alt="" /></p></a>
                </div>
                <div className="about-achievement">
                    <a href="https://github.com/rushipathade2002" target='_blank' >
                    <h1>Github</h1>
                    <p><img src={github} alt="" /></p></a>
                </div>
                <div className="about-achievement">
                    <a href="mailto:rushikeshpathade8698@gmail.com" target='_blank' >
                    <h1>Email</h1>
                    <p><img src={Email1} alt="" /></p></a>
                </div>

            </div>

        </div>
    );
};

export default About;