import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export type WordmarkSize = 'sm' | 'md' | 'lg' | 'xl';

export interface WordmarkProps extends HTMLAttributes<HTMLSpanElement> {
  /** The lead words, set in the strong text colour — "NCCL", "RDMA Fabric". */
  children?: ReactNode;
  /** The trailing word, set in lime — "Lab", "Console". */
  accent?: ReactNode;
  /** The signal dot, raised after the last word. @default true */
  dot?: boolean;
  /** @default 'md' */
  size?: WordmarkSize;
}

/**
 * A product name written the way the labs write theirs.
 *
 * "NCCL **Lab**•", "Parallel **Lab**•", "RDMA Fabric **Lab**•": semibold
 * DM Sans, the last word in lime, and the signal dot raised after it. Use it
 * for a product or tool name in a masthead, a sidebar head or a hero — the
 * company signature is `BrandLogo`.
 *
 * @category brand
 */
export function Wordmark({ accent, dot = true, size = 'md', className, children, ...rest }: WordmarkProps) {
  return (
    <span className={cx('restack-wordmark', `restack-wordmark--${size}`, className)} translate="no" {...rest}>
      <span className="restack-wordmark__text">
        {children}
        {children && accent ? ' ' : null}
        {accent ? <span className="restack-wordmark__accent">{accent}</span> : null}
      </span>
      {dot ? <span className="restack-wordmark__dot" aria-hidden="true" /> : null}
    </span>
  );
}
