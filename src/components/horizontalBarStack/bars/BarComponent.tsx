import React from "react";

import EndRoundBar from "./EndRoundBar";
import RoundedBar from "./RoundedBar";
import SquareBar from "./SquareBar";
import StartRoundBar from "./StartRoundBar";
import { BarComponentProps } from "./types";

const BarComponent = ({
  bar,
  roundStart = true,
  roundEnd = true,
  rx = 10,
}: BarComponentProps) => {
  if (roundStart && roundEnd) return <RoundedBar bar={bar} rx={rx} />;

  if (roundStart) return <StartRoundBar bar={bar} rx={rx} />;

  if (roundEnd) return <EndRoundBar bar={bar} rx={rx} />;

  return <SquareBar bar={bar} />;
};

export default BarComponent;
