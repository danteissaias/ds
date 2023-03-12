import cn from 'clsx';
import * as React from 'react';

import { Spinner } from '@/components';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  loading?: boolean;
  size?: '1' | '2';
  color?: 'gray' | 'red' | 'green';
  variant?: 'default' | 'ghost';
  type?: 'default' | 'success' | 'danger';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = '2',
      color = 'gray',
      variant,
      type,
      loading,
      disabled,
      className,
      children,
      ...props
    },
    forwardedRef
  ) => (
    <button
      ref={forwardedRef}
      disabled={loading || disabled}
      className={cn(className, 'reset-button', 'Button', {
        'ghost': variant === 'ghost',
        'danger': type === 'danger',
        'success': type == 'success',
        'size-1': size === '1',
        'size-2': size === '2',
        // 'gray': color === 'gray',
        // 'red': color === 'red',
        // 'green': color === 'green',
      })}
      {...props}
    >
      {loading && <Spinner />}
      {children}
    </button>
  )
);

export interface IconButtonProps extends ButtonProps {}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <Button ref={forwardedRef} className={cn(className, 'icon')} {...props}>
      {props.loading ? null : children}
    </Button>
  )
);
