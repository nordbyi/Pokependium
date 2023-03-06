import React from "react";
import Loading from "../Loading/Loading";
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="loading-spinner">
        <Loading /> 
      </div>
      <div className="info">
        <h3>Created By Ian Nordby</h3>
        <a href="https://www.linkedin.com/in/iannordby/" target="_blank">My LinkedIn</a>
        <a href="https://github.com/nordbyi" target="_blank">My Github</a>
      </div>
    </div>
  )
}

export default AboutMe