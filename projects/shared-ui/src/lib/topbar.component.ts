import { Component, input } from '@angular/core';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'ui-topbar',
  imports: [ButtonComponent],
  template: `
    <header class="topbar">
      <div>
        <p>{{ eyebrow() }}</p>
        <h1>{{ title() }}</h1>
      </div>
      <div class="actions">
        <span class="status">Mock data only</span>
        <ui-button variant="secondary">Auth placeholder</ui-button>
      </div>
    </header>
  `,
  styles: [
    `
      .topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 1.25rem 1.5rem;
        border-bottom: 1px solid #e2e8f0;
        background: rgba(255, 255, 255, 0.86);
        backdrop-filter: blur(14px);
      }

      p,
      h1 {
        margin: 0;
      }

      p {
        color: #0f766e;
        font-size: 0.75rem;
        font-weight: 900;
        letter-spacing: 0;
        text-transform: uppercase;
      }

      h1 {
        color: #0f172a;
        font-size: clamp(1.35rem, 2vw, 1.75rem);
        line-height: 1.2;
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .status {
        color: #475569;
        font-size: 0.85rem;
        font-weight: 700;
      }

      @media (max-width: 700px) {
        .topbar,
        .actions {
          align-items: flex-start;
          flex-direction: column;
        }
      }
    `,
  ],
})
export class TopbarComponent {
  readonly eyebrow = input('Angular 21 micro-frontends');
  readonly title = input('ERP/CRM Control Center');
}
