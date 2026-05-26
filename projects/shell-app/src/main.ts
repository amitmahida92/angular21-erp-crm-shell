import { initFederation } from '@angular-architects/native-federation';
import { environment } from './environments/environment';

initFederation(environment.remoteEntries)
  .catch((err) => console.error(err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
