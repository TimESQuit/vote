import React from "react";
import { BarStackHorizontal } from "@visx/shape";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { schemeCategory10 } from "d3-scale-chromatic";

import { useSpring, animated, config } from "react-spring";

import { HorizontalBarStackProps } from "./types";
import HorizontalBar from "./HorizontalBar";
import { IChartDatum } from "../../election/types";

const HorizontalBarStack = ({
  data,
  keys,
  width = 800,
  height = 400,
  margin = { top: 15, right: 25, bottom: 10, left: 30 },
}: HorizontalBarStackProps) => {
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const getCategory = (d: IChartDatum) => d.name;

  const xScale = scaleLinear<number>({
    domain: [0, 100],
    range: [0, xMax],
  });
  const yScale = scaleBand<string>({
    domain: data.map(getCategory),
    // range: [0, yMax] puts the first bar on top
    // as of this comment, the data is in descending order
    range: [0, yMax],
    padding: 0.7,
  });
  const colorScale = scaleOrdinal<string, string>({
    domain: keys,
    range: [...schemeCategory10],
  });

  const animationProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses,
  });

  return (
    <animated.svg width={width} height={height} style={animationProps}>
      <rect width={width} height={height} rx={10} fill="MidnightBlue" />
      <Group top={margin.top} left={margin.left}>
        <BarStackHorizontal<IChartDatum, string>
          data={data}
          keys={keys}
          height={yMax}
          y={getCategory}
          xScale={xScale}
          yScale={yScale}
          color={colorScale}
        >
          {(barStacks) => {
            const totalStacks = barStacks.length;

            return barStacks.map((barStack) => {
              const idx = barStack.index;
              const showName = idx === 0 ? true : false;
              const showPercent = idx === totalStacks - 1 ? true : false;

              return barStack.bars.map((bar) => {
                return (
                  <HorizontalBar
                    data={data}
                    keys={keys}
                    bar={bar}
                    stackIdx={idx}
                    showName={showName}
                    showPercent={showPercent}
                    key={`${data[bar.index]["name"]}-stack:${idx}-bar${
                      bar.index
                    }`}
                  />
                );
              });
            });
          }}
        </BarStackHorizontal>
      </Group>
    </animated.svg>
  );
};

export default HorizontalBarStack;
