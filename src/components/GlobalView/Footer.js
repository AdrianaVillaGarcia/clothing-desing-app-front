import React from 'react'
import adidasLogo from '../../assets/Footer/adidasLogo.png'
import dockersLogo from '../../assets/Footer/dockersLogo.png'
import eagleLogo from '../../assets/Footer/eagleLogo.png'
import dooLogo from '../../assets/Footer/dooLogo.png'
import leeLogo from '../../assets/Footer/leeLogo.png'

import secureIcon from '../../assets/Footer/secureIcon.svg'
import supportIcon from '../../assets/Footer/supportIcon.svg'
import checkIcon from '../../assets/Footer/checkIcon.svg'
import sharedIcon from '../../assets/Footer/sharedIcon.svg'

const logos = [adidasLogo, dockersLogo, eagleLogo, dooLogo, leeLogo]

const icons = [
  {titles: ["Pago en línea", <b className="fw-bolder">{"seguro y protegido"}</b>], image: secureIcon},
  {titles: [<b className="fw-bolder">{"Equipos de soporte"}</b>, "en todo el país"], image: supportIcon},
  {titles: ["30 días de garantía", <b className="fw-bolder">{"de devolución de dinero"}</b>], image: checkIcon},
  {titles: ["Sistema de diseño", <b className="fw-bolder">{"personalizado"}</b>], image: sharedIcon}
]

const socialIcons = [
  "fab fa-twitter",
  "fab fa-facebook-f",
  "fab fa-instagram",
  "fab fa-linkedin-in",
  "fab fa-youtube",
]

const cards = [
  {
    title: "Nosotros",
    information: [
      "Portal de Personas",
      "¿Quiénes somos?"
    ]
  },
  {
    title: "Compra",
    information: [
      "¿Cómo comprar en iPrint?",
      "Guías de compra",
      "Ventas corporativas",
      "Ventas individuales",
      "Promociones por stock"
    ]
  },
  {
    title: "Legales",
    information: [
      "Términos y condiciones",
      "Cambios y devoluciones",
      "Preguntas Frecuentes",
      "Privacidad y Seguridad",
      "Libro de Reclamaciones"
    ]
  },
  {
    title: "Contacto",
    information: [
      "contacto@iprint.com.pe",
      <div className="d-flex flex-row justify-content-between mt-4">
        {
          socialIcons.map((icon, index) => (
            <i className={icon} key={index}/>
          ))
          }
      </div>
    ]
  },
]


function Footer() {
  return (
    <div className="footer container-fluid d-flex flex-column mt-5">
      <div className="footer-logo-container d-flex justify-content-around mx-5">
        {
          logos.map((logo, index) => (
            <img className="logo-brand" src={logo} alt="brand" key={index}/>
          ))
        }
      </div>
      <div className="row mt-5">
        {
          icons.map((icon, index) => (
            <div key={index} className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="footer-icon-container">
                <img className="footer-icon" src={icon.image} alt={"pay-maintance-secure"}/>
                <ul className="no-bullet mx-0 px-2">
                  {
                    icon.titles.map((title, index) => (
                      <li className="text-white icon-title" key={index}>{title}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          ))
        }
      </div>

      <div className="row footer-information-container">
        {
          cards.map((card, index) => (
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 footer-col" key={index}>
              <div className="d-flex flex-column align-items-center">
                <h5 className="fw-bold">{card.title}</h5>
                <ul className="mx-0 px-0">
                  {
                    card.information.map((item, index) => (
                      typeof item === 'string'
                      ? <li className="footer-item no-bullet" key={index}>{item}</li>
                      : <div key={index}>{item}</div>
                    ))
                  }
                </ul>
              </div>
            </div>
          ))
        }
      </div>
      <div className="row">
        <div className="col-12 text-center mt-3 text-white">
          <p>© 2021 Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
