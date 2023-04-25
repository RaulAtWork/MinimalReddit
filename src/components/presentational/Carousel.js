import React, { useState } from "react";

export function CarouselItem({ children, width }) {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
}

function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function nextIndex() {
    updateIndex(activeIndex + 1);
  }

  function prevIndex() {
    updateIndex(activeIndex - 1);
  }

  function updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  }

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <button onClick={prevIndex}>{"<"}</button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={
                index === activeIndex ? "active btn-round" : "btn-round"
              }
              onClick={() => {
                updateIndex(index);
              }}
            ></button>
          );
        })}
        <button onClick={nextIndex}>{">"}</button>
      </div>
    </div>
  );
}

export default Carousel;
