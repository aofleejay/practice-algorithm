import Stack from './Stack'

describe('Stack', () => {
  it('Should contain empty array when stack created', () => {
    const stack = new Stack()

    expect(stack.getItems()).toEqual([])
  })

  it('Should push item correctly', () => {
    const stack = new Stack()
    stack.push('A')
    stack.push('B')

    expect(stack.getItems()).toEqual(['A', 'B'])
  })

  it('Should return top most item when pop from stack', () => {
    const stack = new Stack()
    stack.push('A')
    stack.push('B')
    const popedItem = stack.pop()

    expect(stack.getItems()).toEqual(['A'])
    expect(popedItem).toEqual('B')
  })

  it('Should return null when pop empty stack', () => {
    const stack = new Stack()
    const popedItem = stack.pop()

    expect(stack.getItems()).toEqual([])
    expect(popedItem).toEqual(null)
  })

  it('Should check empty stack correctly', () => {
    const stack = new Stack()
    expect(stack.isEmpty()).toEqual(true)

    stack.push('A')
    expect(stack.isEmpty()).toEqual(false)

    stack.pop()
    expect(stack.isEmpty()).toEqual(true)
  })

  it('Should return top most stack when peek into stack', () => {
    const stack = new Stack()
    stack.push('A')
    stack.push('B')

    expect(stack.peek()).toEqual('B')
  })

  it('Should return null when peek empty stack', () => {
    const stack = new Stack()

    expect(stack.peek()).toEqual(null)
  })
})
