import React from "react";
import { Text } from "@visx/text";

import BarComponent from "./bars";
import { HorizontalBarProps } from "./types";

const HorizontalBar = ({
  data,
  keys,
  bar,
  stackIdx,
  showName,
  showPercent,
}: HorizontalBarProps) => {
  const nameText = data[bar.index]["name"].toUpperCase();
  const percentTotal = Object.entries(data[bar.index]).reduce((acc, cur) => {
    if (!keys.includes(cur[0])) return acc;
    return acc + cur[1];
  }, 0);

  const percentText: string = percentTotal + "%";
  const key = `horizontal-barstack-${stackIdx}-${bar.index}-${
    data[bar.index]["name"]
  }`;

  return (
    <g key={key}>
      {showPercent && (
        <Text
          x={bar.x + bar.width + 10}
          y={bar.y + bar.height / 2}
          verticalAnchor="middle"
          fill="white"
        >
          {percentText}
        </Text>
      )}
      {showName && (
        <Text x={bar.x + 10} y={bar.y - 5} fill="white">
          {nameText}
        </Text>
      )}
      {bar.width !== 0 && (
        <BarComponent
          bar={bar}
          roundStart={stackIdx === 0}
          roundEnd={stackIdx === keys.length - 1}
          rx={12}
        />
      )}
    </g>
  );
};

export default HorizontalBar;
