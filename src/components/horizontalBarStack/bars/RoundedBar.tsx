import React from "react";

import { RoundedBarProps } from "./types";

const RoundedBar = ({ bar, rx }: RoundedBarProps) => {
  return (
    <rect
      x={bar.x}
      y={bar.y}
      width={bar.width}
      height={bar.height}
      rx={rx}
      fill={bar.color}
    />
  );
};

export default RoundedBar;
