import Queue from '../queue/Queue'

type Vertex = number | string
interface AdjacencyList {
  [key: string]: Vertex[]
}
interface VisitedVertices {
  [key: string]: boolean
}

class Graph {
  private adjacencyList: AdjacencyList

  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex: Vertex) {
    this.adjacencyList[vertex] = []
  }

  addEdge(vertex1: Vertex, vertex2: Vertex) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }

  getAdjacencyList() {
    return this.adjacencyList
  }

  bfs(startVertex: Vertex) {
    const visitedVertices: VisitedVertices = {}
    const queue = new Queue()

    queue.enqueue(startVertex)
    visitedVertices[startVertex] = true

    while (!queue.isEmpty()) {
      const currentVertex = queue.dequeue()

      const childrenVertices = this.adjacencyList[currentVertex]
      childrenVertices.forEach((nextVertex: Vertex) => {
        if (!visitedVertices[nextVertex]) {
          queue.enqueue(nextVertex)
          visitedVertices[nextVertex] = true
        }
      })
    }
  }

  dfs(startVertex: Vertex) {
    const visitedVertices: VisitedVertices = {}

    this.dfsRecursive(startVertex, visitedVertices)
  }

  dfsRecursive(currentVertex: Vertex, visitedVertices: Vertex) {
    visitedVertices[currentVertex] = true

    const childrenVertices = this.adjacencyList[currentVertex]
    childrenVertices.forEach((nextVertex: Vertex) => {
      if (!visitedVertices[nextVertex]) {
        this.dfsRecursive(nextVertex, visitedVertices)
      }
    })
  }
}

export default Graph
