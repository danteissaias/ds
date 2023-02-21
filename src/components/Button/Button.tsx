import cn from "clsx";
import { JSX, splitProps } from "solid-js";

import { Spinner } from "@/components";
import { mergeDefaultProps } from "@/lib";

export interface ButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  size?: "1" | "2";
  color?: "gray";
  icon?: boolean;
  ghost?: boolean;
}

export function Button(props: ButtonProps) {
  props = mergeDefaultProps(
    {
      size: "2",
      color: "gray",
    },
    props
  );

  const [, rest] = splitProps(props, [
    "size",
    "color",
    "loading",
    "disabled",
    "icon",
    "ghost",
    "class",
    "children",
  ]);

  return (
    <button
      disabled={props.disabled || props.loading}
      class={cn(props.class, "reset-button", "Button", {
        ghost: props.ghost,
        icon: props.icon,
        gray: props.color === "gray",
        "size-1": props.size === "1",
        "size-2": props.size === "2",
      })}
      {...rest}
    >
      {props.loading ? <Spinner /> : null}
      {props.children}
    </button>
  );
}
