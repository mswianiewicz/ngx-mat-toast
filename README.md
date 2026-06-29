# ngx-mat-toast

`ngx-mat-toast` is a standalone **open source Angular toast notification library** built on top of **Angular Material Snackbar**.

It is designed to feel familiar to teams coming from `ngx-toastr`, while staying aligned with modern Angular best practices:

- Angular 22+
- standalone providers and NgModules
- Angular Material Snackbar under the hood
- fully typed API
- accessible toast markup
- Vitest-based unit tests
- demo application included in the workspace
- optional `ngx-toastr` compatibility adapter

## Features

- ✅ Simple service API: `success()`, `error()`, `warning()`, `info()`, `show()`, `dismiss()`, `clear()`
- ✅ Powered by **Angular Material `MatSnackBar`**
- ✅ Rich toast cards with title, message, close button, and progress bar
- ✅ Global configuration + per-toast overrides
- ✅ Positioning (`top`/`bottom`, `start`/`center`/`end`)
- ✅ Duplicate prevention
- ✅ Maximum visible toast limit
- ✅ Persistent toasts with `duration: 0`
- ✅ Optional `ToastrService` compatibility adapter for migrations from `ngx-toastr`
- ✅ No Material Icons webfont required

---

## Installation

Install the package and its peer dependencies:

```bash
npm install ngx-mat-toast @angular/material @angular/cdk @angular/animations
```

> `ngx-mat-toast` uses Angular Material Snackbar internally, so your app must also provide animations via `provideAnimations()`, `provideAnimationsAsync()`, or `provideNoopAnimations()`.

---

## Quick start (standalone)

```ts
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNgxMatToast } from 'ngx-mat-toast';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideNgxMatToast({
      duration: 3000,
      progressBar: true,
      position: { horizontal: 'end', vertical: 'top' },
    }),
  ],
};
```

```ts
// some.component.ts
import { Component, inject } from '@angular/core';
import { NgxMatToastService } from 'ngx-mat-toast';

@Component({
  selector: 'app-example',
  template: `<button (click)="save()">Save</button>`,
})
export class ExampleComponent {
  private readonly toast = inject(NgxMatToastService);

  save(): void {
    this.toast.success('Profile saved successfully.', 'Saved');
  }
}
```

---

## Quick start (NgModule)

```ts
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatToastModule } from 'ngx-mat-toast';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    NgxMatToastModule.forRoot({
      duration: 3000,
      progressBar: true,
    }),
  ],
})
export class AppModule {}
```

---

## API overview

### `NgxMatToastService`

```ts
success(message: string, title?: string, options?: NgxMatToastOptions): NgxMatToastRef
error(message: string, title?: string, options?: NgxMatToastOptions): NgxMatToastRef
warning(message: string, title?: string, options?: NgxMatToastOptions): NgxMatToastRef
info(message: string, title?: string, options?: NgxMatToastOptions): NgxMatToastRef
show(message: string, type?: ToastType, title?: string, options?: NgxMatToastOptions): NgxMatToastRef

dismiss(id: string): boolean
clear(): void
```

### `NgxMatToastRef`

```ts
const ref = toast.success('Saved');

ref.dismiss();
ref.afterDismissed().subscribe(() => {
  console.log('Toast dismissed');
});
```

---

## Configuration

### Global configuration

Use `provideNgxMatToast()` or `NgxMatToastModule.forRoot()`.

### Per-toast options

Every toast method accepts `NgxMatToastOptions`, which are merged with the global defaults.

| Option                 | Type                                                | Default        | Description                                                          |
| ---------------------- | --------------------------------------------------- | -------------- | -------------------------------------------------------------------- |
| `duration`             | `number`                                            | `3000`         | Auto-dismiss delay in milliseconds. Use `0` for persistent toasts.   |
| `position.horizontal`  | `'start' \| 'center' \| 'end' \| 'left' \| 'right'` | `'end'`        | Horizontal placement of the snackbar outlet.                         |
| `position.vertical`    | `'top' \| 'bottom'`                                 | `'top'`        | Vertical placement of the snackbar outlet.                           |
| `closeable`            | `boolean`                                           | `true`         | Show a close button.                                                 |
| `progressBar`          | `boolean`                                           | `false`        | Show a determinate progress bar.                                     |
| `progressBarDirection` | `'decreasing' \| 'increasing'`                      | `'decreasing'` | Progress animation direction.                                        |
| `tapToDismiss`         | `boolean`                                           | `true`         | Dismiss a toast when it is clicked.                                  |
| `preventDuplicates`    | `boolean`                                           | `false`        | Do not create a second toast with the same title, message, and type. |
| `maxToasts`            | `number`                                            | `5`            | Maximum visible toasts at once. `0` disables the limit.              |
| `enableDebug`          | `boolean`                                           | `false`        | Log toast activity to the browser console.                           |

> **Implementation note:** Angular Material exposes a single snackbar outlet. `ngx-mat-toast` keeps a stack of toast cards inside that outlet. If you mix different positions while toasts are already open, the stack moves to the most recently requested position.

---

## Migrating from `ngx-toastr`

This repository includes a lightweight compatibility adapter:

```ts
import { ToastrService } from 'ngx-mat-toast';
```

It supports common `ngx-toastr` patterns such as:

- `success(message, title, options)`
- `error(message, title, options)`
- `warning(message, title, options)`
- `info(message, title, options)`
- `show(message, title, options, type)`
- `clear(id?)`
- `remove(id?)`

Supported compatibility options include:

- `timeOut`
- `disableTimeOut`
- `closeButton`
- `progressBar`
- `tapToDismiss`
- `preventDuplicates`
- `maxOpened`
- `positionClass`
- `progressAnimation`

See [`docs/migrating-from-ngx-toastr.md`](docs/migrating-from-ngx-toastr.md) for a more detailed migration guide.

---

## Demo application

This workspace includes a demo app under `projects/demo`.

Start it locally with:

```bash
npm install
npm start
```

Build the demo:

```bash
npm run build:demo
```

---

## Development

Build the library:

```bash
npm run build:lib
```

Run the library tests:

```bash
npm run test:lib
```

Run the demo tests:

```bash
npm run test:demo
```

Run everything used in CI:

```bash
npm run build
npm run test:ci
```

---

## Repository structure

```text
projects/
  demo/             Example application
  ngx-mat-toast/    Publishable Angular library

docs/
  migrating-from-ngx-toastr.md

.github/
  workflows/
```

---

## Open source housekeeping

This repository also includes:

- `LICENSE`
- `CHANGELOG.md`
- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`
- `SECURITY.md`
- `.github/dependabot.yml`
- GitHub Actions for CI and npm publishing
- `.github/copilot-instructions.md`

---

## License

Licensed under the [MIT License](LICENSE).
