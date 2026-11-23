import type { InputHTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Text set beside the dial. */
  label?: ReactNode;
  /** Secondary line beneath the label. */
  description?: ReactNode;
  /** Renders the invalid state. @default false */
  invalid?: boolean;
}

/**
 * Single choice within a group.
 *
 * Give every `Radio` in a group the same `name`, and wrap the group in a
 * `Field` so the set carries one shared label.
 *
 * @category forms
 */
export function Radio({
  label,
  description,
  invalid = false,
  className,
  style,
  disabled,
  ...rest
}: RadioProps) {
  return (
    <label
      className={cx('restack-radio', disabled && 'restack-radio--disabled', invalid && 'restack-radio--invalid', className)}
      style={style}
    >
      <input
        type="radio"
        className="restack-radio__input"
        disabled={disabled}
        aria-invalid={invalid || undefined}
        {...rest}
      />
      <span className="restack-radio__dial" aria-hidden="true" />
      {label || description ? (
        <span className="restack-radio__text">
          {label ? <span className="restack-radio__label">{label}</span> : null}
          {description ? <span className="restack-radio__description">{description}</span> : null}
        </span>
      ) : null}
    </label>
  );
}
