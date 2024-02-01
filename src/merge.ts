export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  const mergedArray: number[] = [];
  let index1 = 0;
  let index2 = 0;
  let index3 = 0;

  while (index1 < collection1.length || index2 < collection2.length || index3 < collection3.length) {
    const value1 = index1 < collection1.length ? collection1[index1] : Number.MAX_VALUE;
    const value2 = index2 < collection2.length ? collection2[index2] : Number.MIN_VALUE;
    const value3 = index3 < collection3.length ? collection3[index3] : Number.MAX_VALUE;

    const minValue = Math.min(value1, value2, value3);

    if (minValue === value1) {
      mergedArray.push(value1);
      index1++;
    } else if (minValue === value2) {
      mergedArray.push(value2);
      index2++;
    } else {
      mergedArray.push(value3);
      index3++;
    }
  }

  return mergedArray;
}
