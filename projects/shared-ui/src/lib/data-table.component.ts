import { Component, input } from '@angular/core';
import { BadgeTone, formatCurrency, formatDate, statusTone, TableColumn } from 'shared-core';
import { BadgeComponent } from './badge.component';

@Component({
  selector: 'ui-data-table',
  imports: [BadgeComponent],
  template: `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            @for (column of columns(); track column.label) {
              <th>{{ column.label }}</th>
            }
          </tr>
        </thead>
        <tbody>
          @for (row of rows(); track rowIndex; let rowIndex = $index) {
            <tr>
              @for (column of columns(); track column.label) {
                <td>
                  @if (column.type === 'badge') {
                    <ui-badge [tone]="toneFor(value(row, column))">{{ value(row, column) }}</ui-badge>
                  } @else {
                    {{ formatValue(row, column) }}
                  }
                </td>
              }
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: [
    `
      .table-wrap {
        overflow-x: auto;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        min-width: 42rem;
      }

      th,
      td {
        padding: 0.85rem 1rem;
        border-bottom: 1px solid #e2e8f0;
        text-align: left;
        vertical-align: middle;
        white-space: nowrap;
      }

      th {
        color: #64748b;
        font-size: 0.75rem;
        font-weight: 800;
        letter-spacing: 0;
        text-transform: uppercase;
        background: #f8fafc;
      }

      td {
        color: #1e293b;
        font-size: 0.9rem;
      }

      tr:last-child td {
        border-bottom: 0;
      }
    `,
  ],
})
export class DataTableComponent {
  readonly columns = input<TableColumn[]>([]);
  readonly rows = input<unknown[]>([]);

  protected value(row: unknown, column: TableColumn): unknown {
    return (row as Record<string, unknown>)[column.key];
  }

  protected formatValue(row: unknown, column: TableColumn): string {
    const cellValue = this.value(row, column);

    if (typeof cellValue === 'number' && column.type === 'currency') {
      return formatCurrency(cellValue);
    }

    if (typeof cellValue === 'string' && column.type === 'date') {
      return formatDate(cellValue);
    }

    if (typeof cellValue === 'number') {
      return cellValue.toLocaleString('en-US');
    }

    return String(cellValue);
  }

  protected toneFor(value: unknown): BadgeTone {
    return statusTone(String(value));
  }
}
