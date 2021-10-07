import React, { Fragment, useRef, useEffect } from 'react'
import { Transformer, Text } from 'react-konva'

function TextBox({ text, textProps, isSelected, onSelect, stage }) {
  const textRef = useRef()
  const transformerRef = useRef()

  useEffect(() => {
    if (isSelected) {
      transformerRef.current.nodes([textRef.current])
      transformerRef.current.getLayer().batchDraw()
    }
  }, [isSelected])


  return (
    <Fragment>
      <Text
        onClick={onSelect}
        text={text}
        ref={textRef}
        {...textProps}
        draggable={true}
        onDblClick={(e) => {
          const textBox = textRef.current
          const layer = transformerRef.current.getLayer()
          textBox.hide()
          let textPosition = textBox.absolutePosition()
          let stageBox = stage.container().getBoundingClientRect()
          let areaPosition = {
            x: stageBox.left + textPosition.x,
            y: stageBox.top + textPosition.y,
          }
          let textarea = document.createElement("textarea")
          document.body.appendChild(textarea)
          textarea.value = textBox.text()
          textarea.style.position = "absolute"
          textarea.style.top = areaPosition.y + "px"
          textarea.style.left = areaPosition.x + "px"
          textarea.style.width = textBox.width() - textBox.padding() * 2 + "px"
          textarea.style.height = textBox.height() - textBox.padding() * 2 + 5 + "px"
          textarea.style.fontSize = textBox.fontSize() + "px"
          textarea.style.border = "none"
          textarea.style.padding = "0px"
          textarea.style.margin = "0px"
          textarea.style.overflow = "hidden"
          textarea.style.background = "none"
          textarea.style.outline = "none"
          textarea.style.resize = "none"
          textarea.style.lineHeight = textBox.lineHeight()
          textarea.style.fontFamily = textBox.fontFamily()
          textarea.style.transformOrigin = "left top"
          textarea.style.textAlign = textBox.align()
          textarea.style.color = textBox.fill()

          let rotation = textBox.rotation()
          let transform = ""
          if (rotation) {
            transform += "rotateZ(" + rotation + "deg)"
          }
          let px = 0
          let isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1
          if (isFirefox) {
            px += 2 + Math.round(textBox.fontSize() / 20)
          }
          transform += "translateY(-" + px + "px)"
          textarea.style.transform = transform
          textarea.style.height = "auto"
          textarea.style.height = textarea.scrollHeight + 3 + "px"
          textarea.focus()

          function removeTextarea() {
            textarea.parentNode.removeChild(textarea)
            window.removeEventListener("click", handleOutsideClick)
            textBox.show()
            layer.draw()
          }

          function setTextareaWidth(newWidth) {
            if (!newWidth) {
              newWidth = textBox.placeholder.length * textBox.fontSize()
            }
            let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
            let isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1
            if (isSafari || isFirefox) {
              newWidth = Math.ceil(newWidth)
            }
            let isEdge = document.documentMode || /Edge/.test(navigator.userAgent)
            if (isEdge) {
              newWidth += 1
            }
            textarea.style.width = newWidth + "px"
          }

          textarea.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              textBox.text(textarea.value)
              removeTextarea()
            }
            if (e.key === "Escape") {
              removeTextarea()
            }

            let scale = textBox.getAbsoluteScale().x
            setTextareaWidth(textBox.width() * scale)
            textarea.style.height = "auto"
            textarea.style.height = textarea.scrollHeight + textBox.fontSize() + "px"
          })

          let handleOutsideClick = (e) => {
            if (e.target !== textarea) {
              removeTextarea()
            }
          }
          setTimeout(() => {
            window.addEventListener("click", handleOutsideClick)
          })
        }}
      />
      {
        isSelected &&
        <Transformer
          ref={transformerRef}
        />
      }
    </Fragment>
  )
}

export default TextBox
