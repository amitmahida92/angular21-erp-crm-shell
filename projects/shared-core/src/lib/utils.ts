import { BadgeTone } from './types';

export function formatCurrency(value: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDate(value: string): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value));
}

export function statusTone(status: string): BadgeTone {
  const normalized = status.toLowerCase();

  if (['paid', 'won', 'receipt', 'qualified'].includes(normalized)) {
    return 'success';
  }

  if (['overdue', 'delivery'].includes(normalized)) {
    return 'danger';
  }

  if (['draft', 'proposal', 'adjustment'].includes(normalized)) {
    return 'warning';
  }

  return 'info';
}

export function repoRelativePath(repoName: string, path: string): string {
  const cleanRepo = repoName.replace(/^\/|\/$/g, '');
  const cleanPath = path.replace(/^\/|\/$/g, '');

  return `/${cleanRepo}/${cleanPath}`;
}
