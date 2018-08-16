const Graph = require('./Graph')

const graph = new Graph()
 
graph.addVertex(0)
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addVertex(6)
graph.addVertex(7)
graph.addVertex(8)
 
graph.addEdge(0, 1)
graph.addEdge(0, 2)
graph.addEdge(0, 3)
graph.addEdge(1, 4)
graph.addEdge(1, 5)
graph.addEdge(2, 6)
graph.addEdge(2, 8)
graph.addEdge(3, 7)
graph.addEdge(7, 8)

graph.printAdjacencyList()

graph.bfs(0)
graph.dfs(0)
