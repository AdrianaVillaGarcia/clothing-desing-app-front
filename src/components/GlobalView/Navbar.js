import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

const navbarItems = [
  {title: "Nosotros", class: "nav-link fw-bold", path: "/aboutUsView"},
  {title: "Galería", class: "nav-link fw-bold", path: "/productGalleryView"},
  {title: "Diseña", class: "nav-link fw-bold", path: "/productDesignView"},
  // {title: "Logo", class: "navbar-Logo", path: "/"},
  {title: "Cotiza", class: "nav-link fw-bold", path: "/productQuoteView"},
  {title: "Empresas", class: "nav-link fw-bold", path: "/productBusinessView"},
  {title: "Ingresa", class: "nav-link fw-bold btn-enter", path: "#"},
]

const allNavbarItems = [
  {title: "Nosotros", class: "nav-link fw-bold", path: "/aboutUsView"},
  {title: "Galería", class: "nav-link fw-bold", path: "/productGalleryView"},
  {title: "Diseña", class: "nav-link fw-bold", path: "/productDesignView"},
  {title: "Logo", class: "navbar-Logo", path: "/"},
  {title: "Cotiza", class: "nav-link fw-bold", path: "/productQuoteView"},
  {title: "Empresas", class: "nav-link fw-bold", path: "/productBusinessView"},
  {title: "Ingresa", class: "nav-link fw-bold btn-enter", path: "#"},
]

function Navbar() {

  const [isClicked, setIsClicked] = useState(false)
  const [items, setItems] = useState(allNavbarItems)
  const [width, setWidth] = useState(window.innerWidth)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
  })

  useEffect(() => {
    width < 991.98 ? setItems(navbarItems) : setItems(allNavbarItems)
  }, [width])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="menu-icon">
        <i className={isClicked ? "fas fa-times" : "fas fa-bars"} onClick={handleClick}/>
      </div>
      {(width < 991.98) ? <Link className="navbar-Logo" to="/"><img src={logo} alt="logo"/></Link> : null}
      <ul className={isClicked ? "navbar-nav active": "navbar-nav justify-content-between w-100 px-5 align-items-center"}>
        {
          items.map((item, index) => (
            <li className="nav-item" key={index}>
              <Link className={item.class} to={item.path}>
                {item.class === "navbar-Logo" ? <img src={logo} alt="logo"/> : item.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar
