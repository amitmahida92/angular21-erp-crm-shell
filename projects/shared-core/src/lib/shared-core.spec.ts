import { remoteDefinitions } from './mock-data';
import { formatCurrency } from './utils';

describe('shared-core', () => {
  it('exposes remote definitions and formatting helpers', () => {
    expect(remoteDefinitions).toHaveLength(3);
    expect(formatCurrency(1200)).toBe('$1,200');
  });
});
