import * as React from "react";

import { withClassName } from "@/lib";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = withClassName("div", "Card");
