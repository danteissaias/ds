import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import cn from 'clsx';
import * as React from 'react';

import {
  Button as Btn,
  IconButton as IconBtn,
  ButtonProps,
  IconButtonProps,
} from '@/components';

export interface MenuMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export const Root = ({
  modal = false,
  ...props
}: DropdownMenu.DropdownMenuProps) => (
  <DropdownMenu.Root modal={modal} {...props} />
);

export const Button = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Trigger>,
  ButtonProps
>(({ className, ...props }, forwardedRef) => (
  <DropdownMenu.Trigger ref={forwardedRef} asChild>
    <Btn {...props} />
  </DropdownMenu.Trigger>
));

export const IconButton = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Trigger>,
  IconButtonProps
>(({ className, ...props }, forwardedRef) => (
  <DropdownMenu.Trigger ref={forwardedRef} asChild>
    <IconBtn {...props} />
  </DropdownMenu.Trigger>
));

export const Content = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Content>,
  DropdownMenu.DropdownMenuContentProps
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
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        ref={forwardedRef}
        className={cn(className, 'MenuContent')}
        side={side}
        sideOffset={sideOffset}
        align={align}
        onCloseAutoFocus={onCloseAutoFocus}
        {...props}
      />
    </DropdownMenu.Portal>
  )
);

export const Group = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Group>,
  DropdownMenu.MenuGroupProps
>(({ className, ...props }, forwardedRef) => (
  <DropdownMenu.Group
    className={cn(className, 'MenuGroup')}
    ref={forwardedRef}
    {...props}
  />
));

export interface MenuItemProps extends DropdownMenu.MenuItemProps {
  type?: 'danger' | 'default';
}

export const Item = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Item>,
  MenuItemProps
>(({ className, type, ...props }, forwardedRef) => (
  <DropdownMenu.Item
    ref={forwardedRef}
    className={cn(className, 'MenuItem', { danger: type === 'danger' })}
    {...props}
  />
));

export const Label = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Label>,
  DropdownMenu.MenuLabelProps
>(({ className, ...props }, forwardedRef) => (
  <DropdownMenu.Label
    className={cn(className, 'MenuLabel')}
    ref={forwardedRef}
    {...props}
  />
));

export const Separator = React.forwardRef<
  React.ElementRef<typeof DropdownMenu.Separator>,
  DropdownMenu.MenuSeparatorProps
>(({ className, ...props }, forwardedRef) => (
  <DropdownMenu.Separator
    className={cn(className, 'MenuSeparator')}
    ref={forwardedRef}
    {...props}
  />
));
