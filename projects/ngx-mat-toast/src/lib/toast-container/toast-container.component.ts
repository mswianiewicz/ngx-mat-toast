import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
  inject,
  type Signal,
} from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { ToastData } from '../toast.model';
import { ToastPosition } from '../toast.types';
import { ToastItemComponent } from '../toast-item/toast-item.component';

/**
 * Data passed from `NgxMatToastService` into the persistent Material snackbar outlet.
 *
 * @internal
 */
export interface ToastOutletData {
  toasts: Signal<ToastData[]>;
  dismiss: (id: string) => void;
  position: ToastPosition;
}

/**
 * Stack container rendered inside Angular Material `MatSnackBar`.
 *
 * @internal
 */
@Component({
  selector: 'ngx-mat-toast-container',
  standalone: true,
  imports: [ToastItemComponent],
  templateUrl: './toast-container.component.html',
  styleUrl: './toast-container.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastContainerComponent {
  private readonly data = inject<ToastOutletData>(MAT_SNACK_BAR_DATA);

  readonly toasts = this.data.toasts;

  @HostBinding('attr.data-vertical')
  protected get verticalPosition(): ToastPosition['vertical'] {
    return this.data.position.vertical;
  }

  onDismiss(id: string): void {
    this.data.dismiss(id);
  }
}
