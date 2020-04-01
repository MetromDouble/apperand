import nanoid from 'nanoid';

export interface NodeInput<T = unknown> {
  id?: string;
  name: string;
  meta?: T;
}

export interface Node extends NodeInput {
  id: string;
}

export interface Edge {
  type: string;
  i: string;
  o: string;
}

export interface Graph {
  nodes: Node[],
  edges: Edge[],
}

type Index = WeakMap<Node, {
  forward: WeakMap<Edge, Node>;
  backward: WeakMap<Edge, Node>;
}>

export default class GraphStone {
  private nodeMap: Map<string, Node> = new Map();
  private edgeMap: Map<Node, Set<Edge>> = new Map();
  private indexMap: Index = new WeakMap();

  public addNodes(nodes: NodeInput | NodeInput[]): string[] {
    const created: string[] = [];
    [nodes].flat().forEach(_node => {
      const id = _node.id || nanoid();
      created.push(id);
      const node = {
        ..._node,
        id: _node.id || id
      };
      this.nodeMap.set(node.id, node);
      if (!this.indexMap.has(node))
        this.indexMap.set(node, { forward: new WeakMap(), backward: new WeakMap() });
    });

    return created;
  }

  public removeNodes(nodeIds: string | string[]): void {
    [nodeIds].flat().forEach(nodeId => {
      const node = this.nodeMap.get(nodeId);
      if (node) {
        this.nodeMap.delete(nodeId);
        this.removeEdges(null, nodeId, null);
        this.removeEdges(null, null, nodeId);
      }
    });
  }

  public addEdges(edges: Edge | Edge[]): void {
    [edges].flat().forEach(edge => {
      const inNode = this.nodeMap.get(edge.i);
      const outNode = this.nodeMap.get(edge.o);
      const typeNode = this.nodeMap.get(edge.type);

      if (inNode && outNode && typeNode) {
        if (!this.edgeMap.has(typeNode))
          this.edgeMap.set(typeNode, new Set());
        this.edgeMap.get(typeNode)!.add(edge);

        if (!this.indexMap.has(inNode))
          this.indexMap.set(inNode, { forward: new WeakMap(), backward: new WeakMap() });
        if (!this.indexMap.has(outNode))
          this.indexMap.set(outNode, { forward: new WeakMap(), backward: new WeakMap() });
        const inNodeIndex = this.indexMap.get(inNode);
        const outNodeIndex = this.indexMap.get(outNode);

        if (!inNodeIndex!.forward.has(edge))
          inNodeIndex!.forward.set(edge, outNode);
        if (!outNodeIndex!.backward.has(edge))
          outNodeIndex!.backward.set(edge, inNode);
      }
    });
  }

  public removeEdges(
    types: string | string[] | null,
    inNodeIds: string | string[] | null,
    outNodeIds: string | string[] | null,
  ): void {
    const checkAndClean = (edge: Edge, _: unknown, set: Set<Edge>) => {
      if (inNodeIds === null && outNodeIds === null) {
        set.clear();
      } else {
        if (
          (inNodeIds === null || [inNodeIds].flat().find(id => id === edge.i))
          && (outNodeIds === null || [outNodeIds].flat().find(id => id === edge.o))
        ) {
          set.delete(edge);
        }
      }
    };
    [types && types.length ? types : null].flat().forEach(type => {
      if (type === null) {
        this.edgeMap.forEach((edgeSet, node) => {
          edgeSet.forEach(checkAndClean);
        });
      } else {
        const typeNode = this.nodeMap.get(type);
        if (typeNode && this.edgeMap.has(typeNode)) {
          this.edgeMap.get(typeNode)!.forEach(checkAndClean);
        }
      }
    });
  }

  public query(initialNode?: string) {

  }
}
