import { Ibar } from "../types";

interface RoundedBarProps {
  bar: Ibar;
  rx: number;
}

interface BarComponentProps {
  bar: Ibar;
  roundStart: Boolean;
  roundEnd: Boolean;
  rx?: number;
}

export type { Ibar, RoundedBarProps, BarComponentProps };
