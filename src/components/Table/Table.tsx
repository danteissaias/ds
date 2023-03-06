import cn from 'clsx';
import * as React from 'react';

export const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, forwardedRef) => (
  <div ref={forwardedRef} className={cn(className, 'TableRoot')} {...props} />
));

export const Table = React.forwardRef<
  HTMLTableElement,
  React.TableHTMLAttributes<HTMLTableElement>
>(({ className, ...props }, forwardedRef) => (
  <table
    ref={forwardedRef}
    className={cn(className, 'TableRootTable')}
    {...props}
  />
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

export const Cell = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, forwardedRef) => (
  <td ref={forwardedRef} className={cn(className, 'TableCell')} {...props} />
));

export const Body = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, forwardedRef) => (
  <tbody ref={forwardedRef} className={cn(className, 'TableBody')} {...props} />
));
