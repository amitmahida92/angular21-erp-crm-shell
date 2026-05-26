import { Routes } from '@angular/router';
import { remoteDefinitions } from 'shared-core';
import { AuthPlaceholderComponent } from './auth-placeholder/auth-placeholder.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { loadRemoteRoutes } from './federation/load-remote-routes';

const crmRemote = remoteDefinitions.find((remote) => remote.remoteName === 'crm-app');
const inventoryRemote = remoteDefinitions.find((remote) => remote.remoteName === 'inventory-app');
const accountingRemote = remoteDefinitions.find((remote) => remote.remoteName === 'accounting-app');

if (!crmRemote || !inventoryRemote || !accountingRemote) {
  throw new Error('Remote definitions are incomplete.');
}

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent },
  { path: 'auth', component: AuthPlaceholderComponent },
  {
    path: crmRemote.routePath,
    loadChildren: () => loadRemoteRoutes(crmRemote),
  },
  {
    path: inventoryRemote.routePath,
    loadChildren: () => loadRemoteRoutes(inventoryRemote),
  },
  {
    path: accountingRemote.routePath,
    loadChildren: () => loadRemoteRoutes(accountingRemote),
  },
  { path: '**', redirectTo: '' },
];
