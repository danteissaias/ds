import cn from "clsx";
import * as React from "react";

import { Spinner } from "@/components";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  icon?: boolean;
  color?: "gray";
  size?: "1" | "2";
  variant?: "default" | "ghost";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "2",
      color = "gray",
      variant = "default",
      loading,
      disabled,
      className,
      children,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <button
        disabled={disabled || loading}
        ref={forwardedRef}
        className={cn(className, "reset-button", "Button", {
          gray: color === "gray",
          ghost: variant === "ghost",
          size1: size === "1",
          size2: size === "2",
        })}
        {...props}
      >
        {loading ? <Spinner /> : null}
        {children}
      </button>
    );
  }
);
