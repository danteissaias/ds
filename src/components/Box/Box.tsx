import * as React from "react";

import { withClassName } from "@/lib";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Box = withClassName("div", "Box");
