import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface StepItem {
  /** Step name. */
  label: ReactNode;
  /** Short note under the label. */
  description?: ReactNode;
}

export interface StepperProps extends Omit<HTMLAttributes<HTMLOListElement>, 'children'> {
  /** The steps, in order. */
  steps: StepItem[];
  /** Zero-based index of the step in progress. Everything before it reads as done. */
  current: number;
  /** @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical';
  /** Numbers the markers; when false an upcoming step shows the signal dot. @default true */
  numbered?: boolean;
}

/**
 * Progress through an ordered, multi-step task.
 *
 * @category navigation
 */
export function Stepper({
  steps,
  current,
  orientation = 'horizontal',
  numbered = true,
  className,
  ...rest
}: StepperProps) {
  return (
    <ol className={cx('restack-stepper', `restack-stepper--${orientation}`, className)} {...rest}>
      {steps.map((step, i) => {
        const state = i < current ? 'complete' : i === current ? 'current' : 'upcoming';
        return (
          <li
            className={cx('restack-stepper__step', `restack-stepper__step--${state}`)}
            key={i}
            aria-current={state === 'current' ? 'step' : undefined}
          >
            <span className="restack-stepper__marker" aria-hidden="true">
              {state === 'complete' ? (
                <svg viewBox="0 0 16 16" focusable="false">
                  <path
                    d="M4 8.3 6.6 11 12 4.8"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : numbered ? (
                i + 1
              ) : (
                <span className="restack-stepper__dot" />
              )}
            </span>
            <span className="restack-stepper__text">
              <span className="restack-stepper__label">{step.label}</span>
              {step.description ? (
                <span className="restack-stepper__description">{step.description}</span>
              ) : null}
            </span>
            {i < steps.length - 1 ? <span className="restack-stepper__connector" aria-hidden="true" /> : null}
          </li>
        );
      })}
    </ol>
  );
}
