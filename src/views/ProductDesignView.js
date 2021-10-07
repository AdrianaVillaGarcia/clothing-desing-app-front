import React, { useState, useEffect, useRef } from 'react'

import { Stage, Layer, Line } from 'react-konva'

import FontGrid from '../components/ProductDesignView/FontGrid'
import OptionGrid from '../components/ProductDesignView/OptionGrid'
import StickerGrid from '../components/ProductDesignView/StickerGrid'

import ImageBox from '../components/ProductDesignView/ImageBox'
import TextBox from '../components/ProductDesignView/TextBox'
import PincelGrid from '../components/ProductDesignView/PincelGrid'
import GalleryGrid from '../components/ProductDesignView/GalleryGrid'
import BetaGrid from '../components/ProductDesignView/BetaGrid'

function ProductDesignView() {

  const [currentGrid, setCurrentGrid] = useState(0)
  const [whiteboard, setWhiteboard] = useState({})
  const whiteboardRef = useRef()
  const stageRef = useRef()

  const stage = stageRef.current

  useEffect(() => {
    setWhiteboard({
      "width": whiteboardRef.current.clientWidth,
      "height": whiteboardRef.current.parentElement.clientHeight,
    })
  }, [])


  const [stickers, setSticker] = useState([])
  const [hoodies, setHoodie] = useState([])
  const [textBoxes, setTextBox] = useState([])
  const [aiStickers, setAIStickers] = useState([])
  const [selectedId, selectShape] = useState(null);


  document.addEventListener("keydown", (e) => {
    if (e.key === "Delete") {
      let index = stickers.findIndex(sticker => sticker.id === selectedId);
      if (index !== -1) {
        let newStickers = [...stickers]
        newStickers.splice(index, 1);
        setSticker([...newStickers]);
      }
      index = textBoxes.findIndex(textbox => textbox.id === selectedId);
      if (index !== -1) {
        let newTextBoxes = [...textBoxes]
        newTextBoxes.splice(index, 1);
        setTextBox([...newTextBoxes]);
      }
      index = aiStickers.findIndex(aiSticker => aiSticker.id === selectedId);
      if (index !== -1) {
        let newAIStickers = [...aiStickers]
        newAIStickers.splice(index, 1);
        setAIStickers([...newAIStickers]);
      }
      index = hoodies.findIndex(hoodie => hoodie.id === selectedId);
      if (index !== -1) {
        let newHoodies = [...hoodies]
        newHoodies.splice(index, 1);
        setHoodie([...newHoodies]);
      }
    }
  });

  const [lines, setLines] = useState([])
  const isDrawing = useRef(false)
  const [tool, setTool] = useState('pen');
  const [brushColor, setBrushColor] = useState()

  // const handleMouseDown = (e) => {
  //   isDrawing.current = true;
  //   const pos = e.target.getStage().getPointerPosition();
  //   setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  // };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const [isDraggable, setIsDraggable] = useState(true)

  useEffect(()=>{
    if(currentGrid === 1) {
      setIsDraggable(false)
    }
  }, [currentGrid])


  return (
    <div className="container-fluid">
      <div className="row product-design-container">

        <div className="col-1 mt-4">
          <OptionGrid setCurrentGrid={setCurrentGrid}/>
        </div>

        <div className="col-4 mt-4">
          {
            {
              0: <FontGrid textBoxes={textBoxes} setTextBox={setTextBox}/>,
              1: <PincelGrid brushColor={brushColor} setBrushColor={setBrushColor}/>,
              2: <GalleryGrid hoodies={hoodies} setHoodie={setHoodie}/>,
              3: <StickerGrid stickers={stickers} setSticker={setSticker}/>,
              4: <BetaGrid aiStickers={aiStickers} setAISticker={setAIStickers}/>,
            }
            [currentGrid]
          }
        </div>

        <div className="col-7 mt-4">
          <div className="card" ref={whiteboardRef}>
            <Stage
              width={whiteboard.width}
              height={whiteboard.height}
              onMouseDown={(e) => {
                if (currentGrid === 1) {
                  isDrawing.current = true;
                  const pos = e.target.getStage().getPointerPosition();
                  setLines([...lines, { tool, points: [pos.x, pos.y] }]);
                }
                if (e.target === e.target.getStage()) {
                  selectShape(null)
                }
              }}
              onMouseMove={currentGrid === 1 ? handleMouseMove: ()=>{}}
              onMouseUp={currentGrid === 1 ? handleMouseUp : ()=>{}}
              ref={stageRef}
            >
              <Layer>
                {
                  hoodies.map((hoodie, index) => (
                    <ImageBox
                      image={hoodie.image}
                      imageProps={{
                        x: 100,
                        y: 100,
                        width: 512,
                        height: 512,
                        id: hoodie.id,
                        draggable: isDraggable,
                      }}
                      isSelected={hoodie.id === selectedId}
                      onSelect={() => {
                        selectShape(hoodie.id)
                      }}
                      key={index}
                    />
                  ))
                }
                {
                  stickers.map((sticker, index) => (
                    <ImageBox
                      image={sticker.image}
                      imageProps={{
                        x: 100,
                        y: 100,
                        width: 64,
                        height: 64,
                        id: sticker.id,
                        draggable: true,
                      }}
                      isSelected={sticker.id === selectedId}
                      onSelect={() => {
                        selectShape(sticker.id)
                      }}
                      key={index}
                    />
                  ))
                }
                {
                  textBoxes.map((textbox, index) => (
                    <TextBox
                      text={"Inserta tu frase"}
                      textProps={{
                        x: 256,
                        y: 256,
                        draggable: true,
                        width: 400,
                        height: 50,
                        fontSize: 32,
                        ...textbox,
                      }}
                      isSelected={textbox.id === selectedId}
                      onSelect={ () => {
                        selectShape(textbox.id)
                      }}
                      stage={ stageRef.current }
                      key={index}
                    />
                  ))
                }
                {
                  aiStickers.map((sticker, index) => (
                    <ImageBox
                      image={sticker.image}
                      imageProps={{
                        x: 100,
                        y: 100,
                        width: 64,
                        height: 64,
                        id: sticker.id,
                        draggable: true,
                      }}
                      isSelected={sticker.id === selectedId}
                      onSelect={() => {
                        selectShape(sticker.id)
                      }}
                      key={index}
                    />
                  ))
                }
                {
                  lines.map((line, index) => (
                    <Line
                      key={index}
                      {...line}
                      strokeWidth={5}
                      stroke={brushColor}
                    />
                  ))
                }
              </Layer>
            </Stage>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDesignView
