import { useState } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface TabItem {
  /** Stable identifier, matched against `value`. */
  id: string;
  /** Visible tab text. */
  label: ReactNode;
  /**
   * Count or marker shown after the label. A plain string or number gets the
   * built-in count pill, which turns brand-filled on the active tab. Anything
   * else — a `Badge`, an icon — is mounted bare, with no chrome of its own
   * added around it.
   */
  badge?: ReactNode;
  /** @default false */
  disabled?: boolean;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** The tabs, in display order. */
  items: TabItem[];
  /** Selected tab id — supply it to drive selection from outside. */
  value?: string;
  /** Initially selected tab id when uncontrolled. Defaults to the first tab. */
  defaultValue?: string;
  /** Fires with the newly selected tab id. */
  onChange?: (id: string) => void;
  /**
   * `underline` rules the active tab with the lime selection line; `segmented`
   * sets the tabs in one rounded shell, the labs' strategy selector, with the
   * active segment tinted and underlined. @default 'underline'
   */
  variant?: 'underline' | 'segmented';
  /** @default 'md' */
  size?: 'sm' | 'md';
  /** Stretches the tabs across the full width. @default false */
  fullWidth?: boolean;
  /** Panel content for the selected tab. */
  children?: ReactNode;
}

/**
 * Horizontal tab set with an optional panel beneath.
 *
 * @category navigation
 */
export function Tabs({
  items,
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...rest
}: TabsProps) {
  const [internal, setInternal] = useState(defaultValue ?? items[0]?.id);
  const active = value ?? internal;

  const select = (id: string) => {
    if (value === undefined) setInternal(id);
    onChange?.(id);
  };

  return (
    <div className={cx('restack-tabs', `restack-tabs--${variant}`, `restack-tabs--${size}`, className)} {...rest}>
      <div className={cx('restack-tabs__list', fullWidth && 'restack-tabs__list--full')} role="tablist">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`restack-tab-${item.id}`}
            aria-selected={item.id === active}
            aria-controls={`restack-tabpanel-${item.id}`}
            disabled={item.disabled}
            className={cx('restack-tabs__tab', item.id === active && 'restack-tabs__tab--active')}
            onClick={() => select(item.id)}
          >
            <span className="restack-tabs__label">{item.label}</span>
            {item.badge !== undefined && item.badge !== null ? (
              <span
                className={cx(
                  'restack-tabs__badge',
                  // Only a bare count gets the pill. A caller passing their own
                  // <Badge> already has a pill, and styling the slot as well
                  // nests one inside the other.
                  (typeof item.badge === 'string' || typeof item.badge === 'number') &&
                    'restack-tabs__badge--count'
                )}
              >
                {item.badge}
              </span>
            ) : null}
          </button>
        ))}
      </div>
      {children ? (
        <div
          className="restack-tabs__panel"
          role="tabpanel"
          id={`restack-tabpanel-${active}`}
          aria-labelledby={`restack-tab-${active}`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
