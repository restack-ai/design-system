import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface ProgressBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Current position between 0 and `max`. */
  value: number;
  /** @default 100 */
  max?: number;
  /** Text above the track. */
  label?: ReactNode;
  /** Prints the percentage beside the label. @default false */
  showValue?: boolean;
  /** @default 'brand' */
  tone?: 'brand' | 'success' | 'warning' | 'danger';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Determinate progress or share-of-total indicator.
 *
 * @category data
 */
export function ProgressBar({
  value,
  max = 100,
  label,
  showValue = false,
  tone = 'brand',
  size = 'md',
  className,
  ...rest
}: ProgressBarProps) {
  const safeMax = max > 0 ? max : 100;
  const clamped = Math.min(Math.max(value, 0), safeMax);
  const pct = (clamped / safeMax) * 100;

  return (
    <div className={cx('restack-progress', `restack-progress--${size}`, className)} {...rest}>
      {label || showValue ? (
        <div className="restack-progress__header">
          {label ? <span className="restack-progress__label">{label}</span> : null}
          {showValue ? <span className="restack-progress__value">{Math.round(pct)}%</span> : null}
        </div>
      ) : null}
      <div
        className="restack-progress__track"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={safeMax}
      >
        <div
          className={cx('restack-progress__fill', `restack-progress__fill--${tone}`)}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
