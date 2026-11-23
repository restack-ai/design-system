import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  /** Visible label text. */
  label?: ReactNode;
  /** `htmlFor` target — the id of the control being labelled. */
  htmlFor?: string;
  /** Helper text shown beneath the control. */
  hint?: ReactNode;
  /** Error message; when set, the field renders in its invalid state. */
  error?: ReactNode;
  /** Appends the required marker to the label. @default false */
  required?: boolean;
  /** Lays the label beside the control instead of above it. @default false */
  inline?: boolean;
  /** The control this field wraps. */
  children?: ReactNode;
}

/**
 * Label, hint and error scaffolding around a form control.
 *
 * Wrap every `Input`, `Select`, `Textarea` and control group in a `Field` —
 * it owns the label association and the error presentation.
 *
 * @category forms
 */
export function Field({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  inline = false,
  className,
  children,
  ...rest
}: FieldProps) {
  return (
    <div
      className={cx('restack-field', inline && 'restack-field--inline', !!error && 'restack-field--invalid', className)}
      {...rest}
    >
      {label ? (
        <label className="restack-field__label" htmlFor={htmlFor}>
          {label}
          {required ? (
            <span className="restack-field__required" aria-hidden="true">
              *
            </span>
          ) : null}
        </label>
      ) : null}
      <div className="restack-field__control">
        {children}
        {error ? (
          <span className="restack-field__error" role="alert">
            {error}
          </span>
        ) : hint ? (
          <span className="restack-field__hint">{hint}</span>
        ) : null}
      </div>
    </div>
  );
}
