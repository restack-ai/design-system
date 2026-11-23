import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /** @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical';
  /** Line weight and colour. @default 'subtle' */
  tone?: 'subtle' | 'default' | 'strong' | 'brand';
  /** Vertical rhythm around a horizontal rule. @default 'md' */
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  /** Optional inline label centred on the rule. */
  children?: ReactNode;
}

/**
 * Horizontal or vertical rule, optionally carrying a centred label.
 *
 * @category layout
 */
export function Divider({
  orientation = 'horizontal',
  tone = 'subtle',
  spacing = 'md',
  className,
  children,
  ...rest
}: DividerProps) {
  const hasLabel = orientation === 'horizontal' && children != null;
  return (
    <div
      className={cx(
        'restack-divider',
        `restack-divider--${orientation}`,
        `restack-divider--${tone}`,
        `restack-divider--space-${spacing}`,
        hasLabel && 'restack-divider--labelled',
        className,
      )}
      role="separator"
      aria-orientation={orientation}
      {...rest}
    >
      {hasLabel ? <span className="restack-divider__label">{children}</span> : null}
    </div>
  );
}
