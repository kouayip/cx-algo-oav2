function selectionSort(tab) {
  for (let i = 0; i < tab.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < tab.length; j++) {
      if (tab[j] < tab[min]) {
        min = j;
      }
    }
    if (min != i) {
      const help = tab[i];
      tab[i] = tab[min];
      tab[min] = help;
    }
  }
}

const tab = [1, 3, 6, 2, 9, 0, 4, 6];
selectionSort(tab);
console.log(tab);
