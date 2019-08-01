const createId = () => {
  const min = 0;
  const max = 0xffffffff + 1;

  return Math.floor(Math.random() * (max - min) + min).toString(16);
};

interface INode {
  id: string;
  type: string;
  meta?: unknown;
}

interface IRelInner {
  ctx: Set<string>;
  ins: Set<string>;
}

interface IRelStorage {
  forward: Map<string, IRelInner>;
  backward: Map<string, IRelInner>;
}

interface ITree {
  entry?: string;
  nodes: Map<string, INode>;
  rels: IRelStorage;
}

export class TreeRuler {
  public tree: ITree;

  constructor(source?: ITree) {
    const rootId = createId();

    this.tree = {
      entry: rootId,
      nodes: new Map(),
      rels: {
        forward: new Map(),
        backward: new Map(),
      },
    };

    this.tree.nodes.set(rootId, {
      id: rootId,
      type: rootId,
    });
  }

  getNode(nodeId: string): INode | undefined {
    return this.tree.nodes.get(nodeId);
  }

  createNode(type: string, meta?: unknown) {
    const newNode: INode = {
      id: this._getNoCollisionId(),
      type,
    };

    if (meta) {
      newNode.meta = meta;
    }

    this.tree.nodes.set(newNode.id, newNode);

    return this.getNode(newNode.id);
  }

  updateNode(nodeId: string, type: string, meta?: unknown) {
    const node = this.getNode(nodeId);

    if (!node) {
      return console.error(new Error('Nonexistent node'));
    }

    const newNode: INode = {
      id: nodeId,
      type,
    };

    if (meta) {
      newNode.meta = meta;
    }

    this.tree.nodes.set(newNode.id, newNode);

    return this.getNode(newNode.id);
  }

  removeNode(nodeId: string) {
    const node = this.getNode(nodeId);

    if (!node) {
      return false;
    }

    this.removeAllRels(nodeId);

    this.tree.nodes.delete(node.id);

    return true;
  }

  getRels(
    nodeId: string,
    direction: 'in' | 'out' = 'in',
    relType: 'ctx' | 'ins' = 'ctx'
  ): string[] {
    if (direction === 'in') {
      if (this.tree.rels.forward.has(nodeId)) {
        return Array.from((this.tree.rels.forward.get(nodeId) as IRelInner)[relType]);
      }
    } else {
      if (this.tree.rels.backward.has(nodeId)) {
        return Array.from((this.tree.rels.backward.get(nodeId) as IRelInner)[relType]);
      }
    }
    return [];
  }

  createRel(relType: 'ctx' | 'ins', nodeAId: string, nodeBId: string) {
    if (!this.tree.rels.forward.has(nodeAId)) {
      this.tree.rels.forward.set(nodeAId, {
        ctx: new Set(),
        ins: new Set(),
      });
    }
    (this.tree.rels.forward.get(nodeAId) as IRelInner)[relType].add(nodeBId);

    if (!this.tree.rels.backward.has(nodeBId)) {
      this.tree.rels.backward.set(nodeBId, {
        ctx: new Set(),
        ins: new Set(),
      });
    }
    (this.tree.rels.backward.get(nodeBId) as IRelInner)[relType].add(nodeAId);
  }

  removeRel(relType: 'ctx' | 'ins', nodeAId: string, nodeBId?: string) {
    if (this.tree.rels.forward.has(nodeAId)) {
      if (nodeBId) {
        (this.tree.rels.forward.get(nodeAId) as IRelInner)[relType].delete(nodeBId);
        if (this.tree.rels.backward.has(nodeBId)) {
          (this.tree.rels.backward.get(nodeBId) as IRelInner)[relType].delete(nodeAId);
        }
      } else {
        (this.tree.rels.forward.get(nodeAId) as IRelInner)[relType].forEach(backwardRelId => {
          if (this.tree.rels.backward.has(backwardRelId)) {
            (this.tree.rels.backward.get(backwardRelId) as IRelInner)[relType].delete(nodeAId);
          }
        });
      }
      this.tree.rels.forward.delete(nodeAId);
    }
  }

  removeAllRels(nodeId: string) {
    this.removeRel('ctx', nodeId);
    this.removeRel('ins', nodeId);
  }

  private _getNoCollisionId() {
    let newId = createId();

    while (true) {
      if (this.getNode(newId)) {
        newId = createId();
      } else {
        return newId;
      }
    }
  }
}

if (typeof window !== 'undefined') (window as any).EEEEE = new TreeRuler();
