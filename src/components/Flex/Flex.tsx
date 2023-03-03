import cn from "clsx";
import { JSX, splitProps } from "solid-js";

import {
  withBreakpoints,
  WithBreakpoints as BP,
  MarginProps,
  withMargin,
} from "@/lib";

export interface FlexProps
  extends JSX.HTMLAttributes<HTMLDivElement>,
    MarginProps {
  direction?: BP<"column" | "column-reverse" | "row" | "row-reverse">;
  align?: BP<"start" | "end" | "center" | "baseline" | "stretch">;
  justify?: BP<"start" | "end" | "center" | "between" | "around" | "evenly">;
  gap?: BP<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9">;
}

export function Flex(props: FlexProps) {
  const [, margin, rest] = splitProps(
    props,
    ["direction", "align", "justify", "gap", "class"],
    ["m", "mb", "ml", "mr", "mt", "mx", "my"]
  );

  return (
    <div
      class={cn(
        props.class,
        "Flex display-flex",
        withBreakpoints("fd", props.direction),
        withBreakpoints("ai", props.align),
        withBreakpoints("jc", props.justify),
        withBreakpoints("gap", props.gap),
        withMargin(margin)
      )}
      {...rest}
    />
  );
}
