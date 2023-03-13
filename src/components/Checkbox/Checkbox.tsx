import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon, MinusIcon } from '@radix-ui/react-icons';
import cn from 'clsx';
import * as React from 'react';

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, forwardedRef) => (
  <div className={cn(className, 'CheckboxRoot')}>
    <CheckboxPrimitive.Root
      ref={forwardedRef}
      className={cn('CheckboxButton')}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="CheckboxIndicator">
        {props.checked === 'indeterminate' ? <MinusIcon /> : <CheckIcon />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  </div>
));
