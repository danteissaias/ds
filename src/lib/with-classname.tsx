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
  const Comp = forwardRef<ElementRef<typeof component>, ComponentProps<T>>(
    (props, forwardedRef) =>
      createElement(component, {
        ...props,
        ref: forwardedRef,
        className: classnames(props.classNames, classes),
      })
  );

  Comp.displayName =
    typeof component === "string"
      ? component
      : // @ts-ignore
        component.displayName ?? component.name;
  return Comp;
};
