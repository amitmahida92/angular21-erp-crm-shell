import { Component } from '@angular/core';
import { CardComponent } from 'shared-ui';

@Component({
  selector: 'app-auth-placeholder',
  imports: [CardComponent],
  template: `
    <ui-card title="Auth placeholder" subtitle="Intentionally minimal for the front-end-only article">
      <div class="card-body auth">
        <p>
          This boilerplate keeps authentication, authorization, tenants, and token exchange
          out of scope for now. Future Java microservice articles can add an identity
          provider, API gateway, and role-aware navigation without reshaping the shell.
        </p>
      </div>
    </ui-card>
  `,
  styles: [
    `
      .auth {
        max-width: 44rem;
        color: #475569;
        line-height: 1.7;
      }

      p {
        margin: 0;
      }
    `,
  ],
})
export class AuthPlaceholderComponent {}
