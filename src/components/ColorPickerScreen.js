import React from "react";

const ColorPickerScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div>
        <h1>The Random color picker</h1>
      </div>
      <div>
        <h4>
          This interactive web app allows users to explore and select colors
          with ease, making it a fun and creative tool for any design
          enthusiast.
        </h4>
      </div>
      <div>color cards section.</div>
    </div>
  );
};

export default ColorPickerScreen;
