import React, { useState } from "react";

const listOfSquareIds = ["sqA", "sqB", "sqC", "sqD"];

export default function Squares() {
  const [squares, setSquares] = useState(listOfSquareIds);
  const [activeSquare, setActiveSquare] = useState(null);

  const getClassName = (id) => {
    return id === activeSquare ? "active" : "";
  };

  const markActive = (id) => {
    if (id === activeSquare) {
      setActiveSquare(null);
    } else {
      setActiveSquare(id);
    }
  };

  return (
    <div className="widget-squares container">
      <h2>Squares</h2>
      <div className="squares">
        {squares.map((id) => (
          <div
            id={id}
            key={id}
            className={`square ${getClassName(id)}`}
            onClick={() => markActive(id)}
          ></div>
        ))}
      </div>
    </div>
  );
}
