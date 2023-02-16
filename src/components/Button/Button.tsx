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
    "onClick",
    "children",
  ]);

  const isLoading = props.state === "loading";
  const isDisabled = props.state === "disabled";

  return (
    <button
      aria-live="assertive"
      aria-disabled={isLoading || isDisabled ? "true" : undefined}
      aria-label={isLoading ? "Loading, please wait." : undefined}
      class={`${props.class} reset-button Button ${props.color} state-${props.state} size-${props.size}`}
      classList={{ ghost: props.ghost, icon: props.icon, ...props.classList }}
      onClick={(e) => {
        if (e.currentTarget.getAttribute("aria-disabled") === "true") {
          e.preventDefault();
          e.stopPropagation();
        } else typeof props.onClick === "function" && props.onClick(e);
      }}
      {...rest}
    >
      {isLoading ? <Spinner /> : null}
      {props.children}
    </button>
  );
}
