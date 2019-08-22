import styled from 'styled-components';
import {
  Sizes,
  inputSizeMap
} from 'src/utils/uikit';

interface IInputFieldProps {
  sz: Sizes;
}

export const InputField = styled.input<IInputFieldProps>`
  flex: 1 1 100%;
  height: 100%;
  font-size: ${props => inputSizeMap[props.sz].fontSize};
  outline: none;
  border: none;
  background: transparent;
  order: 1;
  &:focus {

  }
`;
