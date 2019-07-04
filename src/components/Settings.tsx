import React from 'react';
import styled from 'styled-components';

import { Tabsy } from 'src/components/Tabsy';

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

export const Settings = () => {
  return (
    <SettingsWrapper>
      <Tabsy />
    </SettingsWrapper>
  );
};
