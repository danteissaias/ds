import { JSX } from "solid-js";

import { withCombineProps } from "@/lib";

export interface BoxProps extends JSX.HTMLAttributes<HTMLDivElement> {}

export const Box = withCombineProps("div", { class: "Box" });
