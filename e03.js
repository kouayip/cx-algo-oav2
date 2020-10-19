function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min != i) {
      const help = array[i];
      array[i] = array[min];
      array[min] = help;
    }
  }
}

const tab = [1, 3, 6, 2, 9, 0, 4, 6];
selectionSort(tab);
console.log(tab);
