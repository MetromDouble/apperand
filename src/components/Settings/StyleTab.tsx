import React from 'react';
import styled from 'styled-components';

import { LayoutPanel } from './StylePanels/LayoutPanel';
import { SpacingPanel } from './StylePanels/SpacingPanel';
import { SizePanel } from './StylePanels/SizePanel';
import { TypographyPanel } from './StylePanels/TypographyPanel';
import { BackgroundsPanel } from './StylePanels/BackgroundsPanel';
import { BordersPanel } from './StylePanels/BordersPanel';
import { EffectsPanel } from './StylePanels/EffectsPanel';

interface IStyleTabProps {
}
export const StyleTab = React.memo<IStyleTabProps>(
  ({

  }) => {
    return (
      <Wrapper>
        <LayoutPanel />
        <SpacingPanel />
        <SizePanel />
        <TypographyPanel />
        <BackgroundsPanel />
        <BordersPanel />
        <EffectsPanel />
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 8px 0;
  overflow: auto;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
`;
