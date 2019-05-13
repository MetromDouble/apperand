import styled from 'styled-components';

interface IGridAreaProps {
  area: string[];
}
export const GridArea = styled.div<IGridAreaProps>`
  display: block;
  grid-area: ${props => props.area.join(' / ')}
`;
