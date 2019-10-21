import React from 'react';
import styled, { css } from 'styled-components';

import { Sizes } from 'src/common/types/Sizes';
import { inputSizeMap } from 'src/common/theme';
import CheckmarkSVG from 'src/assets/images/icons/Checkmark.svg';
import CircleSVG from 'src/assets/images/icons/Circle.svg';

type InputTypes =
  'color'
  | 'button'
  | 'checkbox'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

interface IInputProps {
  type: InputTypes;
  size?: Sizes;
}

export const Input = React.memo<IInputProps>(
  ({
    type,
    size = 'm',
    ...props
  }) => {
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
                {...props}
              />
            </InputLabel>
          </>
        )}
        {['text', 'password', 'hidden'].some(t => t === type) && (
          <InputField
            sz={size}
            type={type}
            {...props}
          />
        )}
      </InputWrapper>
    );
  }
);

interface IInputWrapperProps {
  size: Sizes;
}
const InputWrapper = styled.div<IInputWrapperProps>`
  display: flex;
  position: relative;
  height: ${props => inputSizeMap[props.size].height};
  background: ${props => props.theme.palette.maxLight};
  border: 1px solid ${props => props.theme.palette.gs10};
`;

interface IInputLabelProps {
  sz: Sizes;
  type: InputTypes;
}
const checkboxMixin = css<IInputLabelProps>`
  &:after {
    content: '';
    display: block;
    width: calc(${props => inputSizeMap[props.sz].height} - 8px);
    height: calc(${props => inputSizeMap[props.sz].height} - 8px);
    background: ${props => props.theme.palette.maxLight};
    background-size: 90% 90%;
    color: ${props => props.theme.palette.gs60};
    border: 1px solid ${props => props.theme.palette.gs20};
  }
`;
const radioMixin = css<IInputLabelProps>`
  &:after {
    content: '';
    display: block;
    width: calc(${props => inputSizeMap[props.sz].height} - 8px);
    height: calc(${props => inputSizeMap[props.sz].height} - 8px);
    background: ${props => props.theme.palette.maxLight};
    background-size: 90% 90%;
    color: ${props => props.theme.palette.gs60};
    border: 1px solid ${props => props.theme.palette.gs20};
    border-radius: ${props => inputSizeMap[props.sz].height};
  }
`;
const InputLabel = styled.label<IInputLabelProps>`
  display: flex;
  position: relative;

  ${props => props.type === 'checkbox' && checkboxMixin}
  ${props => props.type === 'radio' && radioMixin}
`;

interface IInputFieldProps {
  sz: Sizes;
}
const InputField = styled.input<IInputFieldProps>`
  flex: 1 1 100%;
  height: 100%;
  font-size: ${props => inputSizeMap[props.sz].fontSize};
  outline: none;
  border: none;
  background: transparent;
  order: 1;
  &:focus {

  }

  &[type=checkbox], &[type=radio] {display: none;}
  &[type=checkbox]:checked + * {
    background-image: url(${CheckmarkSVG});
  }
  &[type=radio]:checked + * {
    background-image: url(${CircleSVG});
  }
`;
