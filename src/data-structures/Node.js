class Node {
  constructor(value, next = null) {
    this._value = value
    this._next = next
  }

  getValue() {
    return this._value
  }

  getNextNode() {
    return this._next
  }
}

export default Node
