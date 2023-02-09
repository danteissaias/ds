import {
  ComponentProps,
  createElement,
  JSXElementConstructor,
  ElementRef,
  forwardRef,
} from "react";

export const withDefaultProps = <
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
  P extends ComponentProps<T>
>(
  component: T,
  defaultProps: P
) => {
  const Comp = forwardRef<ElementRef<typeof component>, ComponentProps<T>>(
    (props, forwardedRef) =>
      createElement(
        component,
        Object.assign(defaultProps, props, { ref: forwardedRef })
      )
  );

  Comp.displayName =
    typeof component === "string"
      ? component
      : // @ts-ignore
        component.displayName ?? component.name;
  return Comp;
};
