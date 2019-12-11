import Queue from './Queue'

describe('Queue', () => {
  it('Should contain empty array when queue created', () => {
    const queue = new Queue()

    expect(queue.getItems()).toEqual([])
  })

  it('Should enqueue correctly', () => {
    const queue = new Queue()
    queue.enqueue('A')
    queue.enqueue('B')

    expect(queue.getItems()).toEqual(['A', 'B'])
  })

  it('Should return first item when dequeued', () => {
    const queue = new Queue()
    queue.enqueue('A')
    queue.enqueue('B')
    const dequeuedItem = queue.dequeue()

    expect(queue.getItems()).toEqual(['B'])
    expect(dequeuedItem).toEqual('A')
  })

  it('Should return undefined when dequeue empty queue', () => {
    const queue = new Queue()
    const dequeuedItem = queue.dequeue()

    expect(queue.getItems()).toEqual([])
    expect(dequeuedItem).toEqual(undefined)
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
