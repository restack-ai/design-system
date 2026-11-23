import type { InputHTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Text set beside the track. */
  label?: ReactNode;
  /** Secondary line beneath the label. */
  description?: ReactNode;
  /** @default 'md' */
  size?: 'sm' | 'md';
  /** Places the label before the track. @default false */
  labelFirst?: boolean;
}

/**
 * Immediate on/off toggle — use where the change applies without a submit.
 *
 * @category forms
 */
export function Switch({
  label,
  description,
  size = 'md',
  labelFirst = false,
  className,
  style,
  disabled,
  ...rest
}: SwitchProps) {
  const text =
    label || description ? (
      <span className="restack-switch__text">
        {label ? <span className="restack-switch__label">{label}</span> : null}
        {description ? <span className="restack-switch__description">{description}</span> : null}
      </span>
    ) : null;

  return (
    <label
      className={cx('restack-switch', `restack-switch--${size}`, disabled && 'restack-switch--disabled', className)}
      style={style}
    >
      {labelFirst ? text : null}
      <input type="checkbox" role="switch" className="restack-switch__input" disabled={disabled} {...rest} />
      <span className="restack-switch__track" aria-hidden="true">
        <span className="restack-switch__thumb" />
      </span>
      {labelFirst ? null : text}
    </label>
  );
}
