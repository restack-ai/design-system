import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export type StatTrend = 'up' | 'down' | 'flat';

export interface StatCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** What the figure measures. */
  label: ReactNode;
  /** The figure itself. */
  value: ReactNode;
  /** Unit or scale set beside the value, e.g. `%` or `bn`. */
  unit?: ReactNode;
  /** Change indicator, e.g. `+12.4%`. */
  delta?: ReactNode;
  /** Direction the delta points. Drives the indicator colour and arrow. */
  trend?: StatTrend;
  /** Note under the figure, e.g. the comparison period. */
  caption?: ReactNode;
  /** @default 'default' */
  tone?: 'default' | 'brand' | 'inverse';
  /** Lays label, value and delta on one row. @default false */
  compact?: boolean;
}

const ARROW: Record<StatTrend, string> = {
  up: 'M8 3 13 10 3 10 Z',
  down: 'M8 13 3 6 13 6 Z',
  flat: 'M3 7 13 7 13 9 3 9 Z',
};

/**
 * Single headline figure with its label, change indicator and context line.
 *
 * @category data
 */
export function StatCard({
  label,
  value,
  unit,
  delta,
  trend,
  caption,
  tone = 'default',
  compact = false,
  className,
  ...rest
}: StatCardProps) {
  return (
    <div
      className={cx(
        'restack-statcard',
        `restack-statcard--${tone}`,
        compact && 'restack-statcard--compact',
        className,
      )}
      {...rest}
    >
      <div className="restack-statcard__label">{label}</div>
      <div className="restack-statcard__figure">
        {/* value and unit share one wrapper so they can never be split across lines —
         * "1,284" above a stray "k" reads as 1,284, not 1,284k. */}
        <span className="restack-statcard__quantity">
          <span className="restack-statcard__value">{value}</span>
          {unit ? <span className="restack-statcard__unit">{unit}</span> : null}
        </span>
        {delta ? (
          <span className={cx('restack-statcard__delta', trend && `restack-statcard__delta--${trend}`)}>
            {trend ? (
              <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path d={ARROW[trend]} fill="currentColor" />
              </svg>
            ) : null}
            {delta}
          </span>
        ) : null}
      </div>
      {caption ? <div className="restack-statcard__caption">{caption}</div> : null}
    </div>
  );
}
