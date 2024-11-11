// ConcreteVerticesGraph.js
const Vertex = require('./Vertex');

class ConcreteVerticesGraph {
  constructor() {
    this.verticesList = []; // Renaming the vertices property to avoid confusion with the method
  }

  add(vertexLabel) {
    const vertex = new Vertex(vertexLabel);
    if (!this.verticesList.some(v => v.label === vertexLabel)) {
      this.verticesList.push(vertex);
      return true;
    }
    return false;
  }

  remove(vertexLabel) {
    const index = this.verticesList.findIndex(v => v.label === vertexLabel);
    if (index !== -1) {
      this.verticesList.splice(index, 1);
      return true;
    }
    return false;
  }

  // Change vertices to a method
  vertices() {
    return this.verticesList.map(v => v.label);
  }

  toString() {
    return `Vertices: ${this.verticesList.map(v => v.toString()).join(', ')}`;
  }
}

module.exports = ConcreteVerticesGraph;
