import type { TextareaHTMLAttributes } from 'react';
import { cx } from '../utils/cx';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Renders the invalid state. @default false */
  invalid?: boolean;
  /** Visible rows before scrolling. @default 4 */
  rows?: number;
  /** Allow the user to resize. @default 'vertical' */
  resize?: 'none' | 'vertical' | 'both';
}

/**
 * Multi-line text control.
 *
 * @category forms
 */
export function Textarea({
  invalid = false,
  rows = 4,
  resize = 'vertical',
  className,
  ...rest
}: TextareaProps) {
  return (
    <textarea
      className={cx('restack-textarea', `restack-textarea--resize-${resize}`, invalid && 'restack-textarea--invalid', className)}
      rows={rows}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );
}
