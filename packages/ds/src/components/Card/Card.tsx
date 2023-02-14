import { JSX } from "solid-js";

export interface CardProps extends JSX.HTMLAttributes<HTMLDivElement> {}

export const Card = (props: CardProps) => <div class="Card" {...props} />;
