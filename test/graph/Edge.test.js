const Edge = require('../../src/graph/Edge.js');

test('creates an Edge and validates immutability', () => {
  const edge = new Edge('A', 'B', 10);
  expect(edge.source).toBe('A');
  expect(edge.target).toBe('B');
  expect(edge.weight).toBe(10);
});

test('throws an error for non-positive weight', () => {
  expect(() => new Edge('A', 'B', 0)).toThrow("Edge weight must be positive");
});

test('Edge toString() provides readable output', () => {
  const edge = new Edge('A', 'B', 10);
  expect(edge.toString()).toBe('A -> B [weight=10]');
});
