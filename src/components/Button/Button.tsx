import cn from "clsx";
import * as React from "react";

import { Spinner } from "@/components";
import button from "./Button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  icon?: boolean;
  color?: "gray";
  size?: "1" | "2";
  variant?: "default" | "ghost";
}

export function Button({
  size = "2",
  color = "gray",
  variant = "default",
  loading,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(className, button.reset, button.root, {
        [button.gray]: color === "gray",
        [button.ghost]: variant === "ghost",
        [button.size1]: size === "1",
        [button.size2]: size === "2",
      })}
      {...props}
    >
      {loading ? <Spinner /> : null}
      {children}
    </button>
  );
}
