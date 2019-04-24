import styled from 'styled-components';

import { Button } from 'src/components/Button/Button';

// interface IHeaderButtonProps {
// }

export const HeaderButton = styled(Button)`
  display: flex;
  align-items: center;
  padding-left: 7px;
  padding-right: 7px;
  height: 100%;
  font-size: 24px;
  color: ${props => props.theme.palette.maxLight};
  &:hover {
    background: ${({ theme: { palette } }) => palette.minLight};
    border-color: ${({ theme: { palette } }) => palette.minLight};
  }
  &:active {
    background: ${({ theme: { palette } }) => palette.primaryStrong};
    border-color: ${({ theme: { palette } }) => palette.primaryStrong};
  }
`;
