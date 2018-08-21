class Stack {
  constructor() {
    this._items = []
  }

  getItems() {
    return this._items
  }

  push(item) {
    this._items.push(item)
  }

  pop() {
    return this._items.pop()
  }

  isEmpty() {
    return this._items.length === 0
  }
}

export default Stack
