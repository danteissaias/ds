import { Button as KButton } from "@kobalte/core";
import cn from "clsx";
import { JSX, splitProps } from "solid-js";

import { Spinner } from "@/components";
import { mergeDefaultProps } from "@/lib";

export interface ButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean;
  loading?: boolean;
  size?: "1" | "2";
  color?: "gray" | "green" | "red";
  variant?: "default" | "ghost";
}

export function Button(props: ButtonProps) {
  props = mergeDefaultProps(
    {
      size: "2",
      color: "gray",
      variant: "default",
    },
    props
  );

  const [, rest] = splitProps(props, [
    "size",
    "color",
    "loading",
    "disabled",
    "icon",
    "variant",
    "class",
    "children",
  ]);

  return (
    <KButton.Root
      isDisabled={props.disabled || props.loading}
      class={cn(props.class, "reset-button", "Button", {
        default: props.variant == "default",
        ghost: props.variant == "ghost",
        icon: props.icon,
        red: props.color === "red",
        green: props.color === "green",
        gray: props.color === "gray",
        "size-1": props.size === "1",
        "size-2": props.size === "2",
      })}
      {...rest}
    >
      {props.loading ? <Spinner /> : null}
      {props.children}
    </KButton.Root>
  );
}

export interface IconButtonProps extends Omit<ButtonProps, "icon"> {
  "aria-label": string;
}

export function IconButton(props: IconButtonProps) {
  const [, rest] = splitProps(props, ["children"]);

  return (
    <Button icon {...rest}>
      {props.loading ? null : props.children}
    </Button>
  );
}
