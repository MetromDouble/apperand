import generate from 'nanoid/generate';

const createId = () => generate('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890', 12);
const isArraysEqual = (arr1: string[], arr2: string[]): boolean => {
  if (arr1.length !== arr2.length) return false;
  const sortedArr1 = arr1.sort();
  const sortedArr2 = arr2.sort();
  return sortedArr1.every((item, index) => item === sortedArr2[index]);
};

interface INodeArgs {
  type: string;
  parent?: string;
  subset?: string[];
  meta?: any;
}

interface INode {
  id: string;
  type: string;
  parent: string | null;
  subset: string[];
  meta?: any;
}

interface IRel {
  id: string;
  in: string;
  out: string;
}

interface ITree {
  entry: string;
  nodes: Map<string, INode>;
  rels: Map<string, IRel>;
}

export class TreeRuler {
  public tree: ITree;
  private _tree: ITree | null = null;

  constructor(source: any) {
    const rootId = createId();

    this.tree = {
      entry: rootId,
      nodes: new Map(),
      rels: new Map(),
    };

    this.tree.nodes.set(rootId, {
      id: rootId,
      type: 'Root',
      parent: null,
      subset: [],
    });
  }

  getNode(nodeId: string): INode | undefined {
    return this.tree.nodes.get(nodeId);
  }

  insertNode(node: INodeArgs) {
    const newNode: INode = {
      id: this._getNoCollisionId(),
      type: node.type,
      parent: null,
      subset: [],
    };

    this.tree.nodes.set(newNode.id, newNode);

    if (node.meta) {
      newNode.meta = node.meta;
    }

    if (node.parent) {
      const parentNode = this.getNode(node.parent);

      if (!parentNode) {
        return console.error(new Error('Nonexistent parent node'));
      } else {
        this.updateNode(parentNode.id, {
          type: parentNode.type,
          subset: [
            ...parentNode.subset,
            newNode.id
          ],
        });
      }

      newNode.parent = node.parent;
    }

    this.tree.nodes[newNode.id] = newNode;
  }

  updateNode(nodeId: string, nodeArgs: INodeArgs) {
    const node = this.getNode(nodeId);

    if (!node) {
      return console.error(new Error('Nonexistent node'));
    }

    const newNode: INode = {
      id: node.id,
      type: nodeArgs.type,
      parent: node.parent,
      subset: node.subset,
    };

    if (nodeArgs.meta) {
      newNode.meta = {
        ...node.meta,
        ...nodeArgs.meta,
      };
    }

    if (nodeArgs.parent && nodeArgs.parent !== node.parent) {
      const parentNode = this.getNode(nodeArgs.parent);

      if (!parentNode) {
        return console.error(new Error('Nonexistent parent node'));
      } else {
        this.updateNode(parentNode.id, {
          type: parentNode.type,
          subset: [
            ...parentNode.subset,
            newNode.id,
          ],
        });
      }
    }

    if (nodeArgs.subset && nodeArgs.subset.length) {
      const subsetNodes = nodeArgs.subset.map(id => this.getNode(id));

      if (!subsetNodes.every(item => !!item)) {
        return console.error(new Error('Nonexistent subset nodes'));
      } else if (!isArraysEqual(node.subset, nodeArgs.subset)) {
        (subsetNodes as INode[]).forEach(item => this.updateNode(item.id, { type: item.type, parent: newNode.id }));

        newNode.subset = [...nodeArgs.subset];
      }
    }

    this.tree.nodes[newNode.id] = newNode;
  }

  removeNode(nodeId: string) {
    const node = this.getNode(nodeId);

    if (!node) {
      return console.error(new Error('Nonexistent node'));
    }

    if (node.parent) {
      const parentNode = this.getNode(node.parent);

      if (!parentNode) {
        return console.error(new Error('Nonexistent parent node'));
      } else {
        this.updateNode(parentNode.id, {
          type: parentNode.type,
          subset: [
            ...parentNode.subset.filter(id => nodeId !== id),
          ],
        });
      }
    }


    if (node.subset && node.subset.length) {
      const subsetNodes = node.subset.map(id => this.getNode(id));

      if (!subsetNodes.every(item => !!item)) {
        return console.error(new Error('Nonexistent subset nodes'));
      } else {
        (subsetNodes as INode[]).forEach(item => this.removeNode(item.id));
      }
    }

    delete this.tree.nodes[node.id];
  }

  findChildNodes(nodeId: string, type: string) {
    return this.tree.nodes[nodeId];
  }

  getNodeInRels(nodeId: string) {
    return this.tree.nodes[nodeId];
  }

  getNodeOutRels(nodeId: string) {
    return this.tree.nodes[nodeId];
  }

  createRel(inNodeId: string, outNodeId: string,) {
  }

  removeRel(relId: string) {
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

  private _startPatch() {
    if (!this._tree) {
      this._tree = {
        entry: this.tree.entry,
        nodes: new Map(this.tree.nodes),
        rels: new Map(this.tree.rels),
      };
    }
  }

  private _applyPatch() {
    if (this._tree) {
      this.tree = this._tree;
      this._tree = null;
    }
  }

  private _rejectPatch() {
    if (this._tree) {
      this._tree = null;
    }
  }

  private _updateParent(nodeId: string, parentNodeId: string) {
    let newId = createId();

    while (true) {
      if (this.getNode(newId)) {
        newId = createId();
      } else {
        return newId;
      }
    }
  }

  private _addSubsetItem(nodeId: string, subsetId: string) {
    const node = this.getNode(nodeId);

    if (!node) {
      return console.error(new Error('Nonexistent node'));
    }

    if (!node.subset.every(item => item !== subsetId)) {
      return console.error(new Error('Subset node already exist'));
    }

    if (node.subset && node.subset.length) {
      const subsetNodes = node.subset.map(id => this.getNode(id));

      if (!subsetNodes.every(item => !!item)) {
        return console.error(new Error('Nonexistent subset nodes'));
      } else {
        (subsetNodes as INode[]).forEach(item => this.removeNode(item.id));
      }
    }
  }
}

if (typeof window !== 'undefined') (window as any).EEEEE = new TreeRuler(1);
