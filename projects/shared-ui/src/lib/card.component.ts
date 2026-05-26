import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-card',
  template: `
    <section class="card">
      @if (title() || subtitle()) {
        <header class="card-header">
          @if (title()) {
            <h2>{{ title() }}</h2>
          }
          @if (subtitle()) {
            <p>{{ subtitle() }}</p>
          }
        </header>
      }
      <ng-content />
    </section>
  `,
  styles: [
    `
      .card {
        border: 1px solid #e2e8f0;
        border-radius: 0.5rem;
        background: #ffffff;
        box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
      }

      .card-header {
        display: grid;
        gap: 0.25rem;
        padding: 1rem 1rem 0;
      }

      h2 {
        margin: 0;
        color: #0f172a;
        font-size: 1rem;
        line-height: 1.3;
      }

      p {
        margin: 0;
        color: #64748b;
        font-size: 0.875rem;
      }

      :host ::ng-deep .card-body {
        padding: 1rem;
      }
    `,
  ],
})
export class CardComponent {
  readonly title = input('');
  readonly subtitle = input('');
}
