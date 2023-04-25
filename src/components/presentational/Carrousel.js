import React from "react";

function Carrousel({ images }) {
  return images.map((image) => <img src={image.src} key={image.key}></img>);
}

export default Carrousel;
