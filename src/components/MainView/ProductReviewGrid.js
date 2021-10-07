import React from 'react'
import ReviewCard from './ReviewCard'

import avatar1 from '../../assets/MainView/avatar1.png'
import avatar2 from '../../assets/MainView/avatar2.png'
import avatar3 from '../../assets/MainView/avatar3.png'

const reviews = [
  {
    author: "Angel Situ",
    text: "Una plataforma eficiente que permite que podamos vestir con las imágenes que se nos ocurra.",
    avatar: avatar1,
    class: "review1",
  },
  {
    author: "Samantha Tang",
    text: "Los paquetes para empresas son excelentes cuando quiero comprar en cantidad. Recomendado",
    avatar: avatar2,
    class: "review2",
  },
  {
    author: "Reynaldo Siccha",
    text: "Como diseñador independiente, esta plataforma me permite crear merch de manera rápida. La parte de “diseña” es amigable con el usuario, las herramientas nos permiten controlar el producto final.  El pedido llegó en excelentes condiciones. Lo recomiendo.", 
            
    avatar: avatar3,
    class: "review3",
  },
]

function ProductReviewGrid() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
          <div className="row d-flex">
            <div className="col-12 mb-4">
              <ReviewCard
                author={reviews[0].author}
                review={reviews[0].text}
                avatar={reviews[0].avatar}
                row={true}
              />
            </div>
            <div className={`col-12 ${reviews[1].class}`}>
              <ReviewCard
                author={reviews[1].author}
                review={reviews[1].text}
                avatar={reviews[1].avatar}
                row={true}
                fontColor={"font-lilac"}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <ReviewCard
            author={reviews[2].author}
            review={reviews[2].text}
            avatar={reviews[2].avatar}
            row={false}
            fontColor={"font-orange"}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductReviewGrid
