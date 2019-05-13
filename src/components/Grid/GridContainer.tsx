import styled from 'styled-components';

interface IGridContainerProps {
  columns: string[];
  rows: string[];
}
export const GridContainer = styled.div<IGridContainerProps>`
  display: grid;
  height: 100%;
  grid-template-rows: ${props => props.rows.join(' ')};
  grid-template-columns: ${props => props.columns.join(' ')};
`;
