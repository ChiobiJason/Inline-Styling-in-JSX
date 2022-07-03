import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1
      style={{
        color: "red",
        fontSize: "20px",
        border: "1px solid black"
      }}
    >
      Hello World!
    </h1>
    <h1 style={customStyle}>Yh</h1>
  </div>,
  document.getElementById("root")
);
