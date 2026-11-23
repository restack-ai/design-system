import { useEffect, useId, useRef } from 'react';
import type { DialogHTMLAttributes, ReactNode } from 'react';
import { cx } from '../utils/cx';

export interface DialogProps extends Omit<DialogHTMLAttributes<HTMLDialogElement>, 'title' | 'open'> {
  /** Whether the dialog is showing. */
  open: boolean;
  /** Called when the reader dismisses it — Escape, the close button, or the backdrop. */
  onClose: () => void;
  /** Heading. Names the dialog for assistive tech. */
  title: ReactNode;
  /** One line under the title. */
  description?: ReactNode;
  /** Buttons in the footer, trailing-aligned. Put the primary action last. */
  actions?: ReactNode;
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Accessible name for the close button. @default 'Close' */
  closeLabel?: string;
  children?: ReactNode;
}

/**
 * A modal panel over a dimmed, blurred page.
 *
 * Built on the native `<dialog>`: `showModal()` supplies the focus trap, the
 * Escape key and the top layer, so nothing can be stacked above it by
 * accident. It is the one place the system uses its largest radius and its
 * heaviest shadow.
 *
 * @category feedback
 */
export function Dialog({
  open,
  onClose,
  title,
  description,
  actions,
  size = 'md',
  closeLabel = 'Close',
  className,
  children,
  ...rest
}: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={cx('restack-dialog', `restack-dialog--${size}`, className)}
      aria-labelledby={titleId}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        // A click that lands on the <dialog> itself is on the backdrop: the
        // panel's content sits in the inner wrapper.
        if (e.target === e.currentTarget) onClose();
      }}
      {...rest}
    >
      <div className="restack-dialog__panel">
        <header className="restack-dialog__header">
          <div className="restack-dialog__headings">
            <h2 className="restack-dialog__title" id={titleId}>
              {title}
            </h2>
            {description ? <p className="restack-dialog__description">{description}</p> : null}
          </div>
          <button type="button" className="restack-dialog__close" onClick={onClose} aria-label={closeLabel}>
            <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path d="M4 4 12 12M12 4 4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </svg>
          </button>
        </header>
        {children ? <div className="restack-dialog__body">{children}</div> : null}
        {actions ? <footer className="restack-dialog__footer">{actions}</footer> : null}
      </div>
    </dialog>
  );
}
