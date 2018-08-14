const numbers = [9, 5, 3, 4, 2, 8, 1, 7, 0, 6]

const bubbleSort = (array) => {
  let temp
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j + 1]
        array[j + 1] = array[j]
        array[j] = temp
      }
    }
  }
}

bubbleSort(numbers)
console.log(`Sorted numbers: ${numbers.join()}.`)
