import React from 'react';

import { TreeWrapper } from 'src/components/Tree/TreeWrapper';
import { Item } from 'src/components/Tree/Item';
import { TagComboIcon } from 'src/components/comboicons/TagComboIcon';
import 'src/utils/GraphRuler';

interface ITreeProps {
}
export const Tree: React.FC<ITreeProps> = () => {
  return (
    <TreeWrapper>
      <Item title="Component1" active icons={<TagComboIcon size="xxs" type="body" />}>
        <Item title="Component2">
          <Item title="Component3" icons={<TagComboIcon size="xxs" type="any" />} />
          <Item title="Component4" icons={<TagComboIcon size="xxs" type="article" />} />
          <Item title="Component5" icons={<TagComboIcon size="xxs" type="section" />} />
        </Item>
        <Item title="Component6">
          <Item title="Component7" />
          <Item title="Component8" />
          <Item title="Component9" />
        </Item>
        <Item title="Component10">
          <Item title="Component11">
            <Item title="Component12" />
            <Item title="Component13" />
            <Item title="Component11">
              <Item title="Component12" />
              <Item title="Component13" />
              <Item title="Component11">
                <Item title="Component12" />
                <Item title="Component13" />
              </Item>
            </Item>
          </Item>
          <Item title="Component14" />
        </Item>
      </Item>
    </TreeWrapper>
  );
};
