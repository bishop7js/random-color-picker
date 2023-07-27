import React from "react";
import { Card } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { Height } from "@mui/icons-material";

const CardListItem = (color) => {
  const { colorCode, id } = color.color

  return (
    <div>
      <Card>
        <div>{id}</div>
        <div>
          <CircleIcon
            style={{
              color: colorCode,
              height: "100px",
              width: "100px",
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export default CardListItem;
