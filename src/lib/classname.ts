import cn from "clsx";
import {
  ComponentProps,
  createElement,
  ElementRef,
  ElementType,
  forwardRef,
} from "react";

export const withClassName = <T extends ElementType>(
  component: T,
  ...classes: string[]
) => {
  return forwardRef<ElementRef<typeof component>, ComponentProps<T>>(
    (props, forwardedRef) =>
      createElement(component, {
        ...props,
        ref: forwardedRef,
        className: cn(props.classNames, classes),
      })
  );
};
