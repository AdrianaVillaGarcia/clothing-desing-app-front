import React, { Fragment, useRef, useEffect } from 'react'
import { Transformer, Image } from 'react-konva'

function ImageBox({ image, imageProps, isSelected, onSelect}) {
  const imageRef = useRef()
  const transformerRef = useRef()

  useEffect(() => {
    if (isSelected) {
      transformerRef.current.nodes([imageRef.current])
      transformerRef.current.getLayer().batchDraw()
    }
  }, [isSelected])

  return (
    <Fragment>
      <Image
        onClick={onSelect}
        image={image}
        ref={imageRef}
        {...imageProps}
        // draggable={true}
      />
      {isSelected && <Transformer ref={transformerRef}/>}
    </Fragment>
  )
}

export default ImageBox
