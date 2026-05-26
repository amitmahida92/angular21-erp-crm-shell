export type BadgeTone = 'neutral' | 'success' | 'warning' | 'danger' | 'info';

export interface NavItem {
  label: string;
  path: string;
  icon: string;
  description?: string;
}

export interface KpiMetric {
  label: string;
  value: string;
  delta: string;
  tone: BadgeTone;
}

export interface TableColumn {
  key: string;
  label: string;
  type?: string;
}

export interface RemoteDefinition {
  remoteName: string;
  exposedModule: string;
  routePath: string;
  displayName: string;
  localUrl: string;
  githubPagesPath: string;
}

export interface CrmLead {
  id: string;
  company: string;
  contact: string;
  stage: 'New' | 'Qualified' | 'Proposal' | 'Won';
  value: number;
  owner: string;
}

export interface Opportunity {
  id: string;
  title: string;
  account: string;
  probability: number;
  expectedClose: string;
  value: number;
}

export interface Customer {
  id: string;
  name: string;
  segment: string;
  region: string;
  health: BadgeTone;
  recurringRevenue: number;
}

export interface Product {
  sku: string;
  name: string;
  category: string;
  stock: number;
  reorderPoint: number;
  unitPrice: number;
}

export interface StockMovement {
  reference: string;
  product: string;
  movementType: 'Receipt' | 'Delivery' | 'Adjustment';
  quantity: number;
  warehouse: string;
  date: string;
}

export interface Warehouse {
  code: string;
  name: string;
  city: string;
  utilization: number;
  status: BadgeTone;
}

export interface Invoice {
  number: string;
  customer: string;
  dueDate: string;
  amount: number;
  status: 'Draft' | 'Sent' | 'Paid' | 'Overdue';
}

export interface Payment {
  reference: string;
  customer: string;
  date: string;
  amount: number;
  method: string;
}

export interface LedgerEntry {
  account: string;
  debit: number;
  credit: number;
  period: string;
}
