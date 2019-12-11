class Queue<Item> {
  private items: Item[]
  constructor() {
    this.items = []
  }

  getItems(): Item[] {
    return this.items
  }

  enqueue(item: Item): void {
    this.items.push(item)
  }

  dequeue(): Item | undefined {
    if (this.isEmpty()) {
      return undefined
    }

    return this.items.shift()
  }

  isEmpty(): Boolean {
    return this.items.length === 0
  }
}

export default Queue
