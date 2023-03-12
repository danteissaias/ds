import cn from 'clsx';
import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'default' | 'success' | 'danger' | 'info';
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ type, ...props }, forwardedRef) => (
    <div
      ref={forwardedRef}
      className={cn('Badge', {
        danger: type === 'danger',
        success: type === 'success',
        info: type === 'info',
      })}
      {...props}
    />
  )
);
