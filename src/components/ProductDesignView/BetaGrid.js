import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


function BetaGrid({aiStickers, setAISticker}) {
  const bodyPix = require('@tensorflow-models/body-pix');
  const [newImages, setNewImage] = useState([])

  function loadFile(file) {
    if (file) {
      const reader = new FileReader()
      let currImage = document.createElement("img")
      reader.addEventListener("load", () => {
        currImage.setAttribute("crossOrigin", "")
        currImage.setAttribute("src", reader.result)
        currImage.addEventListener("load", () => {
          removeBackground(currImage)
        }, false)
      }, false)
      reader.readAsDataURL(file[0])
    }
  }

  async function removeBackground(image) {
    const canvas = document.createElement("canvas")
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d")

    const net = await bodyPix.load({
      architecture: 'MobileNetV1',
      outputStride: 16,
      multiplier: 0.75,
      quantBytes: 2
    })
    const { data:map } = await net.segmentPerson(image, {
      internalResolution: 'medium',
    });

    context.drawImage(image, 0, 0)
    const { data:imageData } = context.getImageData(0, 0, canvas.width, canvas.height);

    const prediction = context.createImageData(image.width, image.height)
    const predictionData = prediction.data

    for(let i=0; i<map.length; i++) {
      const [r, g, b, a] = [imageData[i*4], imageData[i*4+1], imageData[i*4+2], imageData[i*4+3]];
      [
        predictionData[i*4],
        predictionData[i*4+1],
        predictionData[i*4+2],
        predictionData[i*4+3]
      ] = !map[i] ? [255, 255, 255, 0] : [r, g, b, a];
    }
    context.putImageData(prediction, 0, 0);
    let predImage = new Image();
    predImage.src = canvas.toDataURL();
    predImage.addEventListener("load", () => {
      setNewImage([...newImages, predImage])
    }, false)
  }

  return (
    <div className="container-fluid beta-card-container">
      <div className="row">
        <div className="col-12 mb-3">
        <input
          className="form-control"
          type="file"
          onChange={(e)=> {
            loadFile(e.target.files)
          }}
        />
      </div>
        {
          newImages.map((image, index) => (
            <div className="col-6 mb-4" key={index}>
              <div
                className="card"
                onClick={(e) => {
                  let currSticker = document.createElement("img")
                  currSticker.setAttribute("src", image.src)
                  setAISticker([...aiStickers, {image: currSticker, id: uuidv4()}])
                }}
              >
                <div className="card-body d-flex justify-content-center align-items-center">
                  <div>
                    <img src={image.src} alt={"segmentation result"}/>
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

export default BetaGrid
