import React from 'react';
import styled from 'styled-components';

import { Tabs } from 'src/components/Tabs';
import { Tree } from 'src/components/Tree/Tree';

const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: start;
  height: 100%;
  width: 100%;
  background: ${props => props.theme.palette.wetPaper};
  box-sizing: border-box;
  border-left: 1px solid ${props => props.theme.palette.steel};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const Settings = () => {
  return (
    <SettingsWrapper>
      <Tabs />
      <ContentWrapper>
        <Tree />
      </ContentWrapper>
    </SettingsWrapper>
  );
};
