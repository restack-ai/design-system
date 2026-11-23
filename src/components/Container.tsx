import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export type ContainerWidth = 'narrow' | 'default' | 'wide' | 'full';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Maximum content measure. @default 'default' */
  width?: ContainerWidth;
  /** Removes the horizontal gutter. @default false */
  flush?: boolean;
  children?: ReactNode;
}

/**
 * Centred page measure with the standard horizontal gutter.
 *
 * @category layout
 */
export function Container({
  width = 'default',
  flush = false,
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cx('restack-container', `restack-container--${width}`, flush && 'restack-container--flush', className)}
      {...rest}
    >
      {children}
    </div>
  );
}
