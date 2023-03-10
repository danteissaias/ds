import cn from 'clsx';
import * as React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';

export const Root = React.forwardRef<
  ScrollArea.ScrollAreaElement,
  ScrollArea.ScrollAreaProps
>(({ className, ...props }, forwardedRef) => (
  <ScrollArea.Root
    ref={forwardedRef}
    className={cn(className, 'ScrollAreaRoot')}
    {...props}
  />
));

export const Viewport = React.forwardRef<
  ScrollArea.ScrollAreaViewportElement,
  ScrollArea.ScrollAreaViewportProps
>(({ className, ...props }, forwardedRef) => (
  <ScrollArea.Viewport
    ref={forwardedRef}
    className={cn(className, 'ScrollAreaViewport')}
    {...props}
  />
));

export const Scrollbar = React.forwardRef<
  ScrollArea.ScrollAreaScrollbarElement,
  ScrollArea.ScrollAreaScrollbarProps
>(({ className, ...props }, forwardedRef) => (
  <ScrollArea.Scrollbar
    ref={forwardedRef}
    className={cn(className, 'ScrollAreaScrollbar')}
    {...props}
  />
));

export const Thumb = React.forwardRef<
  ScrollArea.ScrollAreaThumbElement,
  ScrollArea.ScrollAreaThumbProps
>(({ className, ...props }, forwardedRef) => (
  <ScrollArea.Thumb
    ref={forwardedRef}
    className={cn(className, 'ScrollAreaThumb')}
    {...props}
  />
));

export const Corner = React.forwardRef<
  React.ElementRef<typeof ScrollArea.Corner>,
  ScrollArea.ScrollAreaCornerProps
>(({ className, ...props }, forwardedRef) => (
  <ScrollArea.Corner
    ref={forwardedRef}
    className={cn(className, 'ScrollAreaCorner')}
    {...props}
  />
));
