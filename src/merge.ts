function merge(collection_1: number[], collection_2: number[], collection_3: number[]): void {

  let swap = true;
  while (swap) {
      swap = false;
      let i = 0;
      while (i < collection_1.length - 1) {
          if (collection_1[i] > collection_1[i + 1]) {
              let temp = collection_1[i];
              collection_1[i] = collection_1[i + 1];
              collection_1[i + 1] = temp;
              swap = true;
          }
          i++;
      }
      let j = 0;
      while (j < collection_3.length - 1) {
          if (collection_3[j] > collection_3[j + 1]) {
              let temp = collection_3[j];
              collection_3[j] = collection_3[j + 1];
              collection_3[j + 1] = temp;
              swap = true;
          }
          j++;
      }
  }

  let swapped = true;
  while (swapped) {
      swapped = false;
      let i = 0;
      while (i < collection_2.length - 1) {
          if (collection_2[i] < collection_2[i + 1]) {
              let temp = collection_2[i];
              collection_2[i] = collection_2[i + 1];
              collection_2[i + 1] = temp;
              swapped = true;
          }
          i++;
      }
  }
  console.log(collection_1, collection_2, collection_3);

  let result = collection_1.concat(collection_2, collection_3)
  let swappeds = true;
  while (swappeds) {
      swappeds = false;
      let i = 0;
      while (i < result.length - 1) {
          if (result[i] > result[i + 1]) {
              let temp = result[i];
              result[i] = result[i + 1];
              result[i + 1] = temp;
              swappeds = true;
          }
          i++;
      }
  }
  console.log(result);
}

merge([13, 16, 19, 10, 7, 4, 1], [2, 8, 5, 17, 15, 11], [20, 12, 14, 18, 9, 6, 3]);
