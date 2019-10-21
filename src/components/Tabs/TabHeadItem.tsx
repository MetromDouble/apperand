import styled from 'styled-components';

interface ITabHeadItem {
  active?: boolean;
}
export const TabHeadItem = styled.div<ITabHeadItem>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.active ? props.theme.palette.gs10 : props.theme.palette.gs20};
  color: ${props => props.theme.palette.gs70};
`;
