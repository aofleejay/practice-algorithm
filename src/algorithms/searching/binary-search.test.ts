import binarySearch from './binary-search'

describe('Binary search', () => {
  it('Should return correct index when target (number) has found', () => {
    const sortedArray = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    const target = 10

    const foundIndex = binarySearch(
      sortedArray,
      target,
      0,
      sortedArray.length - 1,
    )

    expect(foundIndex).toEqual(5)
  })

  it('Should return -1 when element not found', () => {
    const sortedArray = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    const target = 50

    const foundIndex = binarySearch(
      sortedArray,
      target,
      0,
      sortedArray.length - 1,
    )

    expect(foundIndex).toEqual(-1)
  })

  it('Should return correct index when target (string) has found', () => {
    const sortedArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const target = 'd'

    const foundIndex = binarySearch(
      sortedArray,
      target,
      0,
      sortedArray.length - 1,
    )

    expect(foundIndex).toEqual(3)
  })
})
