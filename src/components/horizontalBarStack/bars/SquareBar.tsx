import React from "react";

import { Ibar } from "./types";

const SquareBar = ({ bar }: { bar: Ibar }) => {
  return (
    <rect
      x={bar.x}
      y={bar.y}
      width={bar.width}
      height={bar.height}
      fill={bar.color}
    />
  );
};

export default SquareBar;
