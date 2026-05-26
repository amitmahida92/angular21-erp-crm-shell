import { Component, input } from '@angular/core';
import { BadgeTone } from 'shared-core';

@Component({
  selector: 'ui-badge',
  template: '<span class="badge" [class]="tone()"><ng-content /></span>',
  styles: [
    `
      .badge {
        display: inline-flex;
        align-items: center;
        width: fit-content;
        min-height: 1.625rem;
        padding: 0.2rem 0.625rem;
        border-radius: 999px;
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1;
        white-space: nowrap;
      }

      .success {
        color: #166534;
        background: #dcfce7;
      }

      .warning {
        color: #854d0e;
        background: #fef3c7;
      }

      .danger {
        color: #991b1b;
        background: #fee2e2;
      }

      .info {
        color: #075985;
        background: #e0f2fe;
      }

      .neutral {
        color: #475569;
        background: #f1f5f9;
      }
    `,
  ],
})
export class BadgeComponent {
  readonly tone = input<BadgeTone>('neutral');
}
