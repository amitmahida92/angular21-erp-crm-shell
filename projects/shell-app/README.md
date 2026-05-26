# shell-app

The shell is the host application. It owns the application frame, sidebar, topbar, dashboard, auth placeholder, and runtime loading of federated routes.

## Responsibilities

- Loads CRM, Inventory, and Accounting remotes through Native Federation.
- Keeps route boundaries clear at `/crm`, `/inventory`, and `/accounting`.
- Renders a fallback UI if a remote fails to load.
- Reads local and GitHub Pages remote URLs from environment files.

## Commands

```bash
npm run start:shell
npm run build:shell
```

Local URL: `http://localhost:4200`

If port `4200` is busy:

```bash
npx ng serve shell-app --port 4300
```
