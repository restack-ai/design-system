import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';
import type { ButtonSize, ButtonVariant } from './Button';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible name — required, since the control has no visible label. */
  label: string;
  /** The icon element to render. */
  icon: ReactNode;
  /** @default 'ghost' */
  variant?: ButtonVariant;
  /** @default 'md' */
  size?: ButtonSize;
  /** Square rather than pill-round. @default true */
  square?: boolean;
}

/**
 * Square icon-only control. `label` supplies the accessible name.
 *
 * @category actions
 */
export function IconButton({
  label,
  icon,
  variant = 'ghost',
  size = 'md',
  square = true,
  className,
  type = 'button',
  ...rest
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={cx(
        'restack-iconbutton',
        `restack-button--${variant}`,
        `restack-iconbutton--${size}`,
        !square && 'restack-iconbutton--round',
        className,
      )}
      aria-label={label}
      title={label}
      {...rest}
    >
      <span className="restack-iconbutton__icon">{icon}</span>
    </button>
  );
}
