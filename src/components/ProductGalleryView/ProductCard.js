import React from 'react'


function ProductCard({ producto_nom, producto_pre, producto_img }) {
  return (
    <div className="card pt-3 h-100">
      <div className="card-img-container d-flex justify-content-center">
        <img className="card-img-top" src={producto_img} alt="product clothing"/>
      </div>
      <div className="card-body">
        <ul className="no-bullet mx-0 px-0 d-flex justify-content-around">
          <li className="fw-bold">{producto_nom}</li>
          <li className="fw-bold">{producto_pre}</li>
        </ul>
      </div>
      <div className="btn-view-detail d-flex justify-content-center mb-4">
        <button className="btn btn-lg btn-warning fw-bold">{"VER DETALLES"}</button>
      </div>
    </div>
  )
}

export default ProductCard
