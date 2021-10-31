import React from "react";

import { RoundedBarProps } from "./types";

const StartRoundBar = ({ bar, rx }: RoundedBarProps) => {
  return (
    <path
      d={`M${bar.x + bar.width}, ${bar.y + bar.height}
                h-${bar.width - rx}
                q-${rx},0 -${rx},-${rx}
                v-${bar.height - 2 * rx}
                q0,-${rx} ${rx},-${rx}
                h${bar.width - rx}
                z
                `}
      fill={bar.color}
    />
  );
};

export default StartRoundBar;
