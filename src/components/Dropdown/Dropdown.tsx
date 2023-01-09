import * as Dropdown from "@radix-ui/react-dropdown-menu"
import classnames from "clsx"
import { ElementRef, forwardRef, ReactNode } from "react"
import { withClassName } from "../../lib"
import { Button as Btn, ButtonProps } from "../Button/Button"

export interface DropdownMenuProps {
  trigger: ReactNode
  children: ReactNode
}

export const Root = Dropdown.Root
export const Portal = Dropdown.Portal

export const Button = forwardRef<
  ElementRef<typeof Dropdown.Trigger>,
  ButtonProps
>(({ className, ...props }, forwardedRef) => (
  <Dropdown.Trigger ref={forwardedRef} asChild>
    <Btn {...props} />
  </Dropdown.Trigger>
))

export const Content = forwardRef<
  ElementRef<typeof Dropdown.Content>,
  Dropdown.DropdownMenuContentProps
>(
  (
    {
      className,
      sideOffset = 4,
      align = "start",
      side = "bottom",
      onCloseAutoFocus = (e) => e.preventDefault(),
      ...props
    },
    forwardedRef
  ) => (
    <Dropdown.Content
      ref={forwardedRef}
      className={classnames(className, "DropdownContent")}
      side={side}
      sideOffset={sideOffset}
      align={align}
      onCloseAutoFocus={onCloseAutoFocus}
      {...props}
    />
  )
)

export const Group = withClassName(Dropdown.Group, "DropdownGroup")
export const Item = withClassName(Dropdown.Item, "DropdownItem")
export const Label = withClassName(Dropdown.Label, "DropdownLabel")
export const Separator = withClassName(Dropdown.Separator, "DropdownSeparator")
