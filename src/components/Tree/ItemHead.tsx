import styled from 'styled-components';

interface IItemHead {
  active?: boolean;
}
export const ItemHead = styled.div<IItemHead>`
  height: 24px;
  margin-left: -12px;
  padding-left: 4px;
  padding-right: 4px;
  background: ${props => props.active ? props.theme.palette.iron : 'transparent'};
`;
