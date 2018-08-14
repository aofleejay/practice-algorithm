const numbers = [5, 9, 3, 4, 2, 8, 1, 7, 0, 6]
const findNumber = 6

const linearSearch = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (element === array[i]) {
      return i
    }
  }
  
  return -1
}

const index = linearSearch(numbers, findNumber)
console.log(`Found element at index ${index}.`)
