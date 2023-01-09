import classnames from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** @deprecated Disabled state is controlled by the `state` prop. */
  disabled?: never;
  state?: "disabled" | "loading" | "normal";
  size?: "1" | "2";
  color?: "gray";
  /** Icon button. */
  icon?: boolean;
  ghost?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "2",
      color = "gray",
      ghost,
      state = "normal",
      onClick,
      className,
      icon,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <button
        ref={forwardedRef}
        aria-live="assertive"
        aria-disabled={state !== "normal" || undefined}
        aria-label={state === "loading" ? "Loading, please wait." : undefined}
        className={classnames(className, "reset-button", "Button", {
          ghost,
          icon,
          gray: color === "gray",
          "state-normal": state === "normal",
          "state-disabled": state === "disabled",
          "state-loading": state === "loading",
          "size-1": size === "1",
          "size-2": size === "2",
        })}
        onClick={(event) => {
          const ariaDisabled =
            event.currentTarget.getAttribute("aria-disabled");
          if (ariaDisabled !== null && ariaDisabled !== "false") {
            event.preventDefault();
            event.stopPropagation();
          } else onClick?.(event);
        }}
        {...props}
      />
    );
  }
);
