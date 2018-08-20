/*
  How to representing graphs.
  1.Edge list
  2.Adjacency matrix
  3.Adjacency list

  Example below
  1.Undirectional graph
    - 3 nodes [0, 1, 2]
    - 3 edges 0 <-> 1, 1 <-> 2, 2 <-> 0
  2.Directional graph
    - 3 nodes [0, 1, 2]
    - 3 edges 0 -> 1, 1 -> 2, 2 -> 0
*/

// Undirectional edge list
const edgeListUndirectional = [
  [0, 1],
  [1, 2],
  [2, 0]
]

// Undirectional adjacency matrix
const adjacencyMatrixUndirectional = [
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 0],
]

// Undirectional adjacency list
const adjacencyListUndirectional = [
  [1, 2],
  [0, 2],
  [0, 1],
]

// Directional edge list
const edgeListDirectional = [
  [0, 1],
  [1, 2],
  [2, 0]
]

// Directional adjacency matrix
const adjacencyMatrixDirectional = [
  [0, 0, 1],
  [1, 0, 0],
  [0, 1, 0],
]

// Directional adjacency list
const adjacencyListDirectional = [
  [1],
  [2],
  [0],
]
