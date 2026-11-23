import { useState } from 'react';

/**
 * Reads token values back out of the live stylesheet.
 *
 * The alternative is to type the hexes into the site by hand, which makes the
 * swatch label a second copy of `tokens/color.css` — and a second copy is a
 * copy that goes stale. Reading them means a label can only ever show what the
 * chip beside it is actually painted with.
 *
 * Custom properties resolve on read, so this works for the semantic aliases
 * (`--restack-color-primary` → `#1132ff`) as well as the raw ramp steps.
 */
export function readTokens(names: readonly string[]): Record<string, string> {
  const style = getComputedStyle(document.documentElement);
  const out: Record<string, string> = {};
  for (const name of names) out[name] = style.getPropertyValue(name).trim();
  return out;
}

/** `readTokens` for a fixed, module-scope list — read once on first render. */
export function useTokens(names: readonly string[]): Record<string, string> {
  const [values] = useState(() => readTokens(names));
  return values;
}
