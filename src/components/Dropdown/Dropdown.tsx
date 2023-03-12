import * as Dropdown from '@radix-ui/react-dropdown-menu';
import cn from 'clsx';
import * as React from 'react';

import { Button as Btn, ButtonProps } from '@/components';

export interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export const Root = Dropdown.Root;
export const Portal = Dropdown.Portal;
export const Trigger = Dropdown.Trigger;

export const Button = React.forwardRef<
  React.ElementRef<typeof Dropdown.Trigger>,
  ButtonProps
>(({ className, ...props }, forwardedRef) => (
  <Dropdown.Trigger ref={forwardedRef} asChild>
    <Btn {...props} />
  </Dropdown.Trigger>
));

export const Content = React.forwardRef<
  React.ElementRef<typeof Dropdown.Content>,
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

export const Group = React.forwardRef<
  React.ElementRef<typeof Dropdown.Group>,
  Dropdown.MenuGroupProps
>(({ className, ...props }, forwardedRef) => (
  <Dropdown.Group
    className={cn(className, 'DropdownGroup')}
    ref={forwardedRef}
    {...props}
  />
));

export interface DropdownItemProps extends Dropdown.MenuItemProps {
  color?: 'red' | 'gray';
}

export const Item = React.forwardRef<
  React.ElementRef<typeof Dropdown.Item>,
  DropdownItemProps
>(({ className, color, ...props }, forwardedRef) => (
  <Dropdown.Item
    ref={forwardedRef}
    className={cn(className, 'DropdownItem', {
      red: color === 'red',
      gray: color === 'gray',
    })}
    {...props}
  />
));

export const Label = React.forwardRef<
  React.ElementRef<typeof Dropdown.Label>,
  Dropdown.MenuLabelProps
>(({ className, ...props }, forwardedRef) => (
  <Dropdown.Label
    className={cn(className, 'DropdownLabel')}
    ref={forwardedRef}
    {...props}
  />
));

export const Separator = React.forwardRef<
  React.ElementRef<typeof Dropdown.Separator>,
  Dropdown.MenuSeparatorProps
>(({ className, ...props }, forwardedRef) => (
  <Dropdown.Separator
    className={cn(className, 'DropdownSeparator')}
    ref={forwardedRef}
    {...props}
  />
));
