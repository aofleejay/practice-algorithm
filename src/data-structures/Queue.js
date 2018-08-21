class Queue {
  constructor() {
    this._items = []
  }

  getItems() {
    return this._items
  }

  enqueue(item) {
    this._items.push(item)
  }

  dequeue() {
    return this._items.shift()
  }

  isEmpty() {
    return this._items.length === 0
  }
}

export default Queue
