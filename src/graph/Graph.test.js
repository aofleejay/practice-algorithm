const Graph = require('./Graph')

describe('Graph representation', () => {
  it('Should return correct adjacency list', () => {
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

    expect(graph.getAdjacencyList()).toEqual({
      '0': [1, 2, 3],
      '1': [0, 4, 5],
      '2': [0, 6, 8],
      '3': [0, 7],
      '4': [1],
      '5': [1],
      '6': [2],
      '7': [3, 8],
      '8': [2, 7],
    })
  })
})
