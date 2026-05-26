import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from 'shared-core';

@Component({
  selector: 'ui-sidebar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <aside class="sidebar">
      <a class="brand" routerLink="/">
        <span class="brand-mark">A21</span>
        <span>
          <strong>{{ productName() }}</strong>
          <small>ERP/CRM workspace</small>
        </span>
      </a>

      <nav aria-label="Primary navigation">
        @for (item of items(); track item.path) {
          <a [routerLink]="item.path" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: item.path === '/' }">
            <span class="icon">{{ item.icon }}</span>
            <span>
              <strong>{{ item.label }}</strong>
              @if (item.description) {
                <small>{{ item.description }}</small>
              }
            </span>
          </a>
        }
      </nav>
    </aside>
  `,
  styles: [
    `
      .sidebar {
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 17rem;
        height: 100vh;
        padding: 1.25rem;
        border-right: 1px solid #e2e8f0;
        background: #ffffff;
      }

      .brand,
      nav a {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        color: #0f172a;
        text-decoration: none;
      }

      .brand-mark,
      .icon {
        display: grid;
        place-items: center;
        width: 2.25rem;
        height: 2.25rem;
        flex: 0 0 2.25rem;
        border-radius: 0.5rem;
        background: #0f766e;
        color: #ffffff;
        font-size: 0.78rem;
        font-weight: 900;
      }

      .brand small,
      nav small {
        display: block;
        color: #64748b;
        font-size: 0.75rem;
        line-height: 1.3;
      }

      nav {
        display: grid;
        gap: 0.35rem;
      }

      nav a {
        padding: 0.7rem;
        border-radius: 0.5rem;
      }

      nav a.active,
      nav a:hover {
        background: #ecfeff;
      }

      nav a.active .icon,
      nav a:hover .icon {
        background: #155e75;
      }

      @media (max-width: 900px) {
        .sidebar {
          position: relative;
          width: 100%;
          height: auto;
          border-right: 0;
          border-bottom: 1px solid #e2e8f0;
        }

        nav {
          grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
        }
      }
    `,
  ],
})
export class SidebarComponent {
  readonly productName = input('Aster ERP');
  readonly items = input<NavItem[]>([]);
}
