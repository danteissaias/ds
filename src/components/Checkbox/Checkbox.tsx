import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import cn from 'clsx';
import * as React from 'react';

import { Icons } from '@/index';

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  indeterminate?: boolean;
}

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, indeterminate, ...props }, forwardedRef) => (
  <div className={cn(className, 'CheckboxRoot')}>
    <CheckboxPrimitive.Root
      ref={forwardedRef}
      className={cn('CheckboxButton', { indeterminate })}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="CheckboxIndicator">
        {indeterminate ? <Icons.Minus /> : <Icons.Check />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  </div>
));
