import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
    <button class="button" [class]="variant()" [attr.type]="type()" [disabled]="disabled()">
      <ng-content />
    </button>
  `,
  styles: [
    `
      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.45rem;
        min-height: 2.5rem;
        padding: 0 0.95rem;
        border: 1px solid transparent;
        border-radius: 0.5rem;
        font: inherit;
        font-weight: 700;
        cursor: pointer;
        transition:
          border-color 140ms ease,
          background 140ms ease,
          transform 140ms ease;
      }

      .button:disabled {
        cursor: not-allowed;
        opacity: 0.55;
      }

      .button:not(:disabled):hover {
        transform: translateY(-1px);
      }

      .primary {
        background: #0f766e;
        color: white;
      }

      .secondary {
        background: #ffffff;
        border-color: #cbd5e1;
        color: #0f172a;
      }

      .ghost {
        background: transparent;
        color: #334155;
      }
    `,
  ],
})
export class ButtonComponent {
  readonly variant = input<'primary' | 'secondary' | 'ghost'>('primary');
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly disabled = input(false);
}
