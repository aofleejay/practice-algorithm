const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const findNumber = 9

const binarySearch = (array, element, leftIndex, rightIndex) => {
  const middleIndex = Math.floor((rightIndex + leftIndex) / 2)

  if (leftIndex > rightIndex) {
    return -1
  } else if (element === array[middleIndex]) {
    return middleIndex
  } else {
    if (element < array[middleIndex]) {
      return binarySearch(array, element, leftIndex, middleIndex - 1)
    } else {
      return binarySearch(array, element, middleIndex + 1, rightIndex)
    }
  }
}

const index = binarySearch(numbers, findNumber, 0, numbers.length - 1)
console.log(`Found element at index ${index}.`)
