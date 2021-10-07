import React from 'react'
import { stickersObject } from './stickers'

import { v4 as uuidv4 } from 'uuid'

function StickerGrid({ stickers, setSticker }) {

  // console.log(stickers)
  return (
    <div className="container-fluid sticker-card-container">
      <div className="row">
        {
          stickersObject.map((sticker, index) => (
            <div className="col-3 mb-4" key={index}>
              <div
                className="card"
                onClick={(e) => {
                  let currSticker = document.createElement("img")
                  currSticker.setAttribute("src", sticker["default"])
                  setSticker([...stickers, {image: currSticker, id: uuidv4()}])
                }}
              >
                <div className="card-body d-flex justify-content-center align-items-center">
                  <div>
                    <img src={sticker["default"]} alt={"sticker"}/>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default StickerGrid
