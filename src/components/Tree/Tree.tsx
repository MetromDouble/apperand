import React from 'react';

import { TreeWrapper } from 'src/components/Tree/TreeWrapper';
import { Item } from 'src/components/Tree/Item';

interface ITreeProps {
}
export const Tree: React.FC<ITreeProps> = () => {
  return (
    <TreeWrapper>
      <Item title="Component1" active expanded>
        <Item title="Component2" expanded>
          <Item title="Component3" />
          <Item title="Component4" />
          <Item title="Component5" />
        </Item>
        <Item title="Component6" expanded>
          <Item title="Component7" />
          <Item title="Component8" />
          <Item title="Component9" />
        </Item>
        <Item title="Component10" expanded>
          <Item title="Component11" expanded>
            <Item title="Component12" />
            <Item title="Component13" />
          </Item>
          <Item title="Component14" />
        </Item>
      </Item>
    </TreeWrapper>
  );
};
