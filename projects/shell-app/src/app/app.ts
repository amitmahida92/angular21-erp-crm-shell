import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavItem } from 'shared-core';
import { SidebarComponent, TopbarComponent } from 'shared-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, TopbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly navItems: NavItem[] = [
    { label: 'Dashboard', path: '/', icon: 'DB', description: 'Shell overview' },
    { label: 'CRM', path: '/crm', icon: 'CR', description: 'Leads and pipeline' },
    { label: 'Inventory', path: '/inventory', icon: 'IN', description: 'Products and stock' },
    { label: 'Accounting', path: '/accounting', icon: 'AC', description: 'Invoices and ledger' },
    { label: 'Auth', path: '/auth', icon: 'AU', description: 'Placeholder' },
  ];
}
