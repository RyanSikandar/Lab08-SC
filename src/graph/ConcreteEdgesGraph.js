// ConcreteEdgesGraph.js
const Edge = require('./Edge');

class ConcreteEdgesGraph {
  constructor() {
    this.vertices = new Set();
    this.edges = [];
  }

  add(vertex) {
    if (!this.vertices.has(vertex)) {
      this.vertices.add(vertex);
      return true;
    }
    return false;
  }

  set(source, target, weight) {
    if (weight === 0) {
      // Remove edge if weight is zero
      const index = this.edges.findIndex(e => e.source === source && e.target === target);
      if (index !== -1) {
        const removedWeight = this.edges[index].weight;
        this.edges.splice(index, 1);
        return removedWeight;
      }
      return 0;
    } else {
      // Update or add edge
      this.add(source);
      this.add(target);

      const edge = this.edges.find(e => e.source === source && e.target === target);
      if (edge) {
        const previousWeight = edge.weight;
        edge.weight = weight;
        return previousWeight;
      } else {
        const newEdge = new Edge(source, target, weight);
        this.edges.push(newEdge);
        return 0;
      }
    }
  }

  remove(vertex) {
    if (this.vertices.has(vertex)) {
      this.vertices.delete(vertex);
      this.edges = this.edges.filter(e => e.source !== vertex && e.target !== vertex);
      return true;
    }
    return false;
  }

  vertices() {
    return new Set(this.vertices);
  }

  sources(target) {
    const sources = {};
    this.edges
      .filter(e => e.target === target)
      .forEach(e => {
        sources[e.source] = e.weight;
      });
    return sources;
  }

  targets(source) {
    const targets = {};
    this.edges
      .filter(e => e.source === source)
      .forEach(e => {
        targets[e.target] = e.weight;
      });
    return targets;
  }

  toString() {
    return `Vertices: ${Array.from(this.vertices).join(', ')}\nEdges:\n` +
           this.edges.map(edge => edge.toString()).join('\n');
  }
}

module.exports = ConcreteEdgesGraph;
