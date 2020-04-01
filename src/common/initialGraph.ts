import nanoid from 'nanoid';
import { Edge, Graph } from './GraphStone';

const createEdge = (o: string | string[], type: string, i: string | string[]) => {
  const input = Array.isArray(i) ? i : [i];
  const output = Array.isArray(o) ? o : [o];
  const edges: Edge[] = [];

  input.forEach(inputId => {
    output.forEach(outputId => {
      const id = nanoid();
      edges.push({ type, i: inputId, o: outputId });
    });
  });

  return edges;
};

export const prepareInitialGraph = () => {
  const __NodeId = nanoid();
  const __EdgeId = nanoid();

  const ScalarId = nanoid();
  const IntId = nanoid();
  const FloatId = nanoid();
  const StringId = nanoid();
  const BooleanId = nanoid();

  const ListId = nanoid();
  const InterfaceId = nanoid();
  const TypeId = nanoid();
  const KeyId = nanoid();
  const ValueId = nanoid();

  const e_childOf = nanoid();
  const e_parentOf = nanoid();

  const graph: Graph = {
    nodes: [
      { id: __NodeId, name: '__Node' },
      { id: __EdgeId, name: '__Edge' },

      { id: ScalarId, name: 'Scalar' },
      { id: IntId, name: 'Int' },
      { id: FloatId, name: 'Float' },
      { id: StringId, name: 'String' },
      { id: BooleanId, name: 'Boolean' },
      { id: TypeId, name: 'Type' },
      { id: ListId, name: 'List' },
      { id: KeyId, name: 'Key' },
      { id: ValueId, name: 'Value' },

      { id: e_childOf, name: 'child_of' },
    ],
    edges: [
      ...createEdge([
        __NodeId,
        __EdgeId,
        ScalarId,
        IntId,
        FloatId,
        StringId,
        BooleanId,
        TypeId,
        ListId,
        InterfaceId,
        KeyId,
        ValueId,
      ], e_childOf, __NodeId),
      ...createEdge(__NodeId, e_parentOf, [
        __NodeId,
        __EdgeId,
        ScalarId,
        IntId,
        FloatId,
        StringId,
        BooleanId,
        TypeId,
        ListId,
        InterfaceId,
        KeyId,
        ValueId,
      ]),
      ...createEdge([
        IntId,
        FloatId,
        StringId,
        BooleanId,
      ], e_childOf, ScalarId),
      ...createEdge(ScalarId, e_parentOf, [
        IntId,
        FloatId,
        StringId,
        BooleanId,
      ]),
    ]
  };

  return graph;
};
