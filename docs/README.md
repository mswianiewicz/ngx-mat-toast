# `ngx-mat-toast` documentation

This folder contains the in-depth documentation for `ngx-mat-toast`.

Use it as the primary reference once the library is installed, or as a guided learning path if you are evaluating the package for a new Angular project.

---

## Documentation guide

| Goal                                                          | Recommended guide                                                |
| ------------------------------------------------------------- | ---------------------------------------------------------------- |
| Install the library and show the first toast                  | [`getting-started.md`](./getting-started.md)                     |
| Understand all configuration options and defaults             | [`configuration.md`](./configuration.md)                         |
| Look up exported symbols and method signatures                | [`api-reference.md`](./api-reference.md)                         |
| Customize visuals without breaking the Material overlay model | [`customization.md`](./customization.md)                         |
| Learn how the snackbar-hosted stack works internally          | [`architecture.md`](./architecture.md)                           |
| Copy production-ready usage patterns                          | [`examples.md`](./examples.md)                                   |
| Migrate from `ngx-toastr` safely                              | [`migrating-from-ngx-toastr.md`](./migrating-from-ngx-toastr.md) |
| Understand the compatibility adapter in detail                | [`compatibility-adapter.md`](./compatibility-adapter.md)         |
| Diagnose integration or styling problems                      | [`troubleshooting.md`](./troubleshooting.md)                     |

### Suggested reading order for new projects

1. [`getting-started.md`](./getting-started.md) – install and wire up the library
2. [`configuration.md`](./configuration.md) – choose sensible global defaults
3. [`api-reference.md`](./api-reference.md) – reference while integrating
4. [`examples.md`](./examples.md) – copy production-ready patterns
5. [`customization.md`](./customization.md) – refine visuals and UX as needed
6. [`architecture.md`](./architecture.md) and [`troubleshooting.md`](./troubleshooting.md) – for advanced topics

---

## Core concepts

`ngx-mat-toast` intentionally keeps its architecture simple and predictable:

- The main API lives in `NgxMatToastService`.
- Angular Material `MatSnackBar` remains the host outlet.
- A single snackbar outlet renders a stack of toast cards.
- Global defaults are registered once and merged with per-toast overrides.
- The library supports both standalone Angular apps and NgModule-based apps.
- The optional `ToastrService` adapter exists to make `ngx-toastr` migrations lower risk.

That design gives you a familiar toast API without abandoning Angular Material conventions.

---

## Best-practice checklist

Use these defaults unless your product has a strong reason to differ:

- Register the library once at the application root.
- Prefer `NgxMatToastService` for new code.
- Reserve `ToastrService` for migration phases.
- Keep toast messages short, action-oriented, and easy to scan.
- Use `duration: 0` only for actionable or critical notifications.
- Enable `preventDuplicates` for save flows and noisy background operations.
- Keep one consistent default position for most of the app to avoid stack movement.
- Style the overlay from global styles, not component-scoped styles.
- Enable `enableDebug` only during development or troubleshooting.

---

## Related resources

- Root overview: [`../README.md`](../README.md)
- Publishable package README: [`../projects/ngx-mat-toast/README.md`](../projects/ngx-mat-toast/README.md)
- Demo application: [`../projects/demo`](../projects/demo)
- Preview assets: [`./assets/Preview_1.png`](./assets/Preview_1.png), [`./assets/Preview_2.png`](./assets/Preview_2.png)

---

## For specific use cases

**New to Angular toast libraries?** → Start with [`getting-started.md`](./getting-started.md)  
**Migrating from `ngx-toastr`?** → See [`migrating-from-ngx-toastr.md`](./migrating-from-ngx-toastr.md) and [`compatibility-adapter.md`](./compatibility-adapter.md)  
**Working on the library itself?** → Consult [`architecture.md`](./architecture.md) and [`troubleshooting.md`](./troubleshooting.md)

---

## Version history and support

Check [`../CHANGELOG.md`](../CHANGELOG.md) for release notes, features, and breaking changes.
