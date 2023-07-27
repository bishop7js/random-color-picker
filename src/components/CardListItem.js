import React, { useState } from "react";
import { Card } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { Height } from "@mui/icons-material";

const CardListItem = (color) => {
  const [rgbColor, setRgbColor] = useState("");
  const { colorCode, id } = color.color;

  const changeColor = () => {
    let randomRgbColor1 = parseInt(Math.random() * 100);
    let randomRgbColor2 = parseInt(Math.random() * 200);
    let randomRgbColor3 = parseInt(Math.random() * 10);

    setRgbColor(
      `rgb(${randomRgbColor1}, ${randomRgbColor2}, ${randomRgbColor3})`
    );
  };

  return (
    <div style={{margin: "8px"}}>
      <Card>
        <div style={{ padding: "24px" }}>
          <div>
            <h5>{rgbColor ? rgbColor : colorCode}</h5>
          </div>
          <div onClick={() => changeColor()}>
            <CircleIcon
              style={{
                color: rgbColor ? rgbColor : colorCode,
                height: "100px",
                width: "100px",
              }}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardListItem;
