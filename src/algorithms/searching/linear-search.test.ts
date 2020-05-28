import linearSearch from './linear-search'

describe('Linear search', () => {
  it('Should return correct index when target element (number) has found', () => {
    const array = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    const target = 10

    const foundIndex = linearSearch(array, target)

    expect(foundIndex).toEqual(5)
  })

  it('Should return -1 when element not found', () => {
    const array = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    const target = 50

    const foundIndex = linearSearch(array, target)

    expect(foundIndex).toEqual(-1)
  })

  it('Should return correct index when target element (string) has found', () => {
    const array = ['e', 'd', 'c', 'a', 'b']
    const target = 'c'

    const foundIndex = linearSearch<string>(array, target)

    expect(foundIndex).toEqual(2)
  })
})
