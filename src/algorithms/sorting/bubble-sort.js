const bubbleSort = (array) => {
  for (let i = 0, temp; i < array.length; i += 1) {
    for (let j = 0; j < array.length - i; j += 1) {
      if (array[j] > array[j + 1]) {
        temp = array[j + 1]
        array[j + 1] = array[j] // eslint-disable-line
        array[j] = temp // eslint-disable-line
      }
    }
  }
}

export default bubbleSort
