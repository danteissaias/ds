import { JSX, splitProps } from "solid-js";
import { mergeDefaultProps } from "@/lib";
import { Spinner } from "../Spinner/Spinner";

export interface ButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  /** @deprecated Disabled state is controlled by the `state` prop. */
  disabled?: never;
  state?: "disabled" | "loading" | "normal";
  size?: "1" | "2";
  color?: "gray";
  /** Icon button. */
  icon?: boolean;
  ghost?: boolean;
}

export function Button(props: ButtonProps) {
  props = mergeDefaultProps(
    {
      size: "2",
      color: "gray",
      state: "normal",
    },
    props
  );

  const [, rest] = splitProps(props, [
    "size",
    "color",
    "ghost",
    "state",
    "icon",
    "class",
    "classList",
    "children",
  ]);

  return (
    <button
      disabled={props.state === "loading" || props.state === "disabled"}
      class={`Button ${props.color} state-${props.state} size-${props.size}`}
      classList={{ ghost: props.ghost, icon: props.icon }}
      {...rest}
    >
      {props.state === "loading" ? <Spinner /> : null}
      {props.children}
    </button>
  );
}
