import React from 'react';
import { customAlphabet } from 'nanoid';

import GridArea from 'src/components/Grid/GridArea';
import GridContainer from 'src/components/Grid/GridContainer';
import { Header } from 'src/components/Header/Header';
import { WorkArea } from 'src/components/WorkArea/WorkArea';
import { Toolbar } from 'src/components/Toolbar/Toolbar';
import { Settings } from 'src/components/Settings';
import { Breadcrumbs } from 'src/components/Breadcrumbs/Breadcrumbs';

// import GraphStone2 from 'src/common/GraphStone2';
// import { init } from 'src/common/initGraph';

const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890', 24);
// @ts-ignore
window.nanoid = nanoid;

export const Main = () => {
  return (
    <GridContainer columns={['40px', '1fr', '240px']} rows={['40px', '1fr', '40px']}>
      <GridArea area={['1', '1', '2', '4']}>
        <Header />
      </GridArea>
      <GridArea area={['2', '2', '3', '3']}>
        <WorkArea />
      </GridArea>
      <GridArea area={['2', '1', '4', '2']}>
        <Toolbar />
      </GridArea>
      <GridArea area={['2', '3', '4', '4']}>
        <Settings />
      </GridArea>
      <GridArea area={['3', '2', '4', '3']}>
        <Breadcrumbs />
      </GridArea>
    </GridContainer>
  );
};
