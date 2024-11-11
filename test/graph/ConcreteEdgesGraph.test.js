// ConcreteEdgesGraph.test.js
const ConcreteEdgesGraph = require('../../src/graph/ConcreteEdgesGraph.js');

let graph;

beforeEach(() => {
  graph = new ConcreteEdgesGraph();
});

test('adds vertices to the graph', () => {
  expect(graph.add('A')).toBe(true);
  expect(graph.add('A')).toBe(false);
  expect(graph.vertices.has('A')).toBe(true);
});

test('sets edges and updates weight', () => {
  graph.set('A', 'B', 5);
  expect(graph.sources('B')['A']).toBe(5);
  expect(graph.targets('A')['B']).toBe(5);
  graph.set('A', 'B', 10);
  expect(graph.targets('A')['B']).toBe(10);
});

test('removes a vertex and its edges', () => {
  graph.set('A', 'B', 5);
  graph.remove('A');
  expect(graph.vertices.has('A')).toBe(false);
  expect(graph.sources('B')['A']).toBeUndefined();
});

test('toString() returns readable output', () => {
  graph.set('A', 'B', 5);
  expect(graph.toString()).toContain('Vertices: A, B');
  expect(graph.toString()).toContain('A -> B [weight=5]');
});
