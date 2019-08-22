import styled from 'styled-components';
import {
  Sizes,
  inputSizeMap
} from 'src/utils/uikit';

interface IInputWrapperProps {
  size: Sizes;
}

export const InputWrapper = styled.div<IInputWrapperProps>`
  display: flex;
  position: relative;
  height: ${props => inputSizeMap[props.size].height};
  background: ${props => props.theme.palette.maxLight};
  border: 1px solid ${props => props.theme.palette.gs10};
`;
