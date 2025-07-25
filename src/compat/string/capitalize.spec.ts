import { describe, expect, expectTypeOf, it } from 'vitest';
import type { capitalize as capitalizeLodash } from 'lodash';
import { capitalize } from '../../string/capitalize';

describe('capitalize', () => {
  it('should capitalize the first character of a string', () => {
    expect(capitalize('fred')).toBe('Fred');
    expect(capitalize('Fred')).toBe('Fred');
    expect(capitalize(' fred')).toBe(' fred');
  });

  it('should match the type of lodash', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expectTypeOf(capitalize).toEqualTypeOf<typeof capitalizeLodash>();
  });
});
