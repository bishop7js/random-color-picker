import React from "react";
import colorsData from "../data/colors.json";
import CardListItem from "./CardListItem";

const ColorPickerScreen = () => {

    const {colors} = colorsData;

    const renderColorCards = () => {
        return (
            colors.map((color) => {
                return (
                    <div>
                        <CardListItem color={color} />
                    </div>
                );
            })
        );
    }

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
      <div style={{display: "flex", flexWrap: "wrap"}}>{renderColorCards()}</div>
    </div>
  );
};

export default ColorPickerScreen;
