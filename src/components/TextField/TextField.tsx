import classnames from "clsx";
import {
  InputHTMLAttributes,
  forwardRef,
  createContext,
  useContext,
  HTMLAttributes,
  useId,
  LabelHTMLAttributes,
} from "react";
import { withClassName } from "../../lib";

const TextFieldContext = createContext<{ id?: string }>({});

export interface TextFieldRootProps extends HTMLAttributes<HTMLDivElement> {}

export const Root = forwardRef<HTMLDivElement, TextFieldRootProps>(
  ({ className, ...props }, forwardedRef) => {
    const id = useId();
    return (
      <TextFieldContext.Provider value={{ id }}>
        <div
          ref={forwardedRef}
          className={classnames(className, "TextFieldRoot")}
          {...props}
        />
      </TextFieldContext.Provider>
    );
  }
);

export interface TextFieldInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, TextFieldInputProps>(
  ({ className, ...props }, forwardedRef) => {
    const { id } = useContext(TextFieldContext);
    return (
      <input
        ref={forwardedRef}
        className={classnames(className, "reset-input", "TextFieldInput")}
        id={id ?? props.id}
        {...props}
      />
    );
  }
);

export interface TextFieldLabelProps
  extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = forwardRef<HTMLLabelElement, TextFieldLabelProps>(
  ({ className, ...props }, forwardedRef) => {
    const { id } = useContext(TextFieldContext);
    return (
      <label
        ref={forwardedRef}
        className={classnames(className, "TextFieldLabel")}
        htmlFor={id ?? props.htmlFor}
        {...props}
      />
    );
  }
);
