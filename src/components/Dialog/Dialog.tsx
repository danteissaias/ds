import * as Dialog from '@radix-ui/react-dialog';
import cn from 'clsx';
import * as React from 'react';

export const Root = Dialog.Root;
export const Trigger = Dialog.Trigger;
export const Portal = Dialog.Portal;

export const Content = React.forwardRef<
  React.ElementRef<typeof Dialog.Content>,
  Dialog.DialogContentProps
>(
  (
    { className, onCloseAutoFocus = (e) => e.preventDefault(), ...props },
    forwardedRef
  ) => (
    <Dialog.Content
      ref={forwardedRef}
      className={cn(className, 'DialogContent')}
      onCloseAutoFocus={onCloseAutoFocus}
      {...props}
    />
  )
);

export const Overlay = React.forwardRef<
  React.ElementRef<typeof Dialog.Overlay>,
  Dialog.DialogOverlayProps
>(({ className, ...props }, forwardedRef) => (
  <Dialog.Overlay
    className={cn(className, 'DialogOverlay')}
    ref={forwardedRef}
    {...props}
  />
));
export {};
