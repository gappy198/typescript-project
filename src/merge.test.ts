import { merge } from './merge';

describe('merge function', () => {
  it('should merge three sorted arrays correctly', () => {
    const collection1 = [1, 3, 5, 7, 9];
    const collection2 = [10, 8, 6, 4, 2];
    const collection3 = [11, 12, 13, 14, 15];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });

  it('should merge arrays of different lengths correctly', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [10, 8, 6, 4, 2];
    const collection3 = [11, 12, 13, 14, 15];
    const expected = [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15];

    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });

  it('should merge empty arrays correctly', () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const collection3: number[] = [];
    const expected: number[] = [];

    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });
});
