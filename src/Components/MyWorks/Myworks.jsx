import React from 'react';
import "./Mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from '../../assets/mywork_data';
import arrow_icon from "../../assets/arrow_icon.svg";

const Myworks = () => {
    return (
        <div id='work' className="mywork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {   mywork_data.map((mywork, index)=>{
                        let { w_no, w_name, w_img } = mywork; 
                        return(
                            <>
                                <img src={w_img} key={index} alt="" />
                            </>
                        )
                    })
                }
            </div>
            <div className="mywork-showmore">
                <p>Show More </p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    );
};

export default Myworks;