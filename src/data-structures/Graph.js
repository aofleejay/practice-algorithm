import Queue from './Queue'

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
    const queue = new Queue()

    queue.enqueue(startVertex)
    visitedVertices[startVertex] = true

    while (!queue.isEmpty()) {
      const currentVertex = queue.dequeue()

      const childrenVertices = this._adjacencyList[currentVertex]
      childrenVertices.forEach((nextVertex) => {
        if (!visitedVertices[nextVertex]) {
          queue.enqueue(nextVertex)
          visitedVertices[nextVertex] = true
        }
      })
    }
  }

  dfs(startVertex) {
    const visitedVertices = {}

    this.dfsRecursive(startVertex, visitedVertices)
  }

  dfsRecursive(currentVertex, visitedVertices) {
    visitedVertices[currentVertex] = true // eslint-disable-line

    const childrenVertices = this._adjacencyList[currentVertex]
    childrenVertices.forEach((nextVertex) => {
      if (!visitedVertices[nextVertex]) {
        this.dfsRecursive(nextVertex, visitedVertices)
      }
    })
  }
}

export default Graph
