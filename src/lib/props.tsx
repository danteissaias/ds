import { combineProps } from "@solid-primitives/props";
import { ComponentProps, mergeProps, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";

export function withCombineProps<T extends ValidComponent>(
  component: T,
  propsToCombine: Partial<ComponentProps<T>>
) {
  return (props: ComponentProps<T>) => {
    const combined = combineProps(props, propsToCombine);
    return <Dynamic component={component} {...combined} />;
  };
}

export function mergeDefaultProps<T extends Record<string, any>>(
  defaultProps: Partial<T>,
  props: T
): T {
  return mergeProps(defaultProps, props);
}
