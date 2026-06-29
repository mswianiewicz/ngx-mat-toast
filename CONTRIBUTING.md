# Contributing to ngx-mat-toast

Thank you for contributing to **ngx-mat-toast**. Every improvement to the library, demo app, documentation, or automation is appreciated.

---

## Table of contents

- [Code of conduct](#code-of-conduct)
- [Getting started](#getting-started)
- [Development workflow](#development-workflow)
- [Ways to contribute](#ways-to-contribute)
- [Code style](#code-style)
- [Commit messages](#commit-messages)
- [Testing](#testing)
- [Release process](#release-process)

---

## Code of conduct

By participating in this project, you agree to follow the expectations in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

---

## Getting started

### Prerequisites

- Node.js 20+
- npm 10+
- Angular CLI 22+

### Clone and install

Clone the repository (or your fork) using the URL provided by your Git host, then install dependencies:

```bash
cd ngx-mat-toast
npm install
```

### Local development

Start the demo application:

```bash
npm start
```

Build the library:

```bash
npm run build:lib
```

---

## Development workflow

This repository contains two Angular projects:

- `projects/ngx-mat-toast` – the publishable library
- `projects/demo` – the example application used for manual verification

A typical contribution flow looks like this:

1. Create a feature branch from `main`.
2. Make your changes in the library, docs, demo, or workflow files.
3. Update or add tests.
4. Run the build and test scripts locally.
5. Open a pull request.

### Recommended branch names

- `feat/<short-description>`
- `fix/<short-description>`
- `docs/<short-description>`
- `chore/<short-description>`

---

## Ways to contribute

### Report bugs

When reporting a bug, please include:

- Angular version
- `ngx-mat-toast` version
- a small reproduction if possible
- expected behavior
- actual behavior
- screenshots or console output when relevant

If the repository includes issue templates, please use them.

### Suggest features

Feature suggestions are welcome. Helpful requests usually explain:

- the problem being solved
- the desired API or user experience
- constraints or migration considerations

### Submit pull requests

Before opening a pull request:

```bash
npm run build
npm run test:ci
npm run format:check
```

Please also update the following when relevant:

- `README.md`
- `projects/ngx-mat-toast/README.md`
- `docs/migrating-from-ngx-toastr.md`
- `CHANGELOG.md`

---

## Code style

- We use **Prettier** for formatting.
- Follow the Angular style guide where it makes sense for libraries.
- Prefer standalone APIs and `inject()` for Angular services/components.
- Keep the public API focused and well-documented.
- Avoid introducing external runtime dependencies unless they provide clear value.
- Keep the library self-contained (for example, avoid requiring extra icon fonts for core UI).

Format locally with:

```bash
npm run format
```

---

## Commit messages

This project follows **Conventional Commits**.

Examples:

```text
feat(service): add ngx-toastr compatibility adapter
fix(snackbar): reopen outlet when toast position changes
docs(readme): add standalone and NgModule setup examples
test(demo): cover quick action buttons
chore(ci): add manual workflow dispatch support
```

Recommended types:

- `feat`
- `fix`
- `docs`
- `refactor`
- `test`
- `chore`
- `perf`

---

## Testing

Run the library tests:

```bash
npm run test:lib
```

Run the demo tests:

```bash
npm run test:demo
```

Run the full CI test command locally:

```bash
npm run test:ci
```

The project currently uses Angular's unit-test builder with **Vitest**.

---

## Release process

Maintainers typically release the package like this:

1. Update `CHANGELOG.md`.
2. Bump the version in `projects/ngx-mat-toast/package.json`.
3. Run:
   ```bash
   npm run build:lib
   ```
4. Publish through the GitHub release workflow or the manual npm publish workflow.

If you are not a maintainer, you usually do **not** need to perform release steps in your pull request.
