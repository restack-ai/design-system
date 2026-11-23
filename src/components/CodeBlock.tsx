import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface CodeBlockProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Shown in the header — a file path, a command name, a run id. */
  title?: ReactNode;
  /** Trailing header content: a language tag, a copy button, a source link. */
  actions?: ReactNode;
  /** Wraps long lines instead of scrolling them. @default false */
  wrap?: boolean;
  /**
   * The code. Plain text keeps its whitespace; wrap a span in `<b>` for the
   * lime emphasis (a command name) or `<i>` for the muted voice (a comment).
   */
  children?: ReactNode;
}

/**
 * A recorded excerpt, a command or a config — technical truth, verbatim.
 *
 * Sunken ground, mono, a hairline header naming where it came from. It does
 * no syntax highlighting: `<b>` and `<i>` give the two accents the labs use.
 *
 * @category data
 */
export function CodeBlock({ title, actions, wrap = false, className, children, ...rest }: CodeBlockProps) {
  return (
    <div className={cx('restack-codeblock', wrap && 'restack-codeblock--wrap', className)} {...rest}>
      {title || actions ? (
        <div className="restack-codeblock__head">
          {title ? <span className="restack-codeblock__title">{title}</span> : null}
          {actions ? <span className="restack-codeblock__actions">{actions}</span> : null}
        </div>
      ) : null}
      <pre className="restack-codeblock__pre" tabIndex={0}>
        <code>{children}</code>
      </pre>
    </div>
  );
}
