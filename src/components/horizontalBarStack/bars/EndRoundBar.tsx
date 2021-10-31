import React from "react";

import { RoundedBarProps } from "./types";

const EndRoundBar = ({ bar, rx }: RoundedBarProps) => {
  return (
    <path
      d={`M${bar.x}, ${bar.y}
                h${bar.width - rx}
                q${rx},0 ${rx},${rx}
                v${bar.height - 2 * rx}
                q0,${rx} -${rx},${rx}
                h-${bar.width - rx}
                z
                `}
      fill={bar.color}
    />
  );
};

export default EndRoundBar;
