class Graph {
  constructor() {
    this._adjacencyList = {}
  }

  addVertex(vertex) {
    this._adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2) {
    this._adjacencyList[vertex1].push(vertex2)
    this._adjacencyList[vertex2].push(vertex1)
  }

  printAdjacencyList() {
    for (let vertexKey in this._adjacencyList) {
      console.log(`${vertexKey} -> ${this._adjacencyList[vertexKey].toString()}`)
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

      const childrenVertices = this._adjacencyList[currentVertex]
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

    const childrenVertices = this._adjacencyList[currentVertex]
      for (let i in childrenVertices) {
        const nextVertex = childrenVertices[i]

        if (!visitedVertices[nextVertex]) {
          this.dfsRecursive(nextVertex, visitedVertices)
        }
    }
  }
}

module.exports = Graph
