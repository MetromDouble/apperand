import React from 'react';

import GridArea from './GridArea';
import GridContainer from './GridContainer';

const Grid = () => {
  return (
    <GridContainer columns={['30px', '30px', 'auto', '30px', '30px']} rows={['20px', 'auto', '20px']}>
      <GridArea area={['1', '2', '3', '5']} style={{ background: '#eee' }} />
      <GridArea area={['2', '3', '4', '6']} style={{ background: '#444' }} />
    </GridContainer>
  );
};

export default Grid;
