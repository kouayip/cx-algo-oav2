function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const help = array[i];
        array[i] = array[j];
        array[j] = help;
      }
    }
  }

  return array;
}

console.log(bubbleSort([1, 3, 6, 2, 9, 0, 4, 6]));
