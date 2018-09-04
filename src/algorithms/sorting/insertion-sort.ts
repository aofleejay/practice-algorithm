const insertionSort = (array: number[]): void => {
  for (let i = 1, j; i < array.length; i += 1) {
    const key = array[i]
    for (j = i - 1; j >= 0 && key < array[j]; j -= 1) {
      array[j + 1] = array[j]
    }
    array[j + 1] = key
  }
}

export default insertionSort
