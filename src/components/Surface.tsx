import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export type SurfaceTone =
  | 'default'
  | 'sunken'
  | 'muted'
  | 'brand'
  | 'brand-subtle'
  | 'signature'
  | 'inverse';
export type SurfacePadding = 'none' | 'sm' | 'md' | 'lg';

export interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  /** Background role from the surface token set. @default 'default' */
  tone?: SurfaceTone;
  /** Internal padding. @default 'md' */
  padding?: SurfacePadding;
  /** Draws the standard hairline border. @default false */
  bordered?: boolean;
  /** Elevation shadow. @default 'none' */
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  children?: ReactNode;
}

/**
 * Neutral background panel — the substrate the rest of the system sits on.
 *
 * @category layout
 */
export function Surface({
  tone = 'default',
  padding = 'md',
  bordered = false,
  elevation = 'none',
  className,
  children,
  ...rest
}: SurfaceProps) {
  return (
    <div
      className={cx(
        'restack-surface',
        `restack-surface--${tone}`,
        `restack-surface--pad-${padding}`,
        `restack-surface--elev-${elevation}`,
        bordered && 'restack-surface--bordered',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
