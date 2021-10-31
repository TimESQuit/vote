import { IChartDatum } from "../../election/types";

interface HorizontalBarStackProps {
  data: IChartDatum[];
  keys: string[];
  width?: number;
  height?: number;
  margin?: { top: number; right: number; bottom: number; left: number };
}

interface Ibar {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  index: number;
  key: string;
}

interface HorizontalBarProps {
  data: IChartDatum[];
  keys: string[];
  bar: Ibar;
  stackIdx: number;
  showName: Boolean;
  showPercent: Boolean;
}

export type { Ibar, HorizontalBarStackProps, HorizontalBarProps };
