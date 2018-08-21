const linearSearch = (array, element) => {
  for (let i = 0; i < array.length; i += 1) {
    if (element === array[i]) {
      return i
    }
  }

  return -1
}

export default linearSearch
