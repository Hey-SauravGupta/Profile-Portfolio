// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';
import ResponsiveButton from './ResponsiveButton';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import ReactGA from 'react-ga';


const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="text-and-image">
        <div className="intro-text">
          <h1 className="landbc">Saurav Gupta</h1>
          {/* <h2>Full Stack Web Developer</h2> */}
          <p>
          As a seasoned Java Full Stack Developer, I have a passion for building scalable, efficient, and user-friendly applications that meet the needs of modern businesses. With a strong foundation in Java and a keen eye for detail, I excel in designing and developing robust solutions that drive results.


          </p>
          {/* <a href="#contact" >Let’s get started</a> */}
          <a href="#contact"> <ResponsiveButton text="Let's get Started"/></a>
          
        </div>
        <div className="profile-picture">
          <img src="profile-pic.png" alt="Your Name" className="lode"/>
        </div>

        </div>
        
      </div>
      <div className="worked-with">
        <h2>Worked with</h2>
        <div className="logos">
          <img src="Worked-with/Clickup.png" alt="ClickUp" />
          <img src="Worked-with/Dropbox.png" alt="Dropbox" />
          <img src="Worked-with/PayChex.png" alt="Paychex" />
          <img src="Worked-with/Elastic.png" alt="Elastic" />
          <img src="Worked-with/Stripe.png" alt="Stripe" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
