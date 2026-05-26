import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { RemoteDefinition } from 'shared-core';
import { RemoteFallbackComponent } from '../remote-fallback/remote-fallback.component';

export async function loadRemoteRoutes(remote: RemoteDefinition): Promise<Routes> {
  try {
    const exposed = await loadRemoteModule<{
      REMOTE_ROUTES: Routes;
    }>(remote.remoteName, remote.exposedModule);

    return exposed.REMOTE_ROUTES;
  } catch (error) {
    console.error(`Failed to load ${remote.remoteName}`, error);

    return [
      {
        path: '',
        component: RemoteFallbackComponent,
        data: {
          remote,
          errorMessage: error instanceof Error ? error.message : 'Unknown federation loading error',
        },
      },
    ];
  }
}
