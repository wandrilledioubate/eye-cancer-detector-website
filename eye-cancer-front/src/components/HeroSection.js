import React from 'react';
import './HeroSection.css';
// import play_icon from '../assets/play_icon.svg';  
// import { Link } from 'react-router-dom';


function HeroSection() {
    return (
        <section className="hero">
            <h1 className="title">Eye Cancer Detector 🔎</h1>
            <h2 className="subtitle">Upload a picture of your eye to know your patology.</h2>
        </section>
    );
}

export default HeroSection;