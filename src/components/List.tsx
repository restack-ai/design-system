import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface ListProps extends Omit<HTMLAttributes<HTMLUListElement>, 'children'> {
  /** The entries. */
  items: ReactNode[];
  /**
   * Bullet style. `dot` is the lime signal dot; `arrow` is the "→" the labs use
   * for a sequence of operations; `dash` is the quiet aside. @default 'dot'
   */
  marker?: 'dot' | 'arrow' | 'dash' | 'number' | 'none';
  /** @default 'md' */
  spacing?: 'tight' | 'md' | 'loose';
  /** @default 'body' */
  size?: 'body' | 'small';
}

/**
 * Bulleted or numbered list.
 *
 * @category data
 */
export function List({ items, marker = 'dot', spacing = 'md', size = 'body', className, ...rest }: ListProps) {
  const ordered = marker === 'number';
  const content = items.map((item, i) => (
    <li className="restack-list__item" key={i}>
      {marker === 'dot' ? (
        <span className="restack-list__marker" aria-hidden="true">
          <span className="restack-list__dot" />
        </span>
      ) : marker === 'arrow' || marker === 'dash' ? (
        <span className="restack-list__marker" aria-hidden="true">
          {marker === 'arrow' ? '→' : '—'}
        </span>
      ) : null}
      <span className="restack-list__text">{item}</span>
    </li>
  ));

  const classes = cx(
    'restack-list',
    `restack-list--${marker}`,
    `restack-list--${spacing}`,
    `restack-list--${size}`,
    className,
  );

  if (ordered) {
    return (
      <ol className={classes} {...(rest as HTMLAttributes<HTMLOListElement>)}>
        {content}
      </ol>
    );
  }
  return (
    <ul className={classes} {...rest}>
      {content}
    </ul>
  );
}
