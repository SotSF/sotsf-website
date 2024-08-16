import * as React from 'react';

import { cn } from '@/lib/utils';

type SkeletonProps = React.ComponentPropsWithoutRef<'div'>;

export default function Skeleton({ className, ...rest }: SkeletonProps) {
  return (
    <div
      className={cn('animate-shimmer bg-[#222222]', className)}
      style={{
        backgroundImage:
          'linear-gradient(to right, #222222 0%, #333333 20%, #222222 40%, #222222 100%)',
        backgroundSize: '700px 100%',
        backgroundRepeat: 'no-repeat',
      }}
      {...rest}
    />
  );
}
