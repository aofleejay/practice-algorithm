import insertionSort from './insertion-sort'

describe('Insertion sort', () => {
  it('Should sort correctly', () => {
    const numbers = [9, 5, 3, 4, 2, 8, 1, 7, 0, 6]

    insertionSort(numbers)

    expect(numbers).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
