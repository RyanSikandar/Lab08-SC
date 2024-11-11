// Vertex.test.js
const Vertex = require('../../src/graph/Vertex.js');

test('creates a Vertex and updates label', () => {
  const vertex = new Vertex('A');
  expect(vertex.label).toBe('A');
  vertex.updateLabel('B');
  expect(vertex.label).toBe('B');
});

test('Vertex toString() provides readable output', () => {
  const vertex = new Vertex('A');
  expect(vertex.toString()).toBe('Vertex(A)');
});
