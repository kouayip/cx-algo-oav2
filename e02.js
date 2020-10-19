function insertionSort(tab) {
  for (let i = 1; i < tab.length; i++) {
    const x = tab[i];
    let j = i;
    while (j > 0 && tab[j - 1] > x) {
      tab[j] = tab[j - 1];
      j--;
    }
    tab[j] = x;
  }
}

const tab = [1, 3, 6, 2, 9, 0, 4, 6];
insertionSort(tab);
console.log(tab);
