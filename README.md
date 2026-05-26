# Angular 21 ERP/CRM Shell

Author: Amit Mahida

Host shell for the Angular 21 ERP/CRM micro-frontend demo.

This repository is the host shell for the split Angular 21 ERP/CRM micro-frontend demo. It loads remotes from separate GitHub Pages deployments:

- CRM: https://amitmahida92.github.io/angular21-erp-crm-crm-app/remoteEntry.json
- Inventory: https://amitmahida92.github.io/angular21-erp-crm-inventory-app/remoteEntry.json
- Accounting: https://amitmahida92.github.io/angular21-erp-crm-accounting-app/remoteEntry.json

## Local Development

Run the remote repos first, then start the shell:

```bash
npm ci
npm run start
```

Local shell URL: `http://localhost:4200`

## Build And Test

```bash
npm run build
npm run test:ci
```

## GitHub Pages

```bash
npm run build:gh-pages
```

Pages URL: https://amitmahida92.github.io/angular21-erp-crm-shell/

Repository: https://github.com/amitmahida92/angular21-erp-crm-shell
