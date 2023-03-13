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
  Omit<ScrollArea.ScrollAreaScrollbarProps, 'children'>
>(({ className, ...props }, forwardedRef) => (
  <ScrollArea.Scrollbar
    ref={forwardedRef}
    className={cn(className, 'ScrollAreaTrack')}
    {...props}
  >
    <ScrollArea.Thumb className="ScrollAreaThumb" />
  </ScrollArea.Scrollbar>
));
