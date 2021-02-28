import React from "react"

const ImageViewer = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  )
}

export default ImageViewer
