import cn from "clsx";
import * as React from "react";

export const withClassName = <T extends React.ElementType>(
  component: T,
  ...classes: string[]
) => {
  return React.forwardRef<
    React.ElementRef<typeof component>,
    React.ComponentProps<T>
  >((props, forwardedRef) =>
    React.createElement(component, {
      ...props,
      ref: forwardedRef,
      className: cn(props.classNames, classes),
    })
  );
};
