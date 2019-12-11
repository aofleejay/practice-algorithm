class Stack<Item> {
  private items: Item[]
  constructor() {
    this.items = []
  }

  getItems(): Item[] {
    return this.items
  }

  push(item: Item): void {
    this.items.push(item)
  }

  pop(): Item | undefined {
    return this.items.pop()
  }

  peek(): Item | undefined {
    return this.items[this.items.length - 1]
  }

  isEmpty(): Boolean {
    return this.items.length === 0
  }
}

export default Stack
