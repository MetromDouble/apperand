import React from 'react';
import styled from 'styled-components';

interface IGridContainerProps {
  columns: Array<string>;
  rows: Array<string>;
}
const GridContainer = styled.div<IGridContainerProps>`
  display: grid;
  grid-template-rows: ${props => props.rows.join(' ')};
  grid-template-columns: ${props => props.columns.join(' ')};
`;

interface IGridAreaProps {
  area: Array<string>;
}
const GridArea = styled.div<IGridAreaProps>`
  display: block;
  grid-area: ${props => props.area.join(' / ')}
`;

export const Grid = () => {
  return (
    <GridContainer columns={['200px', '200px', 'auto', '200px', '200px']} rows={['100px', 'auto', '100px']}>
      <GridArea area={['1', '2', '3', '5']} style={{ background: '#eee' }} />
      <GridArea area={['2', '3', '4', '6']} style={{ background: '#444' }} />
    </GridContainer>
  );
};
