import nanoid from 'nanoid';
import { Edge } from './GraphStone';

const createEdge = (o: string | string[], type: string, i: string | string[]) => {
  const input = Array.isArray(i) ? i : [i];
  const output = Array.isArray(o) ? o : [o];
  const edges: Record<string, Edge> = {};

  input.forEach(inputId => {
    output.forEach(outputId => {
      const id = nanoid();
      edges[id] = { id, type, i: inputId, o: outputId };
    });
  });

  return edges;
};

const prepareInitialGraph = () => {
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

  const graph = {
    nodes: {
      [__NodeId]: { id: __NodeId, name: '__Node' },

      [__EdgeId]: { id: __EdgeId, name: '__Edge' },

      [ScalarId]: { id: ScalarId, name: 'Scalar' },
      [IntId]: { id: IntId, name: 'Int' },
      [FloatId]: { id: FloatId, name: 'Float' },
      [StringId]: { id: StringId, name: 'String' },
      [BooleanId]: { id: BooleanId, name: 'Boolean' },

      [TypeId]: { id: TypeId, name: 'Type' },
      [ListId]: { id: ListId, name: 'List' },
      [InterfaceId]: { id: InterfaceId, name: 'Interface' },
      [KeyId]: { id: KeyId, name: 'Key' },
      [ValueId]: { id: ValueId, name: 'Value' },

      [e_childOf]: { id: e_childOf, name: 'child_of' },
    },
    edges: {
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
      ...createEdge([
        IntId,
        FloatId,
        StringId,
        BooleanId,
      ], e_childOf, ScalarId),
    }
  };
};
