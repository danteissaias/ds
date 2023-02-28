import { TextField } from "@kobalte/core";
import cn from "clsx";
import { ComponentProps, splitProps } from "solid-js";

import { mergeDefaultProps, withCombineProps } from "@/lib";

export const Root = withCombineProps(TextField.Root, {
  class: "TextField",
});

export const Label = withCombineProps(TextField.Label, {
  class: "Label",
});

export interface TextFieldInputProps
  extends ComponentProps<typeof TextField.Input> {
  size?: "1" | "2";
}

export function Input(props: TextFieldInputProps) {
  props = mergeDefaultProps({ size: "2" }, props);

  const [, rest] = splitProps(props, ["size", "class"]);

  return (
    <TextField.Input
      class={cn(props.class, "Input", `size-${props.size}`)}
      {...rest}
    />
  );
}
export const TextArea = withCombineProps(TextField.TextArea, {
  class: "TextArea",
});

export const Description = withCombineProps(TextField.Description, {
  class: "Description",
});

export const ErrorMessage = withCombineProps(TextField.ErrorMessage, {
  class: "ErrorMessage",
});
