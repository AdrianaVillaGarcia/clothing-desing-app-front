import React from 'react'
import AboutCard from '../components/AboutUsView/AboutCard'

function AboutUsView() {
  return (
    <div>
      <div className="about-us-container d-flex justify-content-center">
        <div className="container mt-5">
          <div className="row mt-5">
            <div className="col-3"></div>
            <div className="col-2">
              <AboutCard author={"Adriana"}/>
            </div>
            <div className="col-2"></div>
            <div className="col-2">
              <AboutCard author={"Marcell"}/>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsView
