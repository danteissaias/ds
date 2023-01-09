// Adapted from https://samuelkraft.com/blog/radix-ui-styling-with-css
import classnames from "clsx";
import {
  ComponentProps,
  createElement,
  JSXElementConstructor,
  ElementRef,
  forwardRef,
} from "react";

export const withClassName = <
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>
>(
  component: T,
  ...classes: string[]
) => {
  return forwardRef<ElementRef<typeof component>, ComponentProps<T>>(
    (props, forwardedRef) =>
      createElement(component, {
        ...props,
        ref: forwardedRef,
        className: classnames(props.classNames, classes),
      })
  );
};
