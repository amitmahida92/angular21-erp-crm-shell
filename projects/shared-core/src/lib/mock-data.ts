import {
  CrmLead,
  Customer,
  Invoice,
  KpiMetric,
  LedgerEntry,
  Opportunity,
  Payment,
  Product,
  RemoteDefinition,
  StockMovement,
  Warehouse,
} from './types';

export const remoteDefinitions: RemoteDefinition[] = [
  {
    remoteName: 'crm-app',
    exposedModule: './Routes',
    routePath: 'crm',
    displayName: 'CRM',
    localUrl: 'http://localhost:4201/remoteEntry.json',
    githubPagesPath: '/remotes/crm/remoteEntry.json',
  },
  {
    remoteName: 'inventory-app',
    exposedModule: './Routes',
    routePath: 'inventory',
    displayName: 'Inventory',
    localUrl: 'http://localhost:4202/remoteEntry.json',
    githubPagesPath: '/remotes/inventory/remoteEntry.json',
  },
  {
    remoteName: 'accounting-app',
    exposedModule: './Routes',
    routePath: 'accounting',
    displayName: 'Accounting',
    localUrl: 'http://localhost:4203/remoteEntry.json',
    githubPagesPath: '/remotes/accounting/remoteEntry.json',
  },
];

export const shellKpis: KpiMetric[] = [
  { label: 'Open pipeline', value: '$384K', delta: '+12.4%', tone: 'success' },
  { label: 'Inventory turns', value: '5.8x', delta: '+0.7x', tone: 'info' },
  { label: 'Invoices due', value: '$72K', delta: '-8.1%', tone: 'warning' },
  { label: 'Active customers', value: '248', delta: '+18', tone: 'success' },
];

export const crmLeads: CrmLead[] = [
  { id: 'L-1001', company: 'Northstar Clinics', contact: 'Maya Iyer', stage: 'Qualified', value: 42000, owner: 'Anika' },
  { id: 'L-1002', company: 'Atlas Components', contact: 'Dev Shah', stage: 'Proposal', value: 69000, owner: 'Rohan' },
  { id: 'L-1003', company: 'Vertex Retail', contact: 'Sara Khan', stage: 'New', value: 18000, owner: 'Anika' },
  { id: 'L-1004', company: 'Bluewave Logistics', contact: 'Owen Lee', stage: 'Won', value: 116000, owner: 'Mira' },
];

export const opportunities: Opportunity[] = [
  { id: 'OP-230', title: 'Multi-warehouse rollout', account: 'Bluewave Logistics', probability: 85, expectedClose: '2026-06-21', value: 116000 },
  { id: 'OP-231', title: 'CRM automation suite', account: 'Atlas Components', probability: 62, expectedClose: '2026-07-08', value: 69000 },
  { id: 'OP-232', title: 'Finance dashboard pilot', account: 'Northstar Clinics', probability: 48, expectedClose: '2026-07-19', value: 42000 },
];

export const customers: Customer[] = [
  { id: 'C-410', name: 'Northstar Clinics', segment: 'Healthcare', region: 'West', health: 'success', recurringRevenue: 8400 },
  { id: 'C-411', name: 'Bluewave Logistics', segment: 'Logistics', region: 'South', health: 'info', recurringRevenue: 12800 },
  { id: 'C-412', name: 'Vertex Retail', segment: 'Retail', region: 'North', health: 'warning', recurringRevenue: 3900 },
];

export const products: Product[] = [
  { sku: 'PRD-001', name: 'Barcode Scanner Pro', category: 'Hardware', stock: 142, reorderPoint: 40, unitPrice: 249 },
  { sku: 'PRD-002', name: 'Smart Shelf Sensor', category: 'IoT', stock: 36, reorderPoint: 50, unitPrice: 89 },
  { sku: 'PRD-003', name: 'Warehouse Label Pack', category: 'Consumables', stock: 820, reorderPoint: 300, unitPrice: 12 },
  { sku: 'PRD-004', name: 'POS Terminal Mini', category: 'Hardware', stock: 21, reorderPoint: 25, unitPrice: 429 },
];

export const stockMovements: StockMovement[] = [
  { reference: 'SM-9001', product: 'Smart Shelf Sensor', movementType: 'Receipt', quantity: 80, warehouse: 'Mumbai DC', date: '2026-05-20' },
  { reference: 'SM-9002', product: 'POS Terminal Mini', movementType: 'Delivery', quantity: -12, warehouse: 'Bengaluru Hub', date: '2026-05-21' },
  { reference: 'SM-9003', product: 'Warehouse Label Pack', movementType: 'Adjustment', quantity: 30, warehouse: 'Delhi North', date: '2026-05-22' },
];

export const warehouses: Warehouse[] = [
  { code: 'WH-MUM', name: 'Mumbai DC', city: 'Mumbai', utilization: 78, status: 'success' },
  { code: 'WH-BLR', name: 'Bengaluru Hub', city: 'Bengaluru', utilization: 91, status: 'warning' },
  { code: 'WH-DEL', name: 'Delhi North', city: 'Delhi', utilization: 64, status: 'info' },
];

export const invoices: Invoice[] = [
  { number: 'INV-2026-041', customer: 'Bluewave Logistics', dueDate: '2026-06-01', amount: 24500, status: 'Sent' },
  { number: 'INV-2026-042', customer: 'Northstar Clinics', dueDate: '2026-05-28', amount: 13600, status: 'Paid' },
  { number: 'INV-2026-043', customer: 'Vertex Retail', dueDate: '2026-05-18', amount: 8200, status: 'Overdue' },
  { number: 'INV-2026-044', customer: 'Atlas Components', dueDate: '2026-06-12', amount: 31200, status: 'Draft' },
];

export const payments: Payment[] = [
  { reference: 'PAY-771', customer: 'Northstar Clinics', date: '2026-05-22', amount: 13600, method: 'Bank transfer' },
  { reference: 'PAY-772', customer: 'Bluewave Logistics', date: '2026-05-24', amount: 12000, method: 'ACH' },
  { reference: 'PAY-773', customer: 'Atlas Components', date: '2026-05-25', amount: 8700, method: 'Card' },
];

export const ledgerEntries: LedgerEntry[] = [
  { account: 'Accounts receivable', debit: 77500, credit: 13600, period: 'May 2026' },
  { account: 'Product revenue', debit: 0, credit: 51200, period: 'May 2026' },
  { account: 'Inventory asset', debit: 28900, credit: 17400, period: 'May 2026' },
];
