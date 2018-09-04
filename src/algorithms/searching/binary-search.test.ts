import binarySearch from './binary-search'

describe('Binary search', () => {
  it('Should return correct index when element has found', () => {
    const sortedArray = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    const elementToFind = 10

    const foundIndex = binarySearch(sortedArray, elementToFind, 0, sortedArray.length - 1)

    expect(foundIndex).toEqual(5)
  })

  it('Should return -1 when element not found', () => {
    const sortedArray = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    const elementToFind = 50

    const foundIndex = binarySearch(sortedArray, elementToFind, 0, sortedArray.length - 1)

    expect(foundIndex).toEqual(-1)
  })
})
