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

  peek() {
    if (this.isEmpty()) {
      return null
    }

    return this._items[this._items.length - 1]
  }

  isEmpty() {
    return this._items.length === 0
  }
}

export default Stack
