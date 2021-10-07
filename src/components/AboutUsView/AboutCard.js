import React from 'react'

import circleBox from '../../assets/AboutUsView/circleBox.png'


function AboutCard({author}) {
  return (
    <div className="card">
      <div className="card-img-top text-center mt-2">
        <img src={circleBox} alt={"founder"}/>
      </div>
      <div className="card-body text-center">
        <h8 className="text-light-blue fw-bold">Founder</h8>
        <h5 className="pt-3 fw-bold">{author}</h5>
        <p className="pt-1"></p>
      </div>
    </div>
  )
}

export default AboutCard
