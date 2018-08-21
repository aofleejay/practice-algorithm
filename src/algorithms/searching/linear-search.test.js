import linearSearch from './linear-search'

describe('Linear search', () => {
  it('Should return correct index when element has found', () => {
    const array = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    const elementToFind = 10

    const foundIndex = linearSearch(array, elementToFind)

    expect(foundIndex).toEqual(5)
  })

  it('Should return -1 when element not found', () => {
    const array = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    const elementToFind = 50

    const foundIndex = linearSearch(array, elementToFind)

    expect(foundIndex).toEqual(-1)
  })
})
