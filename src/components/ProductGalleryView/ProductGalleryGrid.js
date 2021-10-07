import React, { useEffect, useState } from 'react'
import hoddie1 from '../../assets/HoodieSamples/hoodie1.png'
import ProductCard from './ProductCard'
import { getProductos } from '../../services/productService'

//import { fb } from "../../firebase";
//import { URL_BACKEND } from '../../enviroments/enviroments'

//const db = fb.firestore()
//const datos = URL_BACKEND

const cards = [
  {productName: "SUP LLAMA", productPrice: "S/.120.95", productImage: hoddie1},
  {productName: "SUP LLAMA", productPrice: "S/.120.95", productImage: hoddie1},
  {productName: "SUP LLAMA", productPrice: "S/.120.95", productImage: hoddie1},
  {productName: "SUP LLAMA", productPrice: "S/.120.95", productImage: hoddie1},
  {productName: "SUP LLAMA", productPrice: "S/.120.95", productImage: hoddie1},
  {productName: "SUP LLAMA", productPrice: "S/.120.95", productImage: hoddie1},
  {productName: "SUP LLAMA", productPrice: "S/.120.95", productImage: hoddie1},
]


function ProductGalleryGrid() {

  const [setCargando] = useState(true)
  const [products, setProducts] = useState()

  const traerProductos = async () => {
    try {
      let productoObtenido = await getProductos();
      setProducts({ ...productoObtenido });
      //para cuando acabemos de tener nuestro producto, indiquemos ok ya no estamos cargando
      setCargando(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    traerProductos();
  }, []);


  return (
    <div className="container product-card-gallery-container mt-5">
      <div className="row mb-5">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 mt-2">
          <div className="input-group search-container flex-nowrap">
            <input
              className="form-control border-secondary btn-input"
              type="search"
              placeholder="Buscar"
            />
            <button className="btn btn-outline-secondary dropdown-toggle btn-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">Categoría</button>
            <button type="button" className="btn bg-warning btn-outline-secondary btn-search" aria-expanded="false"><i className="fas fa-search"/></button>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-2">
          <div className="input-group btn-step-container d-flex justify-content-center">
            <button className="btn btn-outline-secondary btn-step" type="button">First</button>
            <button className="btn btn-outline-secondary btn-step" type="button">1</button>
            <button className="btn btn-outline-secondary btn-step" type="button">2</button>
            <button className="btn btn-outline-secondary btn-step" type="button">3</button>
            <button className="btn btn-outline-secondary btn-step" type="button">Last</button>
          </div>
        </div>
      </div>

      <div className="row">
        {
          products ?
            products.map((card, index) => (
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4" key={index}>
                <ProductCard
                  producto_nom={card.producto_nom}
                  producto_pre={card.producto_pre}
                  producto_img={card.producto_img}
                />
              </div>
            ))
            :
            null
        }
      </div>
    </div>
  )
}

export default ProductGalleryGrid