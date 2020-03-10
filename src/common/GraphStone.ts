import nanoid from 'nanoid';

interface Node<T = unknown> {
  id: string;
  type: string;
  meta?: T;
}

interface NodeInput<T = unknown> {
  id?: string;
  type: string;
  meta?: T;
}

interface Edge {
  id: string;
  type: string;
  in: string;
  out: string;
}

interface EdgeInput {
  id?: string;
  type: string;
  in: string;
  out: string;
}

const idRootNode = nanoid();
const RootNode: Node = {
  id: idRootNode,
  type: 'NodeType',
};

export default class GraphStone {
  private nodes: Map<string, Node> = new Map();
  private edges: Map<string, Edge> = new Map();
  private nodeTypeIndex: Map<string, Map<string, Node>> = new Map();
  private edgeTypeIndex: Map<string, Map<string, Edge>> = new Map();
  private edgeInIndex: Map<string, Map<string, Edge>> = new Map();
  private edgeOutIndex: Map<string, Map<string, Edge>> = new Map();

  constructor(nodes: Node[], edges: Edge[]) {
    nodes.forEach(node => this.nodes.set(node.id, node));
    edges.forEach(this.addEdge);
  }

  public addNode<T = unknown>(node: NodeInput<T>) {
    if (!this.nodes.get(node.type)) {
      console.warn(`GraphStone: NodeType ${node.type} does not exist`);
      return;
    }
    const id = node.id || nanoid();
    this.nodes.set(id, { ...node, id })
  }

  public addEdge(edge: EdgeInput) {
    if (!this.nodes.get(edge.in)) {
      console.warn(`GraphStone: EdgeType 'in|'${edge.in} does not exist`);
      return;
    }
    if (!this.nodes.get(edge.out)) {
      console.warn(`GraphStone: EdgeType 'out|'${edge.out} does not exist`);
      return;
    }
    const id = edge.id || nanoid();
    this.edges.set(id, { ...edge, id });
  }
}
