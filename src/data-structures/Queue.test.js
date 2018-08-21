import Queue from './Queue'

describe('Queue', () => {
  it('Should contain empty array', () => {
    const queue = new Queue()

    expect(queue.getItems()).toEqual([])
  })

  it('Should enqueue correctly', () => {
    const queue = new Queue()
    queue.enqueue('A')
    queue.enqueue('B')

    expect(queue.getItems()).toEqual(['A', 'B'])
  })

  it('Should dequeue correctly', () => {
    const queue = new Queue()
    queue.enqueue('A')
    queue.enqueue('B')
    const dequeuedItem = queue.dequeue()

    expect(queue.getItems()).toEqual(['B'])
    expect(dequeuedItem).toEqual('A')
  })

  it('Should check empty queue correctly', () => {
    const queue = new Queue()
    expect(queue.isEmpty()).toEqual(true)

    queue.enqueue('A')
    expect(queue.isEmpty()).toEqual(false)

    queue.dequeue()
    expect(queue.isEmpty()).toEqual(true)
  })
})
