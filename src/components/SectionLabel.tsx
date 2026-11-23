import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';
import { Dot } from './Dot';
import type { DotTone } from './Dot';

export interface SectionLabelProps extends HTMLAttributes<HTMLDivElement> {
  /** Colour of the leading dot. @default 'primary' */
  tone?: DotTone;
  /** `dot` leads with the signal dot; `none` is the bare label. @default 'dot' */
  marker?: 'dot' | 'none';
  /**
   * `sans` is the everyday label — sentence case, semibold. `mono` is the
   * uppercase, tracked-out eyebrow: use it once per page section, not on every
   * panel. @default 'sans'
   */
  face?: 'mono' | 'sans';
  /** Optional trailing detail — a count, a unit — pushed to the end of the row. */
  meta?: ReactNode;
  children?: ReactNode;
}

/**
 * The label one level below a heading, led by the signal dot.
 *
 * The default is a plain sentence-case label with an optional count or unit
 * at the far end. `face="mono"` turns it into the labs' eyebrow
 * ("● EXPLAIN, SHOW, THEN DO") — a device for opening a page section, kept
 * rare so the interface does not read like a terminal.
 *
 * @category typography
 */
export function SectionLabel({
  tone = 'primary',
  marker = 'dot',
  face = 'sans',
  meta,
  className,
  children,
  ...rest
}: SectionLabelProps) {
  return (
    <div className={cx('restack-sectionlabel', `restack-sectionlabel--${face}`, className)} {...rest}>
      {marker === 'dot' ? <Dot tone={tone} size="md" className="restack-sectionlabel__dot" /> : null}
      <span className="restack-sectionlabel__text">{children}</span>
      {meta ? <span className="restack-sectionlabel__meta">{meta}</span> : null}
    </div>
  );
}
