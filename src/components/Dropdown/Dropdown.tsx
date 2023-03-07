import * as Dropdown from '@radix-ui/react-dropdown-menu';
import cn from 'clsx';
import { ElementRef, forwardRef, ReactNode } from 'react';

import { Button as Btn, ButtonProps } from '@/components';

export interface DropdownMenuProps {
  trigger: ReactNode;
  children: ReactNode;
}

export const Root = Dropdown.Root;
export const Portal = Dropdown.Portal;
export const Trigger = Dropdown.Trigger;

export const Button = forwardRef<
  ElementRef<typeof Dropdown.Trigger>,
  ButtonProps
>(({ className, ...props }, forwardedRef) => (
  <Dropdown.Trigger ref={forwardedRef} asChild>
    <Btn {...props} />
  </Dropdown.Trigger>
));

export const Content = forwardRef<
  ElementRef<typeof Dropdown.Content>,
  Dropdown.DropdownMenuContentProps
>(
  (
    {
      className,
      sideOffset = 4,
      align = 'start',
      side = 'bottom',
      onCloseAutoFocus = (e) => e.preventDefault(),
      ...props
    },
    forwardedRef
  ) => (
    <Dropdown.Content
      ref={forwardedRef}
      className={cn(className, 'DropdownContent')}
      side={side}
      sideOffset={sideOffset}
      align={align}
      onCloseAutoFocus={onCloseAutoFocus}
      {...props}
    />
  )
);

export const Group = forwardRef<
  ElementRef<typeof Dropdown.Group>,
  Dropdown.MenuGroupProps
>(({ className, ...props }, forwardedRef) => (
  <Dropdown.Group
    className={cn(className, 'DropdownGroup')}
    ref={forwardedRef}
    {...props}
  />
));

export const Item = forwardRef<
  ElementRef<typeof Dropdown.Item>,
  Dropdown.MenuItemProps
>(({ className, ...props }, forwardedRef) => (
  <Dropdown.Item
    className={cn(className, 'DropdownItem')}
    ref={forwardedRef}
    {...props}
  />
));

export const Label = forwardRef<
  ElementRef<typeof Dropdown.Label>,
  Dropdown.MenuLabelProps
>(({ className, ...props }, forwardedRef) => (
  <Dropdown.Label
    className={cn(className, 'DropdownLabel')}
    ref={forwardedRef}
    {...props}
  />
));

export const Separator = forwardRef<
  ElementRef<typeof Dropdown.Separator>,
  Dropdown.MenuSeparatorProps
>(({ className, ...props }, forwardedRef) => (
  <Dropdown.Separator
    className={cn(className, 'DropdownSeparator')}
    ref={forwardedRef}
    {...props}
  />
));
