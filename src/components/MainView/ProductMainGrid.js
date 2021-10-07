import React from 'react'
import hoodie1 from '../../assets/HoodieSamples/hoodie1.png'
import hoodie2 from '../../assets/HoodieSamples/hoodie2.png'
import hoodie3 from '../../assets/HoodieSamples/hoodie3.png'
import hoodie4 from '../../assets/HoodieSamples/hoodie4.png'
import hoodie5 from '../../assets/HoodieSamples/hoodie5.png'
import hoodie6 from '../../assets/HoodieSamples/hoodie6.png'

const cards = [
  {image: hoodie1, title: "PEPE LA RANA"},
  {image: hoodie2, title: "SELL YOUR SOUL"},
  {image: hoodie3, title: "LET'S MAKE SPECIAL BROWNIES"},
  {image: hoodie4, title: "LET'S MAKE SPECIAL BROWNIES"},
  {image: hoodie5, title: "SHIBA"},
  {image: hoodie6, title: "SHIBA"}
]

function ProductMainGrid() {
  return (
    <div className="container product-cards-main-container mt-4 py-4">
      <div className="row">
        {
          cards.map((card, index) => (
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4" key={index}>
              <div className="card pt-3 h-100">
                <i className="far fa-heart d-flex justify-content-end text-decoration-none"/>
                <div className="card-img-container d-flex justify-content-center">
                  <img className="card-img-top" src={card.image} alt="product clothing"/>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center fw-bold">{card.title}</h5>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductMainGrid
