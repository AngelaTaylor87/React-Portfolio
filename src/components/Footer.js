import React, { useState } from 'react';
import '../../styles/Footer.css';
import gitHubIcon from '../../assets/images/icons/github-mark-light-64px.png'
import linkedinIcon from '../../assets/images/icons/linkedin-light-64px.png';


export default function Footer() {
    return (
        <div className="footer-container">
            <div className="icon-container">
                <a href="https://github.com/AngelaTaylor87">
                    <img className="github-icon" src={gitHubIcon} alt="GitHub Icon" />
                </a>
            </div>
            <div className="icon-container">
                <a href="https://www.linkedin.com/in/angela-taylor-89464b103/">
                    <img className="linkedin-icon" src={linkedinIcon} alt="Linkedin Icon" />
                </a>
            </div>   
        </div>
    );
}