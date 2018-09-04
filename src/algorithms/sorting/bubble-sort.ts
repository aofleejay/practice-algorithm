const bubbleSort = (array: number[]): void => {
  for (let i = 0, temp; i < array.length; i += 1) {
    for (let j = 0; j < array.length - i; j += 1) {
      if (array[j] > array[j + 1]) {
        temp = array[j + 1]
        array[j + 1] = array[j]
        array[j] = temp
      }
    }
  }
}

export default bubbleSort
