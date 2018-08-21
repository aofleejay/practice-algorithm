import Stack from './Stack'

describe('Stack', () => {
  it('Should contain empty array', () => {
    const stack = new Stack()

    expect(stack.getItems()).toEqual([])
  })

  it('Should push correctly', () => {
    const stack = new Stack()
    stack.push('A')
    stack.push('B')

    expect(stack.getItems()).toEqual(['A', 'B'])
  })

  it('Should dequeue correctly', () => {
    const stack = new Stack()
    stack.push('A')
    stack.push('B')
    const popedItem = stack.pop()

    expect(stack.getItems()).toEqual(['A'])
    expect(popedItem).toEqual('B')
  })

  it('Should check empty stack correctly', () => {
    const stack = new Stack()
    expect(stack.isEmpty()).toEqual(true)

    stack.push('A')
    expect(stack.isEmpty()).toEqual(false)

    stack.pop()
    expect(stack.isEmpty()).toEqual(true)
  })
})
