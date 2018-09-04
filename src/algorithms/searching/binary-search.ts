const binarySearch = (
  sortedArray: number[],
  element: number,
  leftIndex: number,
  rightIndex: number,
): number => {
  const middleIndex = Math.floor((rightIndex + leftIndex) / 2)

  if (leftIndex > rightIndex) {
    return -1
  } if (element === sortedArray[middleIndex]) {
    return middleIndex
  }
  if (element < sortedArray[middleIndex]) {
    return binarySearch(sortedArray, element, leftIndex, middleIndex - 1)
  }
  return binarySearch(sortedArray, element, middleIndex + 1, rightIndex)
}

export default binarySearch
