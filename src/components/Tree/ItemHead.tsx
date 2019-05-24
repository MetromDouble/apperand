import styled from 'styled-components';

interface IItemHead {
  active?: boolean;
}
export const ItemHead = styled.div<IItemHead>`
  height: 24px;
  margin-left: -10px;
  padding-left: 2px;
  padding-right: 4px;
  background: ${props => props.active ? props.theme.palette.iron : 'transparent'};
  transition: background 0.1s ease;
  &:hover {
    background: ${props => props.theme.palette.iron};
  }
`;
