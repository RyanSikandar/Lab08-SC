// ConcreteVerticesGraph.test.js
const ConcreteVerticesGraph = require('../../src/graph/ConcreteVerticesGraph.js');

let graph;

beforeEach(() => {
  graph = new ConcreteVerticesGraph();
});

test('removes a vertex', () => {
  graph.add('A');
  expect(graph.remove('A')).toBe(true);
  expect(graph.remove('A')).toBe(false); // No longer exists
  expect(graph.vertices()).toEqual([]); // No vertices left
});

test('toString() returns readable output', () => {
  graph.add('A');
  graph.add('B');
  expect(graph.toString()).toBe('Vertices: Vertex(A), Vertex(B)');
});
