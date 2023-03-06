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

      </div>
    </div>
  )
}

export default AboutMe