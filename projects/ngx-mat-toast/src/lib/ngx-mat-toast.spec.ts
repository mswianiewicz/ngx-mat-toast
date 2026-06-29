import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxMatToastModule } from './ngx-mat-toast.module';
import { NGX_MAT_TOAST_CONFIG } from './toast-config.token';

describe('NgxMatToastModule', () => {
  it('registers the Material snackbar providers and root config', () => {
    TestBed.configureTestingModule({
      imports: [
        NgxMatToastModule.forRoot({
          duration: 5000,
          progressBar: true,
        }),
      ],
    });

    expect(TestBed.inject(MatSnackBar)).toBeTruthy();
    expect(TestBed.inject(NGX_MAT_TOAST_CONFIG)).toEqual({
      duration: 5000,
      progressBar: true,
    });
  });
});
