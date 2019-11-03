import React from 'react';
import styled from 'styled-components';

import { Tabsy } from 'src/components/Tabsy';

const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: start;
  height: 100%;
  width: 100%;
  background: ${props => props.theme.palette.gs05};
  box-sizing: border-box;
  border-left: 1px solid ${props => props.theme.palette.gs10};
`;

export const Settings = () => {
  return (
    <SettingsWrapper>
      <Tabsy />
    </SettingsWrapper>
  );
};
