import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export type StackDirection = 'vertical' | 'horizontal';
export type StackGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /** @default 'vertical' */
  direction?: StackDirection;
  /** Spacing between children, from the 4px step scale. @default 'md' */
  gap?: StackGap;
  /** Cross-axis alignment. @default 'stretch' */
  align?: StackAlign;
  /** Main-axis distribution. @default 'start' */
  justify?: StackJustify;
  /** Allow children to wrap onto new lines. @default false */
  wrap?: boolean;
  children?: ReactNode;
}

/**
 * One-dimensional flex layout with spacing drawn from the token scale.
 *
 * @category layout
 */
export function Stack({
  direction = 'vertical',
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  className,
  children,
  ...rest
}: StackProps) {
  return (
    <div
      className={cx(
        'restack-stack',
        `restack-stack--${direction}`,
        `restack-stack--gap-${gap}`,
        `restack-stack--align-${align}`,
        `restack-stack--justify-${justify}`,
        wrap && 'restack-stack--wrap',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
