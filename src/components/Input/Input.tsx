import React, { ReactNode, Ref } from 'react';
import styled, { css } from 'styled-components';

import { Sizes } from 'src/common/types/Sizes';
import { InputTypes } from './InputTypes';
import { inputSizeMap } from 'src/common/theme';

import InputField from './InputField';

import CheckboxMaskSVG from 'src/assets/images/CheckboxMask.svg';
import RadioMaskSVG from 'src/assets/images/RadioMask.svg';

interface IInputProps {
  type: InputTypes;
  size?: Sizes;
  basis?: string;
  children?: ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({
    type,
    size = 'm',
    children,
    ...props
  }, ref) => {
    return (
      <InputWrapper
        size={size}
      >
        {['checkbox', 'radio'].some(t => t === type) && (
          <>
            <InputLabel
              sz={size}
              type={type}
            >
              <InputField
                sz={size}
                type={type}
                ref={ref}
                {...props}
              />
              <InputIcon
                sz={size}
                type={type}
              />
              {children}
            </InputLabel>
          </>
        )}
        {['text', 'number', 'password'].some(t => t === type) && (
          <>
            <InputField
              sz={size}
              type={type}
              ref={ref}
              {...props}
            />
            <InputDecoration />
            <InputAddition>
              {children}
            </InputAddition>
          </>
        )}
      </InputWrapper>
    );
  }
);

export default Input;

interface IInputWrapperProps {
  size: Sizes;
}
const InputWrapper = styled.div<IInputWrapperProps>`
  display: flex;
  position: relative;
  height: ${props => inputSizeMap[props.size].height};
`;

interface IInputLabelProps {
  sz: Sizes;
  type: InputTypes;
}
const booleanInputMixin = css<IInputLabelProps>`
  display: block;
  width: calc(${props => inputSizeMap[props.sz].height} / 2);
  height: calc(${props => inputSizeMap[props.sz].height} / 2);
  background: ${props => props.theme.palette.maxLight};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 110% 110%;
  color: ${props => props.theme.palette.gs60};
  border: 1px solid ${props => props.theme.palette.gs20};
  margin-right: ${props => inputSizeMap[props.sz].inputMargin};
  &:hover {
    border-color: ${props => props.theme.palette.gs40};
  }
`;
const checkboxMixin = css<IInputLabelProps>`
  background-image: url(${CheckboxMaskSVG});
`;
const radioMixin = css<IInputLabelProps>`
  border-radius: ${props => inputSizeMap[props.sz].height};
  background-image: url(${RadioMaskSVG});
`;
const InputLabel = styled.label<IInputLabelProps>`
  display: flex;
  position: relative;
  align-self: center;
  align-items: center;
  font-size: ${props => inputSizeMap[props.sz].fontSize};
  line-height: ${props => inputSizeMap[props.sz].fontSize};
  user-select: none;

  [type=checkbox]:checked + div {
    background-color: ${props => props.theme.palette.gs60};
  }
  [type=radio]:checked + div {
    background-color: ${props => props.theme.palette.gs60};
  }

  [type=checkbox]:focus + div, [type=radio]:focus + div {
    border-color: ${props => props.theme.palette.gs40};
  }
  [type=checkbox]:active + div, [type=radio]:active + div {
    border-color: ${props => props.theme.palette.gs50};
  }
`;

const InputIcon = styled.div<IInputLabelProps>`
  display: flex;

  ${props => (props.type === 'checkbox' || props.type === 'radio') && booleanInputMixin}
  ${props => props.type === 'checkbox' && checkboxMixin}
  ${props => props.type === 'radio' && radioMixin}
`;

const InputDecoration = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
`;

const InputAddition = styled.div`
  display: flex;
  align-items: center;
  order: 1;
  position: relative;
  z-index: 1;
`;
