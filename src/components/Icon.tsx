import type { SVGAttributes } from 'react';
import { cx } from '../utils/cx';
import { ICON_PATHS } from '../icons/paths';
import type { IconName } from '../icons/paths';

export type { IconName };

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, 'name'> {
  /** Which glyph. The set is a curated slice of Lucide; `npm run icons` regenerates it. */
  name: IconName;
  /** Edge length — a CSS length, or a number of pixels. Defaults to 1.15em, so it follows the text. */
  size?: number | string;
  /** Accessible name. Omit for a decorative icon beside a label; it is then hidden from assistive tech. */
  label?: string;
}

/**
 * The system's icon: a Lucide line glyph at 1.75px, round caps, no fill.
 *
 * Lucide is what the labs use, so this is its geometry, copied in at author
 * time — the library still has no runtime dependency. Colour is `currentColor`.
 *
 * @category brand
 */
export function Icon({ name, size, label, className, style, ...rest }: IconProps) {
  const dim = size === undefined ? undefined : typeof size === 'number' ? `${size}px` : size;
  return (
    <svg
      className={cx('restack-icon', className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={dim ? { width: dim, height: dim, ...style } : style}
      dangerouslySetInnerHTML={{ __html: ICON_PATHS[name] }}
      {...rest}
    />
  );
}
