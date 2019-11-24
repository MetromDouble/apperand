import styled from 'styled-components';

import { Sizes } from 'src/common/types/Sizes';
import { inputSizeMap } from 'src/common/theme';

interface IInputFieldProps {
  sz: Sizes;
}
const InputField = styled.input<IInputFieldProps>`
  position: relative;
  z-index: 1;
  flex: 1 1 100%;
  width: 100%;
  height: 100%;
  font-size: ${props => inputSizeMap[props.sz].fontSize};
  font-family: 'Roboto', 'Ubuntu', 'Arial', 'Helvetica Neue', sans-serif;
  outline: none;
  border: none;
  box-sizing: border-box;
  padding: 0 ${props => inputSizeMap[props.sz].inputMargin};
  background: transparent;
  order: 1;
  color: ${props => props.theme.palette.gs60};

  & + div {
    border: 1px solid ${props => props.theme.palette.gs20};
    background-color: ${props => props.theme.palette.maxLight};
  }

  &:active + div {
    border-color: ${props => props.theme.palette.gs50};
  }

  &:focus + div, &:hover + div {
    border-color: ${props => props.theme.palette.gs40};
  }

  &[type=checkbox], &[type=radio] {
    position: absolute;
    left: -16000px;
    top: -16000px;
  }
`;

export default InputField;
