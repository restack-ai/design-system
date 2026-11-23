import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export type ThemeFace = 'dark' | 'light';
export type ThemeDensity = 'comfortable' | 'compact';

export interface ThemeProviderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Which face the subtree wears. Dark is the system's default and needs no
   * provider; `light` re-points every semantic token for the subtree, and
   * `dark` restores the default inside a light region. Omit it to inherit
   * whatever face the surrounding page is in.
   */
  theme?: ThemeFace;
  /**
   * How tightly the subtree is set. `compact` is where the labs sit — 14px
   * type on a 3.5px grid — and moves type, spacing and control heights
   * together. `comfortable` restores the 16px / 4px default inside a compact
   * region. Omit it to inherit.
   */
  density?: ThemeDensity;
  /**
   * Token overrides applied to this subtree, keyed by token name with or
   * without the `--restack-` prefix — `{ 'color-primary': '#c6f59b' }` and
   * `{ '--restack-color-primary': '#c6f59b' }` are equivalent.
   */
  tokens?: Record<string, string>;
  /**
   * Rebases only the type scale for the subtree, e.g. `'13px'`. Every step
   * moves with it; spacing does not. Wins over the type size `density` sets.
   * For a denser region, prefer `density`.
   */
  fontSize?: string;
  children?: ReactNode;
}

/**
 * Optional root wrapper: paints the canvas, applies the base type, and scopes
 * a face, a type base or token overrides to a subtree.
 *
 * Components are self-styling and dark by default, so nothing requires this
 * wrapper. Reach for it to give an app shell its ground and font, to switch a
 * region (or the whole app) to the light face, or to rebase the type scale.
 *
 * To switch the whole document instead — including the page background behind
 * the root — set `data-restack-theme="light"` on `<html>`.
 *
 * @category system
 */
export function ThemeProvider({ theme, density, tokens, fontSize, className, style, children, ...rest }: ThemeProviderProps) {
  const vars: Record<string, string> = {};
  if (tokens) {
    for (const [key, value] of Object.entries(tokens)) {
      vars[key.startsWith('--') ? key : `--restack-${key}`] = value;
    }
  }
  // Both, deliberately: the custom property drives every component's size token,
  // while the plain font-size catches unstyled text passed straight as children.
  if (fontSize) {
    vars['--restack-font-size-base'] = fontSize;
    vars['font-size'] = fontSize;
  }

  return (
    <div
      className={cx('restack-root', className)}
      data-restack-theme={theme}
      data-restack-density={density}
      style={{ ...vars, ...style } as CSSProperties}
      {...rest}
    >
      {children}
    </div>
  );
}
