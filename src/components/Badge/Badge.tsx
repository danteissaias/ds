import cn from 'clsx';
import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'red' | 'green' | 'gray' | 'accent';
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ color = 'gray', ...props }, forwardedRef) => (
    <div
      ref={forwardedRef}
      className={cn('Badge', {
        gray: color === 'gray',
        red: color === 'red',
        green: color === 'green',
        accent: color === 'accent',
      })}
      {...props}
    />
  )
);
