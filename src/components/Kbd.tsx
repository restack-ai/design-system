import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface KbdProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

/**
 * A key or key chord — "Space", "←", "Ctrl K" — set in mono inside a small keycap.
 *
 * @category data
 */
export function Kbd({ className, children, ...rest }: KbdProps) {
  return (
    <kbd className={cx('restack-kbd', className)} {...rest}>
      {children}
    </kbd>
  );
}
