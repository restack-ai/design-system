import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface DescriptionItem {
  /** The term. */
  term: ReactNode;
  /** Its value. */
  description: ReactNode;
}

export interface DescriptionListProps extends Omit<HTMLAttributes<HTMLDListElement>, 'children'> {
  /** Term/description pairs, in display order. */
  items: DescriptionItem[];
  /** `rows` stacks term above value; `columns` sets them side by side. @default 'columns' */
  layout?: 'rows' | 'columns';
  /** Rules between entries. @default true */
  dividers?: boolean;
  /** Width of the term column in the `columns` layout. @default '12rem' */
  termWidth?: string;
}

/**
 * Key/value summary — record details, specifications, metadata.
 *
 * @category data
 */
export function DescriptionList({
  items,
  layout = 'columns',
  dividers = true,
  termWidth = '12rem',
  className,
  style,
  ...rest
}: DescriptionListProps) {
  return (
    <dl
      className={cx(
        'restack-dl',
        `restack-dl--${layout}`,
        dividers && 'restack-dl--dividers',
        className,
      )}
      style={{ ['--restack-dl-term-width' as string]: termWidth, ...style }}
      {...rest}
    >
      {items.map((item, i) => (
        <div className="restack-dl__row" key={i}>
          <dt className="restack-dl__term">{item.term}</dt>
          <dd className="restack-dl__description">{item.description}</dd>
        </div>
      ))}
    </dl>
  );
}
