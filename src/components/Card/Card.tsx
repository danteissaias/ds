import * as React from "react";

import { withClassName } from "@/lib";
import card from "./Card.module.css";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = withClassName("div", card.root);
