import type { InputHTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /** @default 'md' */
  size?: InputSize;
  /** Renders the invalid state. @default false */
  invalid?: boolean;
  /** Static content shown inside the leading edge of the control. */
  prefix?: ReactNode;
  /** Static content shown inside the trailing edge of the control. */
  suffix?: ReactNode;
  /** Stretch to the container width. @default true */
  fullWidth?: boolean;
}

/**
 * Single-line text control. Pair with `Field` for its label and messaging.
 *
 * @category forms
 */
export function Input({
  size = 'md',
  invalid = false,
  prefix,
  suffix,
  fullWidth = true,
  className,
  disabled,
  ...rest
}: InputProps) {
  return (
    <div
      className={cx(
        'restack-input',
        `restack-input--${size}`,
        invalid && 'restack-input--invalid',
        disabled && 'restack-input--disabled',
        fullWidth && 'restack-input--full',
        className,
      )}
    >
      {prefix ? <span className="restack-input__affix">{prefix}</span> : null}
      <input
        className="restack-input__control"
        aria-invalid={invalid || undefined}
        disabled={disabled}
        {...rest}
      />
      {suffix ? <span className="restack-input__affix">{suffix}</span> : null}
    </div>
  );
}
