import type { HTMLAttributes } from 'react';
import { cx } from '../utils/cx';

export type BrandLogoSize = 'sm' | 'md' | 'lg';
export type BrandLogoTone = 'default' | 'primary' | 'signature' | 'mono';
export type BrandLogoVariant = 'lockup' | 'mark';

export interface BrandLogoProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * `lockup` is the full "restack ai" wordmark, whose "a" is the sprouting
   * face. `mark` is that face alone, for square and narrow slots — favicons,
   * avatars, a collapsed sidebar.
   * @default 'lockup'
   */
  variant?: BrandLogoVariant;
  /** Replaces the shipped artwork with another asset, rendered as an image. */
  src?: string;
  /** Accessible name. @default 'restack ai' */
  alt?: string;
  /** Product or unit name set beside the logo, divided by a hairline rule. */
  wordmark?: string;
  /** Supporting line beneath the logo. */
  tagline?: string;
  /** @default 'md' */
  size?: BrandLogoSize;
  /**
   * `default` draws it in the strong text colour — off-white on the dark
   * face, charcoal on the light one. `primary` draws it in legible lime,
   * `signature` in the brand indigo.
   * `mono` inherits `currentColor`.
   * @default 'default'
   */
  tone?: BrandLogoTone;
}

/**
 * The restack ai signature.
 *
 * The artwork ships with the library and is drawn as a mask tinted by the
 * current colour, so one asset serves both faces and every tone. Pass `src`
 * to substitute a different asset.
 *
 * @category brand
 */
export function BrandLogo({
  variant = 'lockup',
  src,
  alt = 'restack ai',
  wordmark,
  tagline,
  size = 'md',
  tone = 'default',
  className,
  ...rest
}: BrandLogoProps) {
  return (
    <div
      className={cx(
        'restack-brandlogo',
        `restack-brandlogo--${size}`,
        `restack-brandlogo--${tone}`,
        `restack-brandlogo--${variant}`,
        className,
      )}
      {...rest}
    >
      <div className="restack-brandlogo__lockup">
        {src ? (
          <img className="restack-brandlogo__img" src={src} alt={alt} />
        ) : (
          <span className="restack-brandlogo__art" role="img" aria-label={alt} />
        )}
        {wordmark ? <span className="restack-brandlogo__wordmark">{wordmark}</span> : null}
      </div>
      {tagline ? <span className="restack-brandlogo__tagline">{tagline}</span> : null}
    </div>
  );
}
