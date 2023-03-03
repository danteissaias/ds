import { PartialRecord } from "./types";
import { withBreakpoints, WithBreakpoints } from "./breakpoints";

type Space =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "-1"
  | "-2"
  | "-3"
  | "-4"
  | "-5"
  | "-6"
  | "-7"
  | "-8"
  | "-9";

export type MarginProps = PartialRecord<
  "m" | "mx" | "my" | "mt" | "mb" | "ml" | "mr",
  WithBreakpoints<Space>
>;

export const withMargin = ({ m, mx, my, mt, mb, ml, mr }: MarginProps) => {
  return [
    withBreakpoints("m", m),
    withBreakpoints("mx", mx),
    withBreakpoints("my", my),
    withBreakpoints("mt", mt),
    withBreakpoints("mb", mb),
    withBreakpoints("ml", ml),
    withBreakpoints("mr", mr),
  ]
    .filter(Boolean)
    .join(" ");
};
