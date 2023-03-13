import cn from 'clsx';
import * as React from 'react';

import { ScrollArea } from '@/components';

export const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, forwardedRef) => (
  <div ref={forwardedRef} className={cn(className, 'TableRoot')} {...props}>
    <ScrollArea.Root>
      <ScrollArea.Viewport className="TableRootScroll">
        <table className="TableRootTable">{children}</table>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical" />
      <ScrollArea.Scrollbar orientation="horizontal" />
    </ScrollArea.Root>
  </div>
));

export const Head = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, forwardedRef) => (
  <thead ref={forwardedRef} className={cn(className, 'TableHead')} {...props} />
));

export const Row = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, forwardedRef) => (
  <tr ref={forwardedRef} className={cn(className, 'TableRow')} {...props} />
));

export interface TableCellProps
  extends React.ThHTMLAttributes<HTMLTableCellElement> {
  checkbox?: boolean;
}

export const Cell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, checkbox, ...props }, forwardedRef) => (
    <td
      ref={forwardedRef}
      className={cn(className, 'TableCell', { checkbox })}
      {...props}
    />
  )
);

export const Body = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, forwardedRef) => (
  <tbody ref={forwardedRef} className={cn(className, 'TableBody')} {...props} />
));

export { Auto } from './Auto';
