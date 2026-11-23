import type { ReactNode, SelectHTMLAttributes } from 'react';
import { cx } from '../utils/cx';

export interface SelectOption {
  /** Submitted value. */
  value: string;
  /** Visible option text. */
  label: string;
  /** @default false */
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'children'> {
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Renders the invalid state. @default false */
  invalid?: boolean;
  /** Options to render. Ignored when `children` is supplied. */
  options?: SelectOption[];
  /** Non-selectable leading option used as an empty-state prompt. */
  placeholder?: string;
  /** Stretch to the container width. @default true */
  fullWidth?: boolean;
  /** Raw `<option>` / `<optgroup>` children, as an alternative to `options`. */
  children?: ReactNode;
}

/**
 * Native dropdown control with a thin line chevron.
 *
 * @category forms
 */
export function Select({
  size = 'md',
  invalid = false,
  options,
  placeholder,
  fullWidth = true,
  className,
  disabled,
  children,
  defaultValue,
  value,
  ...rest
}: SelectProps) {
  const uncontrolledDefault =
    value === undefined && defaultValue === undefined && placeholder ? '' : defaultValue;
  return (
    <div
      className={cx(
        'restack-select',
        `restack-select--${size}`,
        invalid && 'restack-select--invalid',
        disabled && 'restack-select--disabled',
        fullWidth && 'restack-select--full',
        className,
      )}
    >
      <select
        className="restack-select__control"
        aria-invalid={invalid || undefined}
        disabled={disabled}
        value={value}
        defaultValue={uncontrolledDefault}
        {...rest}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {children ??
          options?.map((o) => (
            <option key={o.value} value={o.value} disabled={o.disabled}>
              {o.label}
            </option>
          ))}
      </select>
      <svg className="restack-select__arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M6 9.5 12 15.5 18 9.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
