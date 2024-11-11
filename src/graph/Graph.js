class Graph {
    constructor() {
        this.adjacencyMap = new Map();
    }

    static empty() {
        return new Graph();
    }

    add(vertex) {
        if (!this.adjacencyMap.has(vertex)) {
            this.adjacencyMap.set(vertex, new Map());
            return true;
        }
        return false;
    }

    set(source, target, weight) {
        if (weight < 0) {
            throw new Error("Edge weight must be nonnegative");
        }
        if (weight === 0) {
            return this.removeEdge(source, target);
        }
        this.add(source);
        this.add(target);
        const sourceEdges = this.adjacencyMap.get(source);
        const previousWeight = sourceEdges.has(target) ? sourceEdges.get(target) : 0;
        sourceEdges.set(target, weight);
        return previousWeight;
    }

    remove(vertex) {
        if (!this.adjacencyMap.has(vertex)) {
            return false;
        }
        this.adjacencyMap.delete(vertex);
        for (let [, edges] of this.adjacencyMap) {
            edges.delete(vertex);
        }
        return true;
    }

    vertices() {
        return new Set(this.adjacencyMap.keys());
    }

    sources(target) {
        const sources = new Map();
        for (let [vertex, edges] of this.adjacencyMap) {
            if (edges.has(target)) {
                sources.set(vertex, edges.get(target));
            }
        }
        return sources;
    }

    targets(source) {
        return this.adjacencyMap.has(source) ? new Map(this.adjacencyMap.get(source)) : new Map();
    }

    removeEdge(source, target) {
        if (!this.adjacencyMap.has(source) || !this.adjacencyMap.get(source).has(target)) {
            return 0;
        }
        const previousWeight = this.adjacencyMap.get(source).get(target);
        this.adjacencyMap.get(source).delete(target);
        return previousWeight;
    }
}

module.exports = Graph;
