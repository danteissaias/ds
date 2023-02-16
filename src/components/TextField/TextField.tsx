import { TextField } from "@kobalte/core";
import { withCombineProps } from "@/lib";

export const Root = withCombineProps(TextField.Root, { class: "TextField" });

export const Label = withCombineProps(TextField.Label, { class: "Label" });

export const Input = withCombineProps(TextField.Input, { class: "Input" });
