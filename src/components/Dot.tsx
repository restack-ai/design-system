import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export type DotTone = 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'neutral' | 'muted';
export type DotSize = 'xs' | 'sm' | 'md';

export interface DotProps extends HTMLAttributes<HTMLSpanElement> {
  /** @default 'primary' */
  tone?: DotTone;
  /** Sized in em, so the dot follows the text beside it. @default 'sm' */
  size?: DotSize;
  /** A slow pulse, for something that is running right now. Stops under reduced motion. @default false */
  live?: boolean;
  /**
   * The state the dot stands for. When given, it is set beside the dot in the
   * small secondary voice the labs use for status lines — "● Runs in your
   * browser". Without it the dot is decorative and hidden from assistive tech,
   * so never let a bare dot be the only carrier of a state.
   */
  children?: ReactNode;
}

/**
 * The signal dot — the system's one geometric device.
 *
 * The labs mark everything that is live, selected or ready with a small lime
 * dot: after a site title, before an eyebrow, beside a selected nav item, at
 * the head of a status line. Colour says the kind of state; the words beside
 * it say which state.
 *
 * @category brand
 */
export function Dot({ tone = 'primary', size = 'sm', live = false, className, children, ...rest }: DotProps) {
  const dot = (
    <span
      className={cx('restack-dot__mark', `restack-dot__mark--${size}`, live && 'restack-dot__mark--live')}
      aria-hidden="true"
    />
  );

  return (
    <span
      className={cx('restack-dot', `restack-dot--${tone}`, children ? 'restack-dot--labelled' : null, className)}
      {...rest}
    >
      {dot}
      {children ? <span className="restack-dot__label">{children}</span> : null}
    </span>
  );
}
