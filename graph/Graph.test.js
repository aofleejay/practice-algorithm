const Graph = require('./Graph')

const graph = new Graph()
 
graph.addVertex(0)
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
 
graph.addEdge(0, 1)
graph.addEdge(1, 2)
graph.addEdge(1, 3)
graph.addEdge(1, 4)
graph.addEdge(2, 4)
graph.addEdge(3, 4)

graph.printAdjacencyList()

graph.bfs(0)
graph.dfs(0)
