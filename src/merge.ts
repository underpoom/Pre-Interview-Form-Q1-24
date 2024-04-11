export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  const result: number[] = [];
  let i = 0;
  let k = 0;

  while (i < collection1.length && k < collection3.length) {
    if (collection1[i] <= collection3[k]) {
      result.push(collection1[i]);
      i++;
    } else {
      result.push(collection3[k]);
      k++;
    }
  }

  while (i < collection1.length) {
    result.push(collection1[i]);
    i++;
  }

  while (k < collection3.length) {
    result.push(collection3[k]);
    k++;
  }

  for (let m = 0; m < collection2.length; m++) {
    let insertionIndex = 0;

    while (
      insertionIndex < result.length &&
      collection2[m] > result[insertionIndex]
    ) {
      insertionIndex++;
    }
    result.splice(insertionIndex, 0, collection2[m]);
  }

  return result;
}
