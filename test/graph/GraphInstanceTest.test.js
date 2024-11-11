const Graph = require('../../src/graph/Graph');

describe('Graph', () => {
    let graph;

    beforeEach(() => {
        graph = Graph.empty();
    });

    test('initial vertices set is empty', () => {
        expect(graph.vertices().size).toBe(0);
    });

    test('adding a vertex', () => {
        expect(graph.add('A')).toBe(true);
        expect(graph.vertices()).toEqual(new Set(['A']));
        expect(graph.add('A')).toBe(false); // Adding same vertex should return false
    });

    test('setting an edge between vertices', () => {
        graph.add('A');
        graph.add('B');
        expect(graph.set('A', 'B', 5)).toBe(0); // No previous weight
        expect(graph.targets('A')).toEqual(new Map([['B', 5]]));
        expect(graph.set('A', 'B', 3)).toBe(5); // Edge updated
        expect(graph.targets('A')).toEqual(new Map([['B', 3]]));
    });

    test('removing an edge by setting weight to zero', () => {
        graph.set('A', 'B', 5);
        expect(graph.set('A', 'B', 0)).toBe(5); // Remove edge
        expect(graph.targets('A').size).toBe(0);
    });

    test('removing a vertex and its edges', () => {
        graph.set('A', 'B', 3);
        graph.set('B', 'C', 4);
        expect(graph.remove('B')).toBe(true); // Remove vertex B
        expect(graph.vertices()).toEqual(new Set(['A', 'C']));
        expect(graph.targets('A').size).toBe(0); // Edges to B removed
        expect(graph.sources('C').size).toBe(0); // Edges from B removed
    });

    test('fetching sources and targets', () => {
        graph.set('A', 'B', 3);
        graph.set('C', 'B', 4);
        expect(graph.sources('B')).toEqual(new Map([['A', 3], ['C', 4]]));
        expect(graph.targets('A')).toEqual(new Map([['B', 3]]));
    });

    test('sources and targets return empty maps if no edges exist', () => {
        graph.add('A');
        graph.add('B');
        expect(graph.sources('A').size).toBe(0);
        expect(graph.targets('B').size).toBe(0);
    });
});
