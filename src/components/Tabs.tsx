import React from 'react';
import styled from 'styled-components';

import { StyleIcon } from 'src/components/icons/StyleIcon';
import { TreeIcon } from 'src/components/icons/TreeIcon';
import { SettingsIcon } from 'src/components/icons/SettingsIcon';

const TabsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 32px;
  background: ${props => props.theme.palette.steel};
  color: ${props => props.theme.palette.asphalt};
`;

interface ITab {
  active?: boolean;
}
const Tab = styled.div<ITab>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.active ? props.theme.palette.wetPaper : props.theme.palette.steel};
  color: ${props => props.theme.palette.asphalt};
`;

interface ITabsProps {
}
export const Tabs: React.FC<ITabsProps> = () => {
  return (
    <TabsWrapper>
      <Tab>
        <StyleIcon size="s" />
      </Tab>
      <Tab active>
        <TreeIcon size="s" />
      </Tab>
      <Tab>
        <SettingsIcon size="s" />
      </Tab>
    </TabsWrapper>
  );
};
