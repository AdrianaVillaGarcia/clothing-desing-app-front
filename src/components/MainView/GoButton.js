import React from 'react'

function GoButton({ text }) {
  return (
    <div className="btn-go-container d-flex justify-content-center">
      <button className="btn btn-lg btn-dark fw-bold">{text}</button>
    </div>
  )
}

export default GoButton