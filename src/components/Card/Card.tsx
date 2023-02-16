import { withCombineProps } from "@/lib";
import { JSX } from "solid-js";

export interface CardProps extends JSX.HTMLAttributes<HTMLDivElement> {}

export const Card = withCombineProps("div", { class: "Card" });
