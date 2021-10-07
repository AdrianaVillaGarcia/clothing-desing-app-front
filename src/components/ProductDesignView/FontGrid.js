import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './fonts.scss'

const fonts = [
  "HappySchool", "Creepsville", "Godzilla", "Gruesome", "Uniflex",
  "Jambo", "Toxia", "Cactus", "Basketball", "Bloodlust", "Estave", "Fire"
]

function FontGrid({ textBoxes, setTextBox }) {
  const colorPicker = useRef()

  const [color, setColor] = useState("#000")

  return (
    <div className="container-fluid font-card-container">
      <div className="row">
        <div className="col-12 mb-3">
          <input
            type="color"
            className="form-control form-control-color"
            value={color}
            ref={colorPicker}
            onChange={(e)=>{setColor(e.target.value)}}
          />
        </div>
        {
          fonts.map((font, index) => (
            <div className="col-6 mb-4" key={index}>
              <div
                className="card"
                onClick={(e) => {
                  setTextBox([...textBoxes, {fontFamily: font, fill: color, id: uuidv4()}])
                }}
              >
                <div className="card-body d-flex justify-content-center align-items-center">
                  <div className="card-text">
                    <p className="mb-0" style={{fontFamily: font, fontSize: "32px"}}>
                      {font}
                    </p>
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

export default FontGrid
