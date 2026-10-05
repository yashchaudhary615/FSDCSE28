import React from "react";
import cat from "./images.png";

function StateHandling() {
  const [count, setCount] = React.useState(100);

  const [red, setRed] = React.useState(0);
  const [green, setGreen] = React.useState(0);
  const [blue, setBlue] = React.useState(0);

  const [catHeight, setCatHeight] = React.useState(200);
  const [catWidth, setCatWidth] = React.useState(250);
  const [rotation, setRotation] = React.useState(0); // NEW

  function increment() {
    setCount(count + 10);
  }

  function decrement() {
    setCount(count - 10);
  }

  function changeBGColor() {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  }

  function enhanceheight() {
    setCatHeight(catHeight + 10);
  }

  function decreaseheight() {
    setCatHeight(Math.max(10, catHeight - 10));
  }

  function enhancewidth() {
    setCatWidth(catWidth + 10);
  }

  function decreasewidth() {
    setCatWidth(Math.max(10, catWidth - 10));
  }

  function rotateImage() {
    setRotation(rotation + 90);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>State Handling</h1>

      <h2>Count = {count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={rotateImage}>Rotate Image</button>

      <h2>Change Background Color</h2>

      <div
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          border: "2px solid red",
          width: "500px",
          height: "400px",
          margin: "20px auto",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={cat}
          alt="Cute Cat"
          style={{
            width: `${catWidth}px`,
            height: `${catHeight}px`,
            transform: `rotate(${rotation}deg)`, // NEW
            transition: "transform 0.3s",
          }}
        />
      </div>

      <h3>
        Cat Width = {catWidth}px | Cat Height = {catHeight}px | Rotation ={" "}
        {rotation}°
      </h3>

      <div>
        <button onClick={changeBGColor}>Change BG Color</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={enhancewidth}>Increase Cat Width</button>
        <button onClick={decreasewidth}>Decrease Cat Width</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={enhanceheight}>Increase Cat Height</button>
        <button onClick={decreaseheight}>Decrease Cat Height</button>
      </div>
    </div>
  );
}

export default StateHandling;
