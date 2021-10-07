import React from 'react'
import doOrder from '../../assets/MainView/doOrder.svg'
import orderReception from '../../assets/MainView/orderReception.svg'
import orderProcess from '../../assets/MainView/orderProcess.svg'
import orderDelivery from '../../assets/MainView/orderDelivery.svg'

const cards = [
  {
    image: doOrder,
    title: "HAZ TU ORDEN",
    body: "Solicita tu pedido a través de nuestros múltiples canales de comunicación "
  },
  {
    image: orderReception,
    title: "RECEPCIÓN DE ORDEN",
    body: "Aquí se valida el pedido"
  },
  {
    image: orderProcess,
    title: "ORDEN EN PROCESO",
    body: "El pedido está en producción"
  },
  {
    image: orderDelivery,
    title: "EMPAQUE Y ENVÍO",
    body: "Se empaca el/los productos y lo enviamos"
  }
]

function OrderProcessGrid() {
  return (
    <div className="container my-4">
      <div className="row">
        {
          cards.map((card, index) => (
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-4" key={index}>
              <div className="card card-order-container pt-3 h-100">
                <div className="card-img-container d-flex justify-content-center">
                  <img className="card-img-top" src={card.image} alt={`product order process step ${index}`}/>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center fw-bold">{card.title}</h5>
                  <p className="card-text">{card.body}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OrderProcessGrid
