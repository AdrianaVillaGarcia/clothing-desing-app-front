import React from 'react'

function Banner({ bannerImage }) {
  return (
    <div className="banner-container d-flex justify-content-center">
      <img className="pt-3" src={bannerImage} alt="banner"/>
    </div>
  )
}

export default Banner
