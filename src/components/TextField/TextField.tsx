import { mergeDefaultProps, withCombineProps } from "@/lib";
import { TextField } from "@kobalte/core";
import { combineProps } from "@solid-primitives/props";
import { ComponentProps, splitProps } from "solid-js";

export interface TextFieldRootProps
  extends ComponentProps<typeof TextField.Root> {
  size?: "1" | "2";
}

export function Root(props: TextFieldRootProps) {
  props = mergeDefaultProps({ size: "2" }, props);

  const [, rest] = splitProps(props, ["size", "class", "classList"]);

  return <TextField.Root class={`TextField size-${props.size}`} {...rest} />;
}

export const Label = withCombineProps(TextField.Label, { class: "Label" });

export const Input = withCombineProps(TextField.Input, { class: "Input" });

export const TextArea = withCombineProps(TextField.TextArea, {
  class: "TextArea",
});

export const Description = withCombineProps(TextField.Description, {
  class: "Description",
});

export const ErrorMessage = withCombineProps(TextField.ErrorMessage, {
  class: "ErrorMessage",
});
