class Graph {
  constructor() {
    this._adjacencyList = new Map()
  }

  addVertex(vertext) {
    this._adjacencyList.set(vertext, [])
  }

  addEdge(vertex1, vertext2) {
    this._adjacencyList.get(vertex1).push(vertext2)
    this._adjacencyList.get(vertext2).push(vertex1)
  }

  printAdjacencyList() {
    for (let [vertexKey, adjacencyList] of this._adjacencyList) {
      console.log(`${vertexKey} -> ${adjacencyList.toString()}`)
    }
  }

  bfs(startVertex) {
    const visitedVertices = {}
    const queue = []

    queue.push(startVertex)
    visitedVertices[startVertex] = true

    while (queue.length !== 0) {
      const currentVertex = queue.shift()
      console.log(currentVertex)

      const childrenVertices = this._adjacencyList.get(currentVertex)
      for (let i in childrenVertices) {
        const nextVertex = childrenVertices[i]

        if (!visitedVertices[nextVertex]) {
          queue.push(nextVertex)
          visitedVertices[nextVertex] = true
        }
      }
    }
  }

  dfs(startVertex) {
    const visitedVertices = {}

    this.dfsRecursive(startVertex, visitedVertices)
  }

  dfsRecursive(currentVertex, visitedVertices) {
    visitedVertices[currentVertex] = true
    console.log(currentVertex)

    const childrenVertices = this._adjacencyList.get(currentVertex)
      for (let i in childrenVertices) {
        const nextVertex = childrenVertices[i]

        if (!visitedVertices[nextVertex]) {
          this.dfsRecursive(nextVertex, visitedVertices)
        }
    }
  }
}

module.exports = Graph
