import { nanoid } from 'nanoid';

type ID = string;
type DataNodeID = ID;
type ConNodeID = ID;
type DivNodeID = ID;

type DataRef = null | string | number | boolean | object;

interface RawDataNode {
    id: DataNodeID;
    i: Record<DataNodeID, ConNodeID>;
    o: Record<DataNodeID, DivNodeID>;
    name: string;
    data: DataRef;
}

interface RawConNode {
    id: ConNodeID;
    i: Array<DivNodeID>;
    o: DataNodeID;
}

interface RawDivNode {
    id: DivNodeID;
    i: DataNodeID;
    o: Array<ConNodeID>;
}

interface DataNode {
    id: DataNodeID;
    i: Map<DataNode, ConNode>;
    o: Map<DataNode, DivNode>;
    name: string;
    data: DataRef;
}

interface ConNode {
    id: ConNodeID;
    i: Set<DivNode>;
    o: DataNode;
}

interface DivNode {
    id: DivNodeID;
    i: DataNode;
    o: Set<ConNode>;
}

interface Nodes {
    data: Map<DataNodeID, DataNode>;
    con: Map<ConNodeID, ConNode>;
    div: Map<DivNodeID, DivNode>;
}

export class GraphStone {
    private nodes: Nodes = {
        data: new Map(),
        con: new Map(),
        div: new Map(),
    }

    public constructor() {

    }

    createNode(name: string, data: DataRef) {
        const id: DataNodeID = nanoid();
        const node: DataNode = {
            id,
            i: new Map(),
            o: new Map(),
            name,
            data
        };
        this.nodes.data.set(nanoid(), node);
    }

    updateNode(id: DataNodeID, name: string, data: DataRef) {
        const node = this.nodes.data.get(id);
        if (!node) return;

        const updatedNode: DataNode = {
            ...node,
            name,
            data
        };
        this.nodes.data.set(id, updatedNode);
    }

    deleteNode(id: DataNodeID) {
        const node = this.nodes.data.get(id);
        if (!node) return;

        node.o.forEach(divNode => {
            divNode.o.forEach(conNode => {
                conNode.i.delete(divNode);
            });
            this.nodes.div.delete(divNode.id);
        });
        node.i.forEach(conNode => {
            conNode.i.forEach(divNode => {
                divNode.o.delete(conNode);
            });
            this.nodes.con.delete(conNode.id);
        });
        this.nodes.data.delete(id);
    }

    singleConnect(idA: DataNodeID, idType: DataNodeID, idB: DataNodeID) {
        const nodeA = this.nodes.data.get(idA);
        const nodeB = this.nodes.data.get(idB);
        const type = this.nodes.data.get(idType);
        if (!nodeA || !nodeB || !type) return;

        let divNode: DivNode = {
            id: nanoid(),
            i: nodeA,
            o: new Set(),
        };
        let conNode: ConNode = {
            id: nanoid(),
            i: new Set(),
            o: nodeB,
        };

        if (nodeA.o.has(type)) {
            divNode = <DivNode>nodeA.o.get(type);
        } else {
            this.nodes.div.set(divNode.id, divNode);
            nodeA.o.set(type, divNode);
        }
        if (nodeB.i.has(type)) {
            conNode = <ConNode>nodeB.i.get(type);
        } else {
            this.nodes.con.set(conNode.id, conNode);
            nodeB.i.set(type, conNode);
        }

        divNode.o.add(conNode);
        conNode.i.add(divNode);
    }

    singleDisconnect(idA: DataNodeID, idType: DataNodeID, idB: DataNodeID) {
        const nodeA = this.nodes.data.get(idA);
        const nodeB = this.nodes.data.get(idB);
        const type = this.nodes.data.get(idType);
        if (!nodeA || !nodeB || !type) return;

        const divNode = nodeA.o.get(type);
        const conNode = nodeB.i.get(type);
        if (!divNode || !conNode) return;

        divNode.o.delete(conNode);
        if (divNode.o.size === 0) {
            nodeA.o.delete(type);
            this.nodes.div.delete(divNode.id);
        }
        conNode.i.delete(divNode);
        if (conNode.i.size === 0) {
            nodeB.i.delete(type);
            this.nodes.con.delete(conNode.id);
        }
    }
}
