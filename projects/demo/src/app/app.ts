import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  NgxMatToastOptions,
  NgxMatToastService,
  ToastHorizontalPosition,
  ToastType,
  ToastVerticalPosition,
} from 'ngx-mat-toast';

interface ToastDemo {
  type: ToastType;
  label: string;
  color: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatToolbarModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly toast = inject(NgxMatToastService);

  readonly message = signal('This is a sample toast notification.');
  readonly title = signal('Notification');
  readonly duration = signal(3000);
  readonly closeable = signal(true);
  readonly progressBar = signal(true);
  readonly tapToDismiss = signal(true);
  readonly preventDuplicates = signal(false);
  readonly progressBarDirection = signal<'increasing' | 'decreasing'>('decreasing');
  readonly horizontalPosition = signal<ToastHorizontalPosition>('end');
  readonly verticalPosition = signal<ToastVerticalPosition>('top');

  readonly toastTypes: ToastDemo[] = [
    { type: 'success', label: 'Success', color: '#4caf50' },
    { type: 'error', label: 'Error', color: '#f44336' },
    { type: 'warning', label: 'Warning', color: '#ff9800' },
    { type: 'info', label: 'Info', color: '#2196f3' },
  ];

  readonly horizontalPositions: { value: ToastHorizontalPosition; label: string }[] = [
    { value: 'start', label: 'Start (left)' },
    { value: 'center', label: 'Center' },
    { value: 'end', label: 'End (right)' },
  ];

  readonly verticalPositions: { value: ToastVerticalPosition; label: string }[] = [
    { value: 'top', label: 'Top' },
    { value: 'bottom', label: 'Bottom' },
  ];

  showToast(type: ToastType): void {
    const config: NgxMatToastOptions = {
      duration: this.duration(),
      closeable: this.closeable(),
      progressBar: this.progressBar(),
      tapToDismiss: this.tapToDismiss(),
      preventDuplicates: this.preventDuplicates(),
      progressBarDirection: this.progressBarDirection(),
      position: {
        horizontal: this.horizontalPosition(),
        vertical: this.verticalPosition(),
      },
    };

    this.toast.show(this.message(), type, this.title() || undefined, config);
  }

  showQuickSuccess(): void {
    this.toast.success('Changes saved successfully.', 'Saved');
  }

  showQuickError(): void {
    this.toast.error('Failed to connect to the server.', 'Connection error');
  }

  showPersistentToast(): void {
    const ref = this.toast.info(
      'This toast will stay open until you dismiss it manually.',
      'Persistent toast',
      { duration: 0 },
    );

    ref.afterDismissed().subscribe(() => {
      console.log('Persistent toast dismissed:', ref.id);
    });
  }

  clearAll(): void {
    this.toast.clear();
  }
}
