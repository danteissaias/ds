import { Root, CheckboxProps, Indicator } from '@radix-ui/react-checkbox';
import cn from 'clsx';
import * as React from 'react';

import { Icons } from '@/index';

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof Root>,
  CheckboxProps
>(({ className, ...props }, forwardedRef) => (
  <div className={cn(className, 'CheckboxRoot')}>
    <Root ref={forwardedRef} className="CheckboxButton" {...props}>
      <Indicator className="CheckboxIndicator">
        <Icons.CheckIcon height={16} width={16} />
      </Indicator>
    </Root>
  </div>
));
