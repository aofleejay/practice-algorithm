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

  getAdjacencyList() {
    return this._adjacencyList
  }

  bfs(startVertex) {
    const visitedVertices = {}
    const queue = []

    queue.push(startVertex)
    visitedVertices[startVertex] = true

    while (queue.length !== 0) {
      const currentVertex = queue.shift()

      const childrenVertices = this._adjacencyList[currentVertex]
      for (const i in childrenVertices) {
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

    const childrenVertices = this._adjacencyList[currentVertex]
    for (const i in childrenVertices) {
      const nextVertex = childrenVertices[i]

      if (!visitedVertices[nextVertex]) {
        this.dfsRecursive(nextVertex, visitedVertices)
      }
    }
  }
}

export default Graph
