function bubbleSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let sorted = false;
    for (let j = 0; j < i; j++) {
      if (array[j + 1] < array[j]) {
        const help = array[j];
        array[j] = array[j + 1];
        array[j + 1] = help;
        sorted = true;
      }
    }
    if (!sorted) break;
  }
}

const tab = [1, 3, 6, 2, 9, 0, 4, 6];
bubbleSort(tab);
console.log(tab);
