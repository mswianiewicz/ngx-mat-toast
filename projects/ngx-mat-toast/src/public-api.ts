/*
 * Public API Surface of ngx-mat-toast
 */

export { NgxMatToastService } from './lib/ngx-mat-toast.service';
export { NgxMatToastRef } from './lib/toast.ref';
export type { NgxMatToastConfig, NgxMatToastOptions } from './lib/toast.config';
export { DEFAULT_TOAST_CONFIG } from './lib/toast.config';
export type {
  ToastHorizontalPosition,
  ToastPosition,
  ToastType,
  ToastVerticalPosition,
} from './lib/toast.types';
export type { ToastData } from './lib/toast.model';
export { provideNgxMatToast } from './lib/provide-ngx-mat-toast';
export { NgxMatToastModule } from './lib/ngx-mat-toast.module';
export { NGX_MAT_TOAST_CONFIG } from './lib/toast-config.token';

export { ToastrService, mapNgxToastrConfigToNgxMatToastConfig } from './lib/toastr.service';
export type { ActiveToast, IndividualConfig, ToastrPositionClass } from './lib/toastr.types';
