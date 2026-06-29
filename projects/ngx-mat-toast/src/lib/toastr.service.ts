import { Injectable, inject } from '@angular/core';
import { NgxMatToastOptions } from './toast.config';
import { NgxMatToastService } from './ngx-mat-toast.service';
import { NgxMatToastRef } from './toast.ref';
import { ToastType, type ToastPosition } from './toast.types';
import { ActiveToast, IndividualConfig, ToastrPositionClass } from './toastr.types';

const POSITION_CLASS_MAP: Record<ToastrPositionClass, ToastPosition> = {
  'toast-top-left': { horizontal: 'start', vertical: 'top' },
  'toast-top-center': { horizontal: 'center', vertical: 'top' },
  'toast-top-right': { horizontal: 'end', vertical: 'top' },
  'toast-top-full-width': { horizontal: 'center', vertical: 'top' },
  'toast-bottom-left': { horizontal: 'start', vertical: 'bottom' },
  'toast-bottom-center': { horizontal: 'center', vertical: 'bottom' },
  'toast-bottom-right': { horizontal: 'end', vertical: 'bottom' },
  'toast-bottom-full-width': { horizontal: 'center', vertical: 'bottom' },
};

function normalizeType(type?: string): ToastType {
  switch (type) {
    case 'success':
    case 'toast-success':
      return 'success';
    case 'error':
    case 'toast-error':
      return 'error';
    case 'warning':
    case 'toast-warning':
      return 'warning';
    case 'info':
    case 'toast-info':
    default:
      return 'info';
  }
}

function mapCompatConfig(config?: Partial<IndividualConfig>): NgxMatToastOptions {
  if (!config) {
    return {};
  }

  return {
    duration: config.disableTimeOut ? 0 : config.timeOut,
    closeable: config.closeButton,
    progressBar: config.progressBar,
    tapToDismiss: config.tapToDismiss,
    preventDuplicates: config.preventDuplicates,
    maxToasts: config.maxOpened,
    progressBarDirection: config.progressAnimation,
    position: config.positionClass ? POSITION_CLASS_MAP[config.positionClass] : undefined,
  };
}

/**
 * Minimal compatibility adapter for projects migrating from `ngx-toastr`.
 *
 * This allows many existing `ToastrService` call sites to continue working after
 * switching imports from `ngx-toastr` to `ngx-mat-toast`.
 */
@Injectable({ providedIn: 'root' })
export class ToastrService {
  private readonly toast = inject(NgxMatToastService);

  success(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast {
    return this.createActiveToast(
      this.toast.success(message ?? '', title, mapCompatConfig(override)),
      message,
      title,
    );
  }

  error(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast {
    return this.createActiveToast(
      this.toast.error(message ?? '', title, mapCompatConfig(override)),
      message,
      title,
    );
  }

  info(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast {
    return this.createActiveToast(
      this.toast.info(message ?? '', title, mapCompatConfig(override)),
      message,
      title,
    );
  }

  warning(message?: string, title?: string, override?: Partial<IndividualConfig>): ActiveToast {
    return this.createActiveToast(
      this.toast.warning(message ?? '', title, mapCompatConfig(override)),
      message,
      title,
    );
  }

  show(
    message?: string,
    title?: string,
    override?: Partial<IndividualConfig>,
    type?: string,
  ): ActiveToast {
    return this.createActiveToast(
      this.toast.show(message ?? '', normalizeType(type), title, mapCompatConfig(override)),
      message,
      title,
    );
  }

  clear(toastId?: string): void {
    if (toastId) {
      this.toast.dismiss(toastId);
      return;
    }

    this.toast.clear();
  }

  remove(toastId?: string): boolean {
    if (!toastId) {
      this.toast.clear();
      return true;
    }

    return this.toast.dismiss(toastId);
  }

  private createActiveToast(
    toastRef: NgxMatToastRef,
    message?: string,
    title?: string,
  ): ActiveToast {
    return {
      toastId: toastRef.id,
      message,
      title,
      toastRef,
    };
  }
}

export { mapCompatConfig as mapNgxToastrConfigToNgxMatToastConfig };
