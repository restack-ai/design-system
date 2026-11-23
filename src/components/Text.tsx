import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export type TextSize = 'lead' | 'body' | 'small' | 'caption' | 'micro';
export type TextTone =
  | 'default'
  | 'secondary'
  | 'muted'
  | 'brand'
  | 'inverse'
  | 'success'
  | 'warning'
  | 'danger';

export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
  /** @default 'body' */
  size?: TextSize;
  /** @default 'default' */
  tone?: TextTone;
  /** Semibold weight — the system's emphasis. @default false */
  bold?: boolean;
  /** Render as an inline `<span>` rather than a block `<p>`. @default false */
  inline?: boolean;
  /** Tabular figures — use for any column of numbers. @default false */
  numeric?: boolean;
  /**
   * IBM Plex Mono — for technical truth: a figure, a unit, an identifier, a
   * command, an address. Never for prose. @default false
   */
  mono?: boolean;
  children?: ReactNode;
}

/**
 * Body copy, captions and inline text runs.
 *
 * @category typography
 */
export function Text({
  size = 'body',
  tone = 'default',
  bold = false,
  inline = false,
  numeric = false,
  mono = false,
  className,
  children,
  ...rest
}: TextProps) {
  const Tag = inline ? 'span' : 'p';
  return (
    <Tag
      className={cx(
        'restack-text',
        `restack-text--${size}`,
        `restack-text--${tone}`,
        bold && 'restack-text--bold',
        numeric && 'restack-text--numeric',
        mono && 'restack-text--mono',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
