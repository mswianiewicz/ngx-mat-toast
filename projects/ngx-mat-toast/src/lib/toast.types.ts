/**
 * The type of toast notification.
 */
export type ToastType = 'success' | 'error' | 'warning' | 'info';

/**
 * Horizontal positioning of the toast container.
 */
export type ToastHorizontalPosition = 'start' | 'center' | 'end' | 'left' | 'right';

/**
 * Vertical positioning of the toast container.
 */
export type ToastVerticalPosition = 'top' | 'bottom';

/**
 * Position configuration for the toast container.
 */
export interface ToastPosition {
  horizontal: ToastHorizontalPosition;
  vertical: ToastVerticalPosition;
}
