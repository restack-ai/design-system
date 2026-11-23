import type { ReactNode, TableHTMLAttributes } from 'react';
import { cx } from '../utils/cx';

export interface TableColumn<Row> {
  /** Stable key; also the row property read when no `render` is given. */
  key: string;
  /** Header cell content. */
  header: ReactNode;
  /** Cell content for a row. Defaults to `row[key]`. */
  render?: (row: Row, index: number) => ReactNode;
  /** @default 'left' — numeric columns should use 'right'. */
  align?: 'left' | 'center' | 'right';
  /** Renders the column's cells in the tabular-figure style. @default false */
  numeric?: boolean;
  /** Fixed column width, e.g. `'12rem'`. */
  width?: string;
}

export interface TableProps<Row> extends Omit<TableHTMLAttributes<HTMLTableElement>, 'children'> {
  /** Column definitions, in display order. */
  columns: TableColumn<Row>[];
  /** Row data. */
  rows: Row[];
  /** Per-row React key. Defaults to the row index. */
  rowKey?: (row: Row, index: number) => string | number;
  /** Caption above the table. */
  caption?: ReactNode;
  /** @default 'md' */
  density?: 'compact' | 'md';
  /** Tints alternate rows. @default false */
  striped?: boolean;
  /** Highlights rows on hover. @default false */
  hoverable?: boolean;
  /** Keeps the header visible while the container scrolls. @default false */
  stickyHeader?: boolean;
  /** Shown in place of the body when `rows` is empty. */
  emptyState?: ReactNode;
}

/**
 * Data table with a brand header band, column alignment and density control.
 *
 * @category data
 */
export function Table<Row extends Record<string, unknown>>({
  columns,
  rows,
  rowKey,
  caption,
  density = 'md',
  striped = false,
  hoverable = false,
  stickyHeader = false,
  emptyState,
  className,
  ...rest
}: TableProps<Row>) {
  return (
    <div className={cx('restack-table', className)}>
      {caption ? <div className="restack-table__caption">{caption}</div> : null}
      <div className="restack-table__scroll">
        <table
          className={cx(
            'restack-table__el',
            `restack-table__el--${density}`,
            striped && 'restack-table__el--striped',
            hoverable && 'restack-table__el--hoverable',
            stickyHeader && 'restack-table__el--sticky',
          )}
          {...rest}
        >
          <thead className="restack-table__head">
            <tr>
              {columns.map((c) => (
                <th
                  key={c.key}
                  scope="col"
                  className={cx(
                    'restack-table__th',
                    `restack-table__cell--${c.align ?? (c.numeric ? 'right' : 'left')}`,
                  )}
                  style={c.width ? { width: c.width } : undefined}
                >
                  {c.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && emptyState ? (
              <tr>
                <td className="restack-table__empty" colSpan={columns.length}>
                  {emptyState}
                </td>
              </tr>
            ) : (
              rows.map((row, i) => (
                <tr key={rowKey ? rowKey(row, i) : i} className="restack-table__tr">
                  {columns.map((c) => (
                    <td
                      key={c.key}
                      className={cx(
                        'restack-table__td',
                        `restack-table__cell--${c.align ?? (c.numeric ? 'right' : 'left')}`,
                        c.numeric && 'restack-table__cell--numeric',
                      )}
                    >
                      {c.render ? c.render(row, i) : (row[c.key] as ReactNode)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
