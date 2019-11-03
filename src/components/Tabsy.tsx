import React from 'react';
import styled from 'styled-components';

import { StyleIcon } from 'src/components/icons/StyleIcon';
import { TreeIcon } from 'src/components/icons/TreeIcon';
import { SettingsIcon } from 'src/components/icons/SettingsIcon';

import { Tree } from 'src/components/Tree/Tree';
import { Expander } from 'src/components/Expander/Expander';

import { Tabs, TabHead, TabBody } from 'src/components/Tabs/Tabs';

const ContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const SpaceWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 8px 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const Tabsy: React.FC = () => {
  return (
    <Tabs>
      <TabHead id="style" selected>
        <StyleIcon size="s" />
      </TabHead>
      <TabHead id="tree">
        <TreeIcon size="s" />
      </TabHead>
      <TabHead id="settings">
        <SettingsIcon size="s" />
      </TabHead>
      <TabBody id="style">
        <SpaceWrapper>
          <Expander title="Spacing">
            <Tree />
          </Expander>
        </SpaceWrapper>
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
