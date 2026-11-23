import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export type AlertTone = 'info' | 'success' | 'warning' | 'danger' | 'brand';

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** @default 'info' */
  tone?: AlertTone;
  /** Bold lead line. */
  title?: ReactNode;
  /** Replaces the default tone glyph. Pass `null` to drop it. */
  icon?: ReactNode;
  /** Handler for the dismiss control. Omit it and no control is rendered. */
  onDismiss?: () => void;
  /** Accessible name for the dismiss control. @default 'Dismiss' */
  dismissLabel?: string;
  /** Controls or links aligned below the message. */
  actions?: ReactNode;
  children?: ReactNode;
}

/* Line glyphs at the labs' icon weight — 1.5px strokes, round caps, no fills. */
const line = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

const GLYPH: Record<AlertTone, ReactNode> = {
  info: (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <circle cx="8" cy="8" r="6.25" {...line} />
      <path d="M8 7.25v3.75M8 5h.01" {...line} />
    </svg>
  ),
  brand: (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <circle cx="8" cy="8" r="6.25" {...line} />
      <circle cx="8" cy="8" r="2.25" fill="currentColor" />
    </svg>
  ),
  success: (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <circle cx="8" cy="8" r="6.25" {...line} />
      <path d="M5.4 8.2 7.2 10l3.4-3.8" {...line} />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M7.1 2.6a1 1 0 0 1 1.8 0l5.3 9.7a1 1 0 0 1-.9 1.5H2.7a1 1 0 0 1-.9-1.5Z" {...line} />
      <path d="M8 6.5v2.75M8 11.4h.01" {...line} />
    </svg>
  ),
  danger: (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <circle cx="8" cy="8" r="6.25" {...line} />
      <path d="m5.9 5.9 4.2 4.2M10.1 5.9l-4.2 4.2" {...line} />
    </svg>
  ),
};

/**
 * Inline message about the state of the page or the outcome of an action.
 *
 * @category feedback
 */
export function Alert({
  tone = 'info',
  title,
  icon,
  onDismiss,
  dismissLabel = 'Dismiss',
  actions,
  className,
  children,
  ...rest
}: AlertProps) {
  const glyph = icon === undefined ? GLYPH[tone] : icon;
  return (
    <div
      className={cx('restack-alert', `restack-alert--${tone}`, className)}
      role={tone === 'danger' || tone === 'warning' ? 'alert' : 'status'}
      {...rest}
    >
      {glyph ? <span className="restack-alert__icon">{glyph}</span> : null}
      <div className="restack-alert__content">
        {title ? <div className="restack-alert__title">{title}</div> : null}
        {children ? <div className="restack-alert__message">{children}</div> : null}
        {actions ? <div className="restack-alert__actions">{actions}</div> : null}
      </div>
      {onDismiss ? (
        <button type="button" className="restack-alert__dismiss" onClick={onDismiss} aria-label={dismissLabel}>
          <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M4 4 12 12M12 4 4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
        </button>
      ) : null}
    </div>
  );
}
