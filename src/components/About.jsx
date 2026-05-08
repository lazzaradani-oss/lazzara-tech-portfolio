import React from "react";
import "./About.css"; // This line "connects" the two files

const About = () => {
  return (
    <section id="about-me" className="about-container">
      <div className="about-content">
        <h2>ABOUT ME</h2>
        <div className="accent-line"></div>
        <p>AI Automation Specialist | RBT</p>
        <p>
          Bridging the gap between behavioral health and tech through
          innovative, cybercore-inspired design.
        </p>
      </div>
    </section>
  );
};

export default About;
