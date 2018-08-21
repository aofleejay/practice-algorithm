const numbers = [5, 9, 3, 4, 2, 8, 1, 7, 0, 6]

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let j, key = array[i]
    for (j = i - 1; j >= 0 && key < array[j] ; j--) {
      array[j + 1] = array[j]
    }
    array[j + 1] = key
  }
}

insertionSort(numbers)
console.log(`Sorted numbers: ${numbers.join()}.`)
