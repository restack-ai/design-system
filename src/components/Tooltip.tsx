import { useId } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface TooltipProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'content'> {
  /** The hint. Keep it to a phrase; anything longer belongs in the page. */
  content: ReactNode;
  /** @default 'top' */
  side?: 'top' | 'bottom';
  /** The element being described — normally an `IconButton` or a term. */
  children: ReactNode;
}

/**
 * A short hint shown on hover and on keyboard focus.
 *
 * CSS only: the bubble is always in the DOM and linked with
 * `aria-describedby`, so a screen reader announces it with the control. It
 * supplements a label — it never replaces one.
 *
 * @category feedback
 */
export function Tooltip({ content, side = 'top', className, children, ...rest }: TooltipProps) {
  const id = useId();
  return (
    <span className={cx('restack-tooltip', `restack-tooltip--${side}`, className)} aria-describedby={id} {...rest}>
      {children}
      <span className="restack-tooltip__bubble" role="tooltip" id={id}>
        {content}
      </span>
    </span>
  );
}
