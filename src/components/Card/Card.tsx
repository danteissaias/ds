import { JSX } from "solid-js";

import { withCombineProps } from "@/lib";

export interface CardProps extends JSX.HTMLAttributes<HTMLDivElement> {}

export const Card = withCombineProps("div", { class: "Card" });
