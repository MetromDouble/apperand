import styled from 'styled-components';

interface IItemWrapper {
  expanded?: boolean;
}
export const ItemWrapper = styled.div<IItemWrapper>`
  cursor: pointer;
  user-select: none;
  padding-left: 12px;
  box-sizing: border-box;
  width: 100%;
  height: ${props => props.expanded ? 'auto' : '24px'};
  overflow: hidden;
  background: ${props => props.theme.palette.steel};
  position: relative;
  &::after {
    content: '';
    display: block;
    height: 16800px;
    width: 2px;
    position: absolute;
    top: 24px;
    left: 9px;
    background: ${props => props.theme.palette.iron};
  }
`;
