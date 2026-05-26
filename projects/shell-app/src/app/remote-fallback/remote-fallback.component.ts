import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RemoteDefinition } from 'shared-core';
import { BadgeComponent, CardComponent } from 'shared-ui';

@Component({
  selector: 'app-remote-fallback',
  imports: [BadgeComponent, CardComponent],
  template: `
    <ui-card [title]="remote.displayName + ' remote unavailable'" subtitle="The shell stayed alive and rendered this fallback.">
      <div class="card-body fallback">
        <ui-badge tone="warning">Federation boundary</ui-badge>
        <p>
          Could not load <strong>{{ remote.remoteName }}</strong> from the configured
          remote entry. Start the remote locally or check the GitHub Pages path.
        </p>
        <code>{{ remote.localUrl }}</code>
        <small>{{ errorMessage }}</small>
      </div>
    </ui-card>
  `,
  styles: [
    `
      .fallback {
        display: grid;
        gap: 0.85rem;
        max-width: 42rem;
        color: #475569;
      }

      p {
        margin: 0;
      }

      code {
        display: block;
        overflow-x: auto;
        padding: 0.75rem;
        border-radius: 0.5rem;
        background: #0f172a;
        color: #e2e8f0;
      }

      small {
        color: #991b1b;
      }
    `,
  ],
})
export class RemoteFallbackComponent {
  private readonly route = inject(ActivatedRoute);
  protected readonly remote = this.route.snapshot.data['remote'] as RemoteDefinition;
  protected readonly errorMessage = this.route.snapshot.data['errorMessage'] as string;
}
