import type { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'value' | 'defaultValue'> {
  /** Current position — supply it with `onChange` to control the slider. */
  value?: number;
  /** Starting position when uncontrolled. */
  defaultValue?: number;
  /** @default 0 */
  min?: number;
  /** @default 100 */
  max?: number;
  /** Visible label above the track. Without it, pass `aria-label`. */
  label?: ReactNode;
  /** Readout at the trailing edge — the formatted value, e.g. `10.09 / 19.40 ms`. Set in mono. */
  valueText?: ReactNode;
  /** @default 'md' */
  size?: 'sm' | 'md';
}

/**
 * A range control — the labs' playback scrubber.
 *
 * Native `<input type="range">` underneath, so keyboard, touch and assistive
 * tech behave as the platform does. The filled part of the track is lime.
 * The fill needs the current value, so drive it controlled (`value` +
 * `onChange`) wherever the position must be shown precisely.
 *
 * @category forms
 */
export function Slider({
  value,
  defaultValue,
  min = 0,
  max = 100,
  label,
  valueText,
  size = 'md',
  className,
  style,
  disabled,
  id,
  ...rest
}: SliderProps) {
  const current = value ?? defaultValue ?? min;
  const pct = max > min ? ((current - min) / (max - min)) * 100 : 0;
  return (
    <div className={cx('restack-slider', `restack-slider--${size}`, disabled && 'restack-slider--disabled', className)}>
      {label || valueText ? (
        <div className="restack-slider__header">
          {label ? (
            <label className="restack-slider__label" htmlFor={id}>
              {label}
            </label>
          ) : (
            <span />
          )}
          {valueText ? <span className="restack-slider__value">{valueText}</span> : null}
        </div>
      ) : null}
      <input
        id={id}
        type="range"
        className="restack-slider__input"
        min={min}
        max={max}
        value={value}
        defaultValue={value === undefined ? defaultValue : undefined}
        disabled={disabled}
        style={{ '--restack-slider-fill': `${Math.min(100, Math.max(0, pct))}%`, ...style } as CSSProperties}
        {...rest}
      />
    </div>
  );
}
