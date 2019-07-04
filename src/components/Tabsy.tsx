import React from 'react';
import styled from 'styled-components';

import { StyleIcon } from 'src/components/icons/StyleIcon';
import { TreeIcon } from 'src/components/icons/TreeIcon';
import { SettingsIcon } from 'src/components/icons/SettingsIcon';

import { Tree } from 'src/components/Tree/Tree';

import { Tabs, TabHead, TabBody } from 'src/components/Tabs/Tabs';

const ContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const Tabsy: React.FC = () => {
  return (
    <Tabs>
      <TabHead id="style">
        <StyleIcon size="s" />
      </TabHead>
      <TabHead id="tree" selected order={2}>
        <TreeIcon size="s" />
      </TabHead>
      <TabHead id="settings" order={1}>
        <SettingsIcon size="s" />
      </TabHead>
      <TabBody id="style">
        FFFA
      </TabBody>
      <TabBody id="tree">
        <ContentWrapper>
          <Tree />
        </ContentWrapper>
      </TabBody>
      <TabBody id="settings">
        FFFC
      </TabBody>
    </Tabs>
  );
};
