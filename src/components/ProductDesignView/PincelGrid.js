import React, { useRef, useState } from 'react'

function PincelGrid({brushColor, setBrushColor}) {

  const colorPicker = useRef()

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
        <input
            type="color"
            className="form-control form-control-color"
            value={brushColor}
            ref={colorPicker}
            onChange={(e)=>{setBrushColor(e.target.value)}}
          />
        </div>
      </div>

    </div>
  )
}

export default PincelGrid
