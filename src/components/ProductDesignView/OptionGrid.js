import React from 'react'

import textIcon from '../../assets/DesignView/icons/textIcon.svg'
import wardroveIcon from '../../assets/DesignView/icons/wardrobeIcon.svg'
import stickerIcon from '../../assets/DesignView/icons/stickerIcon.svg'
import pincelIcon from '../../assets/DesignView/icons/pincelIcon.svg'
import aiIcon from '../../assets/DesignView/icons/aiIcon.svg'


const icons = [textIcon, pincelIcon, wardroveIcon, stickerIcon, aiIcon]

function OptionGrid({ setCurrentGrid }) {
  return (
    <nav className="h-100">
      <ul className="design-option-container d-flex flex-column justify-content-between align-items-center mx-0 px-0 h-100">
        {
          icons.map((icon, index) => (
            <li className="no-bullet" key={index} onClick={(e) => {setCurrentGrid(index)}}>
              <div className="card">
                <div className="card-body">
                  <img src={icon} alt="tool"/>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default OptionGrid
