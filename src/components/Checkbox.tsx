import type { InputHTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Text set beside the box. */
  label?: ReactNode;
  /** Secondary line beneath the label. */
  description?: ReactNode;
  /** Renders the mixed state. Visual only — set `checked` separately. @default false */
  indeterminate?: boolean;
  /** Renders the invalid state. @default false */
  invalid?: boolean;
}

/**
 * Boolean checkbox with an optional label and description.
 *
 * @category forms
 */
export function Checkbox({
  label,
  description,
  indeterminate = false,
  invalid = false,
  className,
  style,
  disabled,
  ...rest
}: CheckboxProps) {
  return (
    <label
      className={cx(
        'restack-checkbox',
        disabled && 'restack-checkbox--disabled',
        invalid && 'restack-checkbox--invalid',
        className,
      )}
      style={style}
    >
      <input
        type="checkbox"
        className="restack-checkbox__input"
        disabled={disabled}
        aria-invalid={invalid || undefined}
        aria-checked={indeterminate ? 'mixed' : undefined}
        {...rest}
      />
      <span className={cx('restack-checkbox__box', indeterminate && 'restack-checkbox__box--mixed')} aria-hidden="true">
        <svg viewBox="0 0 16 16" focusable="false">
          {indeterminate ? (
            <rect x="3" y="7" width="10" height="2" fill="currentColor" />
          ) : (
            <path
              d="M3 8.5 6.4 12 13 4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </span>
      {label || description ? (
        <span className="restack-checkbox__text">
          {label ? <span className="restack-checkbox__label">{label}</span> : null}
          {description ? <span className="restack-checkbox__description">{description}</span> : null}
        </span>
      ) : null}
    </label>
  );
}
