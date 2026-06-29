import { NgxMatToastRef } from './toast.ref';

/**
 * Common `ngx-toastr` position class names supported by the compatibility adapter.
 */
export type ToastrPositionClass =
  | 'toast-top-left'
  | 'toast-top-center'
  | 'toast-top-right'
  | 'toast-top-full-width'
  | 'toast-bottom-left'
  | 'toast-bottom-center'
  | 'toast-bottom-right'
  | 'toast-bottom-full-width';

/**
 * Compatibility options for migrating from `ngx-toastr`.
 *
 * Only the most common `ngx-toastr` options are mapped. Unsupported properties are
 * intentionally omitted to keep the adapter predictable.
 */
export interface IndividualConfig {
  timeOut?: number;
  disableTimeOut?: boolean | 'timeOut' | 'extendedTimeOut';
  closeButton?: boolean;
  progressBar?: boolean;
  tapToDismiss?: boolean;
  preventDuplicates?: boolean;
  maxOpened?: number;
  positionClass?: ToastrPositionClass;
  progressAnimation?: 'increasing' | 'decreasing';
}

/**
 * Lightweight compatibility result that mirrors the most useful parts of
 * `ngx-toastr`'s `ActiveToast` contract.
 */
export interface ActiveToast {
  toastId: string;
  title?: string;
  message?: string;
  toastRef: NgxMatToastRef;
}
