import Banner from '../components/MainView/Banner'
import OrderProcessGrid from '../components/MainView/OrderProcessGrid'
import GoButton from '../components/MainView/GoButton'
import ProductMainGrid from '../components/MainView/ProductMainGrid'
import ProductReviewGrid from '../components/MainView/ProductReviewGrid'
import Footer from '../components/GlobalView/Footer'

import banner from '../assets/banner.png'

function MainView() {
  return (
    <div>
      <Banner bannerImage={banner}/>
      <OrderProcessGrid/>
      <GoButton text={"Empieza a diseñar"}/>
      <div className="bg-orange-light">
        <ProductMainGrid/>
        <GoButton text={"Ir a galería"}/>
      </div>
      <ProductReviewGrid/>
      <GoButton text={"Nuestra Historia"}/>
      <Footer/>
    </div>
  )
}

export default MainView
