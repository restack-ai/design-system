import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight in the action hierarchy. @default 'primary' */
  variant?: ButtonVariant;
  /** @default 'md' */
  size?: ButtonSize;
  /** Replaces the leading icon with a spinner and blocks interaction. @default false */
  loading?: boolean;
  /** Stretch to the width of the container. @default false */
  fullWidth?: boolean;
  /** Icon element placed before the label. */
  iconLeft?: ReactNode;
  /** Icon element placed after the label. */
  iconRight?: ReactNode;
  children?: ReactNode;
}

/**
 * Primary interactive control.
 *
 * `primary` is the filled brand-blue action — one per view. `secondary` is the
 * outlined counterpart, `tertiary` and `ghost` recede further, and `danger`
 * marks destructive actions.
 *
 * @category actions
 */
export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  disabled,
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(
        'restack-button',
        `restack-button--${variant}`,
        `restack-button--${size}`,
        fullWidth && 'restack-button--full',
        loading && 'restack-button--loading',
        className,
      )}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? (
        <span className="restack-button__spinner" aria-hidden="true" />
      ) : (
        iconLeft && <span className="restack-button__icon">{iconLeft}</span>
      )}
      <span className="restack-button__label">{children}</span>
      {iconRight && !loading ? <span className="restack-button__icon">{iconRight}</span> : null}
    </button>
  );
}
