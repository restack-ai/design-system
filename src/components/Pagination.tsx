import type { HTMLAttributes } from 'react';
import { cx } from '../utils/cx';

export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Current page, 1-based. */
  page: number;
  /** Total number of pages. */
  pageCount: number;
  /** Fires with the requested page number. */
  onChange?: (page: number) => void;
  /** Page buttons shown either side of the current page. @default 1 */
  siblings?: number;
  /** @default 'md' */
  size?: 'sm' | 'md';
  /** Prints "Page X of Y" beside the controls. @default false */
  showSummary?: boolean;
  /** Accessible name for the nav landmark. @default 'Pagination' */
  label?: string;
}

/** Builds the visible page list, inserting `null` where pages are elided. */
function pageWindow(page: number, pageCount: number, siblings: number): (number | null)[] {
  const out: (number | null)[] = [];
  const first = 1;
  const last = pageCount;
  const from = Math.max(first + 1, page - siblings);
  const to = Math.min(last - 1, page + siblings);

  out.push(first);
  if (from > first + 1) out.push(null);
  for (let p = from; p <= to; p++) out.push(p);
  if (to < last - 1) out.push(null);
  if (last > first) out.push(last);
  return out;
}

/**
 * Page navigation for a paged list or table.
 *
 * @category navigation
 */
export function Pagination({
  page,
  pageCount,
  onChange,
  siblings = 1,
  size = 'md',
  showSummary = false,
  label = 'Pagination',
  className,
  ...rest
}: PaginationProps) {
  const total = Math.max(pageCount, 1);
  const current = Math.min(Math.max(page, 1), total);
  const go = (p: number) => {
    if (p >= 1 && p <= total && p !== current) onChange?.(p);
  };

  return (
    <nav
      className={cx('restack-pagination', `restack-pagination--${size}`, className)}
      aria-label={label}
      {...rest}
    >
      <button
        type="button"
        className="restack-pagination__step"
        onClick={() => go(current - 1)}
        disabled={current <= 1}
        aria-label="Previous page"
      >
        <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <path d="M10 3.5 5.5 8l4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {pageWindow(current, total, siblings).map((p, i) =>
        p === null ? (
          <span className="restack-pagination__gap" key={`gap-${i}`} aria-hidden="true">
            …
          </span>
        ) : (
          <button
            type="button"
            key={p}
            className={cx('restack-pagination__page', p === current && 'restack-pagination__page--active')}
            aria-current={p === current ? 'page' : undefined}
            aria-label={`Page ${p}`}
            onClick={() => go(p)}
          >
            {p}
          </button>
        ),
      )}

      <button
        type="button"
        className="restack-pagination__step"
        onClick={() => go(current + 1)}
        disabled={current >= total}
        aria-label="Next page"
      >
        <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <path d="M6 3.5 10.5 8 6 12.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {showSummary ? (
        <span className="restack-pagination__summary">
          Page {current} of {total}
        </span>
      ) : null}
    </nav>
  );
}
