import React from 'react'
import hoodie1 from '../../assets/DesignView/hoodies/hoodie1.png'
import hoodie2 from '../../assets/DesignView/hoodies/hoodie2.png'
import hoodie3 from '../../assets/DesignView/hoodies/hoodie3.png'
import hoodie4 from '../../assets/DesignView/hoodies/hoodie4.png'
import hoodie5 from '../../assets/DesignView/hoodies/hoodie5.png'

import { v4 as uuidv4 } from 'uuid'

const hoodieSamples = [
  hoodie1, hoodie2, hoodie3, hoodie4, hoodie5
]


function GalleryGrid({hoodies, setHoodie}) {
  return (
    <div className="container-fluid hoodie-card-container">
      <div className="row">
        {
          hoodieSamples.map((hoodie, index) => (
            <div className="col-6 mb-4" key={index}>
              <div
                className="card"
                onClick={(e) => {
                  let currHoodie = document.createElement("img")
                  currHoodie.setAttribute("src", hoodie)
                  setHoodie([...hoodies, {image: currHoodie, id: uuidv4()}])
                }}
              >
                <div className="card-body d-flex justify-content-center align-items-center">
                  <div>
                    <img src={hoodie} alt={"hoodie"}/>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default GalleryGrid
